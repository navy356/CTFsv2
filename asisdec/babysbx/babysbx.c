#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <limits.h>
#include <stdint.h>
#include <signal.h>
#include <seccomp.h>

#ifndef true
  #define true 1
#endif /* true */

const int whitelist[] = {
  SCMP_SYS(read), SCMP_SYS(write),
  SCMP_SYS(mprotect), SCMP_SYS(rt_sigreturn),
  SCMP_SYS(brk), SCMP_SYS(exit),
  SCMP_SYS(exit_group)
};

int message_pipe1[2];
int message_pipe2[2];
pid_t child_pid;

enum cmd {
  FILEOPEN,  
  FILEREAD,
  WRITEBUFF
};

typedef struct msg {
  enum cmd command;
  char filename[0x10];
} MSG;

void initialize_sandbox() {

  scmp_filter_ctx ctx;
  ctx = seccomp_init(SCMP_ACT_KILL);
  if(ctx == NULL) {
    perror("Seccomp failed");
    exit(-1);
  }
  for(int i = 0; i < sizeof(whitelist)/sizeof(int); i++) {
    if(seccomp_rule_add(ctx, SCMP_ACT_ALLOW, whitelist[i], 0) < 0) {
      perror("Seccomp failed");
      exit(-1);
    }
  }
  if(seccomp_load(ctx) < 0) {
    perror("Seccomp failed");
    exit(-1);
  }
  seccomp_release(ctx);
}

int child_main() {

  initialize_sandbox();
  char input[0x10];
  int choice;
  char buffer[0x100];
  int length;
  memset(buffer, 0, sizeof(buffer));
  while(true) {
    write(1, "Choice: ", 8);
    scanf("%d",&choice);
    if(choice == 1) {
      write(1, "Length: ", 8);
      scanf("%d",&length);
      if(length > 0x100) {
        write(1, "No\n", 3);
      } else {
        read(0, buffer, (uint32_t)length);
      }
    } else if (choice == 2) {
      write(1, buffer, strlen(buffer));
    } else if (choice == 3) {
      return 0;
    }
  }
}

int parent_main(int in, int out) {
  MSG message;
  FILE* fp = NULL;
  char* buffer = NULL;
  while(true) {
    read(in, &message, sizeof(MSG));
    switch(message.command) {
      case FILEOPEN:
        fp = fopen(message.filename,"rb");
        break;
      case FILEREAD:
        if(!fp)
          exit(-1);
        if(!buffer)
          buffer = (char* )malloc(0x20);
        fread(buffer, 0x20, 1, fp);
        break;
      case WRITEBUFF:
        if(buffer)
          write(out, buffer, strlen(buffer));
        break;
      default:
        exit(-1);
        break;
    }
  }
  return 1;
}

void signalHandle() {
  kill(child_pid, SIGKILL);
  exit(-1);
}

int main() {
  
  setvbuf(stdin,0,2,0);
  setvbuf(stderr,0,2,0);

  if(pipe(message_pipe1)==-1) {
    perror("Error Pipe");
    exit(-1);
  }
  if(pipe(message_pipe2)==-1) {
    perror("Error pipe");
    exit(-1);
  }
  child_pid = fork();
  if(child_pid == -1) {
    perror("Error Fork.\n");
    exit(-1);
  }
  if(child_pid == 0) {
    child_main();
  } else {
    parent_main(
      message_pipe1[0],
      message_pipe2[1]);
  }
  exit(0);
}
