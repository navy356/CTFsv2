(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24257],{24985:function(a,b,c){var d=c(52438),e={};for(var f in d)d.hasOwnProperty(f)&&(e[d[f]]=f);var g=a.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var h in g)if(g.hasOwnProperty(h)){if(!("channels"in g[h]))throw new Error("missing channels property: "+h);if(!("labels"in g[h]))throw new Error("missing channel labels property: "+h);if(g[h].labels.length!==g[h].channels)throw new Error("channel and label counts mismatch: "+h);var i=g[h].channels,j=g[h].labels;delete g[h].channels,delete g[h].labels,Object.defineProperty(g[h],"channels",{value:i}),Object.defineProperty(g[h],"labels",{value:j})}function k(a,b){return Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2)+Math.pow(a[2]-b[2],2)}g.rgb.hsl=function(a){var b,c,d,e=a[0]/255,f=a[1]/255,g=a[2]/255,h=Math.min(e,f,g),i=Math.max(e,f,g),j=i-h;return i===h?b=0:e===i?b=(f-g)/j:f===i?b=2+(g-e)/j:g===i&&(b=4+(e-f)/j),(b=Math.min(60*b,360))<0&&(b+=360),d=(h+i)/2,c=i===h?0:d<=0.5?j/(i+h):j/(2-i-h),[b,100*c,100*d]},g.rgb.hsv=function(a){var b,c,d,e,f,g=a[0]/255,h=a[1]/255,i=a[2]/255,j=Math.max(g,h,i),k=j-Math.min(g,h,i),l=function(a){return(j-a)/6/k+0.5};return 0===k?e=f=0:(f=k/j,b=l(g),c=l(h),d=l(i),g===j?e=d-c:h===j?e=1/3+b-d:i===j&&(e=2/3+c-b),e<0?e+=1:e>1&&(e-=1)),[360*e,100*f,100*j]},g.rgb.hwb=function(a){var b=a[0],c=a[1],d=a[2],e=g.rgb.hsl(a)[0],f=1/255*Math.min(b,Math.min(c,d));return d=1-1/255*Math.max(b,Math.max(c,d)),[e,100*f,100*d]},g.rgb.cmyk=function(a){var b,c,d,e,f=a[0]/255,g=a[1]/255,h=a[2]/255;return e=Math.min(1-f,1-g,1-h),b=(1-f-e)/(1-e)||0,c=(1-g-e)/(1-e)||0,d=(1-h-e)/(1-e)||0,[100*b,100*c,100*d,100*e]},g.rgb.keyword=function(a){var b,c=e[a];if(c)return c;var f=1/0;for(var g in d)if(d.hasOwnProperty(g)){var h=k(a,d[g]);h<f&&(f=h,b=g)}return b},g.keyword.rgb=function(a){return d[a]},g.rgb.xyz=function(a){var b=a[0]/255,c=a[1]/255,d=a[2]/255;return[100*(0.4124*(b=b>0.04045?Math.pow((b+0.055)/1.055,2.4):b/12.92)+0.3576*(c=c>0.04045?Math.pow((c+0.055)/1.055,2.4):c/12.92)+0.1805*(d=d>0.04045?Math.pow((d+0.055)/1.055,2.4):d/12.92)),100*(0.2126*b+0.7152*c+0.0722*d),100*(0.0193*b+0.1192*c+0.9505*d)]},g.rgb.lab=function(a){var b,c,d,e=g.rgb.xyz(a),f=e[0],h=e[1],i=e[2];return h/=100,i/=108.883,f=(f/=95.047)>0.008856?Math.pow(f,1/3):7.787*f+16/116,h=h>0.008856?Math.pow(h,1/3):7.787*h+16/116,i=i>0.008856?Math.pow(i,1/3):7.787*i+16/116,b=116*h-16,c=500*(f-h),d=200*(h-i),[b,c,d]},g.hsl.rgb=function(a){var b,c,d,e,f,g=a[0]/360,h=a[1]/100,i=a[2]/100;if(0===h)return[f=255*i,f,f];c=i<0.5?i*(1+h):i+h-i*h,b=2*i-c,e=[0,0,0];for(var j=0;j<3;j++)(d=g+ -(1/3*(j-1)))<0&&d++,d>1&&d--,f=6*d<1?b+(c-b)*6*d:2*d<1?c:3*d<2?b+(c-b)*(2/3-d)*6:b,e[j]=255*f;return e},g.hsl.hsv=function(a){var b,c,d=a[0],e=a[1]/100,f=a[2]/100,g=e,h=Math.max(f,0.01);return e*=(f*=2)<=1?f:2-f,g*=h<=1?h:2-h,c=(f+e)/2,b=0===f?2*g/(h+g):2*e/(f+e),[d,100*b,100*c]},g.hsv.rgb=function(a){var b=a[0]/60,c=a[1]/100,d=a[2]/100,e=Math.floor(b)%6,f=b-Math.floor(b),g=255*d*(1-c),h=255*d*(1-c*f),i=255*d*(1-c*(1-f));switch(d*=255,e){case 0:return[d,i,g];case 1:return[h,d,g];case 2:return[g,d,i];case 3:return[g,h,d];case 4:return[i,g,d];case 5:return[d,g,h]}},g.hsv.hsl=function(a){var b,c,d,e=a[0],f=a[1]/100,g=a[2]/100,h=Math.max(g,0.01);return d=(2-f)*g,b=(2-f)*h,c=f*h,c/=b<=1?b:2-b,c=c||0,d/=2,[e,100*c,100*d]},g.hwb.rgb=function(a){var b,c,d,e,f,g,h,i=a[0]/360,j=a[1]/100,k=a[2]/100,l=j+k;switch(l>1&&(j/=l,k/=l),b=Math.floor(6*i),c=1-k,d=6*i-b,(1&b)!=0&&(d=1-d),e=j+d*(c-j),b){default:case 6:case 0:f=c,g=e,h=j;break;case 1:f=e,g=c,h=j;break;case 2:f=j,g=c,h=e;break;case 3:f=j,g=e,h=c;break;case 4:f=e,g=j,h=c;break;case 5:f=c,g=j,h=e;break}return[255*f,255*g,255*h]},g.cmyk.rgb=function(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100,h=a[3]/100;return b=1-Math.min(1,e*(1-h)+h),c=1-Math.min(1,f*(1-h)+h),d=1-Math.min(1,g*(1-h)+h),[255*b,255*c,255*d]},g.xyz.rgb=function(a){var b,c,d,e=a[0]/100,f=a[1]/100,g=a[2]/100;return b=3.2406*e+ -1.5372*f+ -0.4986*g,c=-0.9689*e+1.8758*f+0.0415*g,d=0.0557*e+ -0.204*f+1.057*g,b=b>0.0031308?1.055*Math.pow(b,1/2.4)-0.055:12.92*b,c=c>0.0031308?1.055*Math.pow(c,1/2.4)-0.055:12.92*c,d=d>0.0031308?1.055*Math.pow(d,1/2.4)-0.055:12.92*d,b=Math.min(Math.max(0,b),1),c=Math.min(Math.max(0,c),1),d=Math.min(Math.max(0,d),1),[255*b,255*c,255*d]},g.xyz.lab=function(a){var b,c,d,e=a[0],f=a[1],g=a[2];return f/=100,g/=108.883,e=(e/=95.047)>0.008856?Math.pow(e,1/3):7.787*e+16/116,f=f>0.008856?Math.pow(f,1/3):7.787*f+16/116,g=g>0.008856?Math.pow(g,1/3):7.787*g+16/116,b=116*f-16,c=500*(e-f),d=200*(f-g),[b,c,d]},g.lab.xyz=function(a){var b,c,d,e=a[0],f=a[1],g=a[2];b=f/500+(c=(e+16)/116),d=c-g/200;var h=Math.pow(c,3),i=Math.pow(b,3),j=Math.pow(d,3);return c=h>0.008856?h:(c-16/116)/7.787,b=i>0.008856?i:(b-16/116)/7.787,d=j>0.008856?j:(d-16/116)/7.787,c*=100,d*=108.883,[b*=95.047,c,d]},g.lab.lch=function(a){var b,c=a[0],d=a[1],e=a[2];return(b=360*Math.atan2(e,d)/2/Math.PI)<0&&(b+=360),[c,Math.sqrt(d*d+e*e),b]},g.lch.lab=function(a){var b,c,d,e=a[0],f=a[1],g=a[2];return d=g/360*2*Math.PI,b=f*Math.cos(d),c=f*Math.sin(d),[e,b,c]},g.rgb.ansi16=function(a){var b=a[0],c=a[1],d=a[2],e=1 in arguments?arguments[1]:g.rgb.hsv(a)[2];if(0===(e=Math.round(e/50)))return 30;var f=30+(Math.round(d/255)<<2|Math.round(c/255)<<1|Math.round(b/255));return 2===e&&(f+=60),f},g.hsv.ansi16=function(a){return g.rgb.ansi16(g.hsv.rgb(a),a[2])},g.rgb.ansi256=function(a){var b=a[0],c=a[1],d=a[2];return b===c&&c===d?b<8?16:b>248?231:Math.round((b-8)/247*24)+232:16+36*Math.round(b/255*5)+6*Math.round(c/255*5)+Math.round(d/255*5)},g.ansi16.rgb=function(a){var b=a%10;if(0===b||7===b)return a>50&&(b+=3.5),[b=b/10.5*255,b,b];var c=(~~(a>50)+1)*0.5;return[(1&b)*c*255,(b>>1&1)*c*255,(b>>2&1)*c*255]},g.ansi256.rgb=function(a){if(a>=232){var b,c=(a-232)*10+8;return[c,c,c]}var d=Math.floor((b=(a-=16)%36)/6)/5*255;return[Math.floor(a/36)/5*255,d,b%6/5*255]},g.rgb.hex=function(a){var b=(((255&Math.round(a[0]))<<16)+((255&Math.round(a[1]))<<8)+(255&Math.round(a[2]))).toString(16).toUpperCase();return"000000".substring(b.length)+b},g.hex.rgb=function(a){var b=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!b)return[0,0,0];var c=b[0];3===b[0].length&&(c=c.split("").map(function(a){return a+a}).join(""));var d=parseInt(c,16);return[d>>16&255,d>>8&255,255&d]},g.rgb.hcg=function(a){var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=Math.max(Math.max(d,e),f),h=Math.min(Math.min(d,e),f),i=g-h;return b=i<1?h/(1-i):0,c=i<=0?0:g===d?(e-f)/i%6:g===e?2+(f-d)/i:4+(d-e)/i+4,c/=6,c%=1,[360*c,100*i,100*b]},g.hsl.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=1,e=0;return(d=c<0.5?2*b*c:2*b*(1-c))<1&&(e=(c-0.5*d)/(1-d)),[a[0],100*d,100*e]},g.hsv.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=b*c,e=0;return d<1&&(e=(c-d)/(1-d)),[a[0],100*d,100*e]},g.hcg.rgb=function(a){var b=a[0]/360,c=a[1]/100,d=a[2]/100;if(0===c)return[255*d,255*d,255*d];var e=[0,0,0],f=b%1*6,g=f%1,h=1-g,i=0;switch(Math.floor(f)){case 0:e[0]=1,e[1]=g,e[2]=0;break;case 1:e[0]=h,e[1]=1,e[2]=0;break;case 2:e[0]=0,e[1]=1,e[2]=g;break;case 3:e[0]=0,e[1]=h,e[2]=1;break;case 4:e[0]=g,e[1]=0,e[2]=1;break;default:e[0]=1,e[1]=0,e[2]=h}return i=(1-c)*d,[(c*e[0]+i)*255,(c*e[1]+i)*255,(c*e[2]+i)*255]},g.hcg.hsv=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b),d=0;return c>0&&(d=b/c),[a[0],100*d,100*c]},g.hcg.hsl=function(a){var b=a[1]/100,c=a[2]/100*(1-b)+0.5*b,d=0;return c>0&&c<0.5?d=b/(2*c):c>=0.5&&c<1&&(d=b/(2*(1-c))),[a[0],100*d,100*c]},g.hcg.hwb=function(a){var b=a[1]/100,c=b+a[2]/100*(1-b);return[a[0],(c-b)*100,(1-c)*100]},g.hwb.hcg=function(a){var b=a[1]/100,c=a[2]/100,d=1-c,e=d-b,f=0;return e<1&&(f=(d-e)/(1-e)),[a[0],100*e,100*f]},g.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},g.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},g.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},g.gray.hsl=g.gray.hsv=function(a){return[0,0,a[0]]},g.gray.hwb=function(a){return[0,100,a[0]]},g.gray.cmyk=function(a){return[0,0,0,a[0]]},g.gray.lab=function(a){return[a[0],0,0]},g.gray.hex=function(a){var b=255&Math.round(a[0]/100*255),c=((b<<16)+(b<<8)+b).toString(16).toUpperCase();return"000000".substring(c.length)+c},g.rgb.gray=function(a){return[(a[0]+a[1]+a[2])/3/255*100]}},29843:function(a,b,c){var d=c(24985),e=c(72468),f={};Object.keys(d).forEach(function(a){f[a]={},Object.defineProperty(f[a],"channels",{value:d[a].channels}),Object.defineProperty(f[a],"labels",{value:d[a].labels});var b=e(a);Object.keys(b).forEach(function(c){var d=b[c];f[a][c]=(function(a){var b=function(b){if(null==b)return b;arguments.length>1&&(b=Array.prototype.slice.call(arguments));var c=a(b);if("object"==typeof c)for(var d=c.length,e=0;e<d;e++)c[e]=Math.round(c[e]);return c};return"conversion"in a&&(b.conversion=a.conversion),b})(d),f[a][c].raw=(function(a){var b=function(b){return null==b?b:(arguments.length>1&&(b=Array.prototype.slice.call(arguments)),a(b))};return"conversion"in a&&(b.conversion=a.conversion),b})(d)})}),a.exports=f},52438:function(a){"use strict";a.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},72468:function(a,b,c){var d=c(24985);function e(a,b){return function(c){return b(a(c))}}function f(a,b){for(var c=[b[a].parent,a],f=d[b[a].parent][a],g=b[a].parent;b[g].parent;)c.unshift(b[g].parent),f=e(d[b[g].parent][g],f),g=b[g].parent;return f.conversion=c,f}a.exports=function(a){for(var b=function(a){var b=function(){for(var a={},b=Object.keys(d),c=b.length,e=0;e<c;e++)a[b[e]]={distance:-1,parent:null};return a}(),c=[a];for(b[a].distance=0;c.length;)for(var e=c.pop(),f=Object.keys(d[e]),g=f.length,h=0;h<g;h++){var i=f[h],j=b[i];-1===j.distance&&(j.distance=b[e].distance+1,j.parent=e,c.unshift(i))}return b}(a),c={},e=Object.keys(b),g=e.length,h=0;h<g;h++){var i=e[h];null!==b[i].parent&&(c[i]=f(i,b))}return c}},6432:function(a){"use strict";a.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},23682:function(a,b,c){var d=c(6432),e=c(27528),f={};for(var g in d)d.hasOwnProperty(g)&&(f[d[g]]=g);var h=a.exports={to:{},get:{}};function i(a,b,c){return Math.min(Math.max(b,a),c)}function j(a){var b=a.toString(16).toUpperCase();return b.length<2?"0"+b:b}h.get=function(a){var b,c,d=a.substring(0,3).toLowerCase();switch(d){case"hsl":b=h.get.hsl(a),c="hsl";break;case"hwb":b=h.get.hwb(a),c="hwb";break;default:b=h.get.rgb(a),c="rgb";break}return b?{model:c,value:b}:null},h.get.rgb=function(a){if(!a)return null;var b,c,e,f=[0,0,0,1];if(b=a.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(c=0,e=b[2],b=b[1];c<3;c++){var g=2*c;f[c]=parseInt(b.slice(g,g+2),16)}e&&(f[3]=parseInt(e,16)/255)}else if(b=a.match(/^#([a-f0-9]{3,4})$/i)){for(c=0,e=(b=b[1])[3];c<3;c++)f[c]=parseInt(b[c]+b[c],16);e&&(f[3]=parseInt(e+e,16)/255)}else if(b=a.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(c=0;c<3;c++)f[c]=parseInt(b[c+1],0);b[4]&&(f[3]=parseFloat(b[4]))}else{if(!(b=a.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(b=a.match(/(\D+)/))?"transparent"===b[1]?[0,0,0,0]:(f=d[b[1]])?(f[3]=1,f):null:null;for(c=0;c<3;c++)f[c]=Math.round(2.55*parseFloat(b[c+1]));b[4]&&(f[3]=parseFloat(b[4]))}for(c=0;c<3;c++)f[c]=i(f[c],0,255);return f[3]=i(f[3],0,1),f},h.get.hsl=function(a){if(!a)return null;var b=a.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/);if(b){var c=parseFloat(b[4]),d=(parseFloat(b[1])+360)%360,e=i(parseFloat(b[2]),0,100),f=i(parseFloat(b[3]),0,100),g=i(isNaN(c)?1:c,0,1);return[d,e,f,g]}return null},h.get.hwb=function(a){if(!a)return null;var b=a.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(b){var c=parseFloat(b[4]),d=(parseFloat(b[1])%360+360)%360,e=i(parseFloat(b[2]),0,100),f=i(parseFloat(b[3]),0,100),g=i(isNaN(c)?1:c,0,1);return[d,e,f,g]}return null},h.to.hex=function(){var a=e(arguments);return"#"+j(a[0])+j(a[1])+j(a[2])+(a[3]<1?j(Math.round(255*a[3])):"")},h.to.rgb=function(){var a=e(arguments);return a.length<4||1===a[3]?"rgb("+Math.round(a[0])+", "+Math.round(a[1])+", "+Math.round(a[2])+")":"rgba("+Math.round(a[0])+", "+Math.round(a[1])+", "+Math.round(a[2])+", "+a[3]+")"},h.to.rgb.percent=function(){var a=e(arguments),b=Math.round(a[0]/255*100),c=Math.round(a[1]/255*100),d=Math.round(a[2]/255*100);return a.length<4||1===a[3]?"rgb("+b+"%, "+c+"%, "+d+"%)":"rgba("+b+"%, "+c+"%, "+d+"%, "+a[3]+")"},h.to.hsl=function(){var a=e(arguments);return a.length<4||1===a[3]?"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)":"hsla("+a[0]+", "+a[1]+"%, "+a[2]+"%, "+a[3]+")"},h.to.hwb=function(){var a=e(arguments),b="";return a.length>=4&&1!==a[3]&&(b=", "+a[3]),"hwb("+a[0]+", "+a[1]+"%, "+a[2]+"%"+b+")"},h.to.keyword=function(a){return f[a.slice(0,3)]}},24257:function(a,b,c){"use strict";var d=c(23682),e=c(29843),f=[].slice,g=["keyword","gray","hex"],h={};Object.keys(e).forEach(function(a){h[f.call(e[a].labels).sort().join("")]=a});var i={};function j(a,b){if(!(this instanceof j))return new j(a,b);if(b&&b in g&&(b=null),b&&!(b in e))throw new Error("Unknown model: "+b);if(null==a)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(a instanceof j)this.model=a.model,this.color=a.color.slice(),this.valpha=a.valpha;else if("string"==typeof a){var c,k,l=d.get(a);if(null===l)throw new Error("Unable to parse color from string: "+a);this.model=l.model,k=e[this.model].channels,this.color=l.value.slice(0,k),this.valpha="number"==typeof l.value[k]?l.value[k]:1}else if(a.length){this.model=b||"rgb",k=e[this.model].channels;var n=f.call(a,0,k);this.color=m(n,k),this.valpha="number"==typeof a[k]?a[k]:1}else if("number"==typeof a)a&=16777215,this.model="rgb",this.color=[a>>16&255,a>>8&255,255&a],this.valpha=1;else{this.valpha=1;var o=Object.keys(a);"alpha"in a&&(o.splice(o.indexOf("alpha"),1),this.valpha="number"==typeof a.alpha?a.alpha:0);var p=o.sort().join("");if(!(p in h))throw new Error("Unable to parse color from object: "+JSON.stringify(a));this.model=h[p];var q=e[this.model].labels,r=[];for(c=0;c<q.length;c++)r.push(a[q[c]]);this.color=m(r)}if(i[this.model])for(c=0,k=e[this.model].channels;c<k;c++){var s=i[this.model][c];s&&(this.color[c]=s(this.color[c]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function k(a,b,c){return(a=Array.isArray(a)?a:[a]).forEach(function(a){(i[a]||(i[a]=[]))[b]=c}),a=a[0],function(d){var e;return arguments.length?(c&&(d=c(d)),(e=this[a]()).color[b]=d,e):(e=this[a]().color[b],c&&(e=c(e)),e)}}function l(a){return function(b){return Math.max(0,Math.min(a,b))}}function m(a,b){for(var c=0;c<b;c++)"number"!=typeof a[c]&&(a[c]=0);return a}j.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(a){var b=this.model in d.to?this:this.rgb(),c=1===(b=b.round("number"==typeof a?a:1)).valpha?b.color:b.color.concat(this.valpha);return d.to[b.model](c)},percentString:function(a){var b=this.rgb().round("number"==typeof a?a:1),c=1===b.valpha?b.color:b.color.concat(this.valpha);return d.to.rgb.percent(c)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var a={},b=e[this.model].channels,c=e[this.model].labels,d=0;d<b;d++)a[c[d]]=this.color[d];return 1!==this.valpha&&(a.alpha=this.valpha),a},unitArray:function(){var a=this.rgb().color;return a[0]/=255,a[1]/=255,a[2]/=255,1!==this.valpha&&a.push(this.valpha),a},unitObject:function(){var a=this.rgb().object();return a.r/=255,a.g/=255,a.b/=255,1!==this.valpha&&(a.alpha=this.valpha),a},round:function(a){var b;return a=Math.max(a||0,0),new j(this.color.map((b=a,function(a){var c,d;return c=a,d=b,Number(c.toFixed(d))})).concat(this.valpha),this.model)},alpha:function(a){return arguments.length?new j(this.color.concat(Math.max(0,Math.min(1,a))),this.model):this.valpha},red:k("rgb",0,l(255)),green:k("rgb",1,l(255)),blue:k("rgb",2,l(255)),hue:k(["hsl","hsv","hsl","hwb","hcg"],0,function(a){return(a%360+360)%360}),saturationl:k("hsl",1,l(100)),lightness:k("hsl",2,l(100)),saturationv:k("hsv",1,l(100)),value:k("hsv",2,l(100)),chroma:k("hcg",1,l(100)),gray:k("hcg",2,l(100)),white:k("hwb",1,l(100)),wblack:k("hwb",2,l(100)),cyan:k("cmyk",0,l(100)),magenta:k("cmyk",1,l(100)),yellow:k("cmyk",2,l(100)),black:k("cmyk",3,l(100)),x:k("xyz",0,l(100)),y:k("xyz",1,l(100)),z:k("xyz",2,l(100)),l:k("lab",0,l(100)),a:k("lab",1),b:k("lab",2),keyword:function(a){return arguments.length?new j(a):e[this.model].keyword(this.color)},hex:function(a){return arguments.length?new j(a):d.to.hex(this.rgb().round().color)},rgbNumber:function(){var a=this.rgb().color;return(255&a[0])<<16|(255&a[1])<<8|255&a[2]},luminosity:function(){for(var a=this.rgb().color,b=[],c=0;c<a.length;c++){var d=a[c]/255;b[c]=d<=0.03928?d/12.92:Math.pow((d+0.055)/1.055,2.4)}return 0.2126*b[0]+0.7152*b[1]+0.0722*b[2]},contrast:function(a){var b=this.luminosity(),c=a.luminosity();return b>c?(b+0.05)/(c+0.05):(c+0.05)/(b+0.05)},level:function(a){var b=this.contrast(a);return b>=7.1?"AAA":b>=4.5?"AA":""},isDark:function(){var a=this.rgb().color;return(299*a[0]+587*a[1]+114*a[2])/1000<128},isLight:function(){return!this.isDark()},negate:function(){for(var a=this.rgb(),b=0;b<3;b++)a.color[b]=255-a.color[b];return a},lighten:function(a){var b=this.hsl();return b.color[2]+=b.color[2]*a,b},darken:function(a){var b=this.hsl();return b.color[2]-=b.color[2]*a,b},saturate:function(a){var b=this.hsl();return b.color[1]+=b.color[1]*a,b},desaturate:function(a){var b=this.hsl();return b.color[1]-=b.color[1]*a,b},whiten:function(a){var b=this.hwb();return b.color[1]+=b.color[1]*a,b},blacken:function(a){var b=this.hwb();return b.color[2]+=b.color[2]*a,b},grayscale:function(){var a=this.rgb().color,b=0.3*a[0]+0.59*a[1]+0.11*a[2];return j.rgb(b,b,b)},fade:function(a){return this.alpha(this.valpha-this.valpha*a)},opaquer:function(a){return this.alpha(this.valpha+this.valpha*a)},rotate:function(a){var b=this.hsl(),c=b.color[0];return c=(c=(c+a)%360)<0?360+c:c,b.color[0]=c,b},mix:function(a,b){if(!a||!a.rgb)throw new Error("Argument to \"mix\" was not a Color instance, but rather an instance of "+typeof a);var c=a.rgb(),d=this.rgb(),e=void 0===b?0.5:b,f=2*e-1,g=c.alpha()-d.alpha(),h=((f*g== -1?f:(f+g)/(1+f*g))+1)/2,i=1-h;return j.rgb(h*c.red()+i*d.red(),h*c.green()+i*d.green(),h*c.blue()+i*d.blue(),c.alpha()*e+d.alpha()*(1-e))}},Object.keys(e).forEach(function(a){if(-1===g.indexOf(a)){var b=e[a].channels;j.prototype[a]=function(){if(this.model===a)return new j(this);if(arguments.length)return new j(arguments,a);var c,d="number"==typeof arguments[b]?b:this.valpha;return new j((c=e[this.model][a].raw(this.color),Array.isArray(c)?c:[c]).concat(d),a)},j[a]=function(c){return"number"==typeof c&&(c=m(f.call(arguments),b)),new j(c,a)}}}),a.exports=j},88071:function(a){a.exports=function(a){return!!a&&"string"!=typeof a&&(a instanceof Array||Array.isArray(a)||a.length>=0&&(a.splice instanceof Function||Object.getOwnPropertyDescriptor(a,a.length-1)&&"String"!==a.constructor.name))}},27528:function(a,b,c){"use strict";var d=c(88071),e=Array.prototype.concat,f=Array.prototype.slice,g=a.exports=function(a){for(var b=[],c=0,g=a.length;c<g;c++){var h=a[c];d(h)?b=e.call(b,f.call(h)):b.push(h)}return b};g.wrap=function(a){return function(){return a(g(arguments))}}}}])