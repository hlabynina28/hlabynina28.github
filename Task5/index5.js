function click1(event)
{
    console.log(event.target)
    event.preventDefault();
    var result;
    let f1=document.getElementById('field1').value;
    f1=parseInt(f1);
    let f2=document.querySelector('.s').value;
    let r1=document.getElementById('result');
      
    if (f2=="v1") f2=360;
    else if (f2=="v2") f2=500;
    else if (f2=="v3") f2= 410;
    else f2=440;
    result=f1*f2;
    r1.innerHTML =result;
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b=document.getElementById("button");
    b.addEventListener("click", click1);
});
