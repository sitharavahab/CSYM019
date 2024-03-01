function print5(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();
print5();

function myLoadFunction(){
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Heading';
    element.addEventListener('click', myLoadFunction);
}
function myLoadFunctions(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'changed using addEventListener'  
}
document.addEventListener('click', myLoadFunctions);
//DOMContentLoaded