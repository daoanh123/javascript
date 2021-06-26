const numbers=[10,5,15,20]
Array.prototype.reduce2 = function (callback,result)
{
    let i=0;
    if(arguments.length<2)
    {
        i=1;
        result=this[0];
    }
    
    for (;i<this.length;i++)
    {
    result=callback(result, this[i],i,this);// gọi lại total
    }
    return result;

}
const result=numbers.reduce2((total,number) =>  {
    return total+number;
},)
console.log(result)
