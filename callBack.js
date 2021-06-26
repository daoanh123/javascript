// callBack
// là hàm được truyền qua đối số
// khi gọi hàm khác
// 1.là hàm
// 2.Được truyền qua đối số
// function myFunction(param)
// {
// param(123);
// }
// function myCallback(value)
// {
//     console.log('Value:', value);
// }
// myFunction(myCallback);
Array.prototype.map2=function(Callback)
{   var output=[];
    for(let i=0;i<this.length;i++)
    {
      var result=  Callback(this[i],i);
    //   console.log('result:',result);
    output.push(result)
    }
    return output;
}
var courses=[
    'js',
    'PHP',
    'Ruby'
];
var htmls=courses.map2(function(coures,index)
{
    return `<h2>${coures}</h2>`
});
console.log(htmls.join(''));