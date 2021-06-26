var courses = [
    'js',
    'php',
    'css'
];
Array.prototype.forEach2=function(callBack)
{
    for(var index in this)
    {
        
        if(this.hasOwnProperty(index))
        // {   console.log('index',index);
            callBack(this[index],index,this);
        }
        
    }

courses.forEach2(function(course,index,array){
    console.log(course,index,array);
});