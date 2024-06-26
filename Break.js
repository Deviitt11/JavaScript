let num = 1;

for(i = 1; i<=100, i++;){
    num*=i;
    
    if(num > 10000) {
        break;
    }
    
}

console.log(num);
