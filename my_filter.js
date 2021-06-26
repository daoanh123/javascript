
Array.prototype.filter2=function(callBack)
{
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
           var result = callBack(this[index],index,this);
           if(result)
           
           output.push(this[index]);
        }
        
    }
    return output;
}

var courses=[
    
    {
        name:'javascript',
        coin: 600
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name:'ruby',
        coin:750
    }
]

var filterCourses=courses.filter2(function(course,index,array)
{
    return course.coin>700
});

console.log(filterCourses);