function click1(event)
{
    var result;
    
    let f1=document.getElementById('field1').value;
    let f2=document.getElementById('select1').value;
    let r1=document.getElementById('result');
    const k=/^(0|-?[1-9]\d{0,5})$/;
    if( (!k.test(f2) ))
    { r1.innerHTML = "Введены некорректные данные";}
    if (f2=="v1") f2=360;
    else if (f2=="v2") f2=500;
    else if (f2=="v3") f2= 410;
    else f2==440;
    
    { result=f1*f2;
        r1.innerHTML ="Стоимость заказа: "+ result;
    }
    event.preventDefault();
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b=document.getElementById("button1");
    b.addEventListener("click", click1);
});