function equation(str){
    var l = str.length;
    var p = 3;//position poiter
    var sum = 0;
    if(str[1]=='+'){
        sum = parseInt(str[0])+parseInt(str[2]);
    }else if(str[1]=='-'){
        sum = parseInt(str[0])-parseInt(str[2]);
    } else  if(str[1]=='*'){
        sum = parseInt(str[0])*parseInt(str[2]);
    }else if(str[1]=='/'){
        sum = parseInt(str[0])/parseInt(str[2]);
    }
    if(l > 3){
        return cal(l,p,sum,str);
    }else return sum;
    
}
function cal(l,p,sum,str){
    if(str[p]=='+'){
        sum = sum +parseInt(str[p+1]);
    }else if(str[p]=='-'){
        sum = sum - parseInt(str[p+1]);
    } else  if(str[p]=='*'){
        sum = sum * parseInt(str[p+1]);
    }else if(str[p]=='/'){
        sum = sum /parseInt(str[p+1]);
    }
    p = p+2;
    if (p >= l){
        return sum;
    }else return cal(l,p,sum,str);
}
console.log("equation('1+2') : " ,equation("1+2"));
console.log("equation('7*4-2') : ",equation("7*4-2"));
console.log("equation('1+1+1+1+1') : ",equation("1+1+1+1+1"))