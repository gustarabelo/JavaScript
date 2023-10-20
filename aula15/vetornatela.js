
var num = [2,4,6,8]
/*
for(var pos = 0; pos < num.length; pos++) 
    console.log(num[pos])
*/

for(let pos in num){
    console.log(`A posição ${pos} Contém ${num[pos]}`)
} 