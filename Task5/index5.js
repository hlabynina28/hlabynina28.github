function click1(event) {
    event.preventDefault();
    var result;
    var f1=document.getElementById("field1").value;
    var f2=document.querySelector(".s").value;
    var r1=document.getElementById("result");
    f1=parseInt(f1);
    if (f2=="v1") result=360*f1;
    else if (f2=="v2") result=500*f1;
    else if (f2=="v3") result=410*f1;
    else result=440*f1;
    r1.innerHTML =result;
}

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let b=document.getElementById("button");
    b.addEventListener("click", click1);
});
