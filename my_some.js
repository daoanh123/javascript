var courses=[
    
    {
        name:'javascript',
        coin: 600,
        isFinish: false
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name:'ruby',
        coin:750,
        isFinish: false
    }
]
Array.prototype.some2=function(callBack)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var result=callBack(this[index],index,this);
            if(result)
            break;
        }
    }
    return result;
}
var result=courses.some2(function(course,index,array)
{
    return course.isFinish;
});
console.log(result);