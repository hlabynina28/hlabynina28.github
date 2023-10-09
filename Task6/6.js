const basic_option_cost={
    "M":1900,
    "Hoodie SKY":2100,
    "T":1700,
  };
  const additional_cost={
    "Black":0,
    "White":100,
    "Navy":400,
    "Lime":400,
  };
  
  function UpdateFinalCost(){
    let Cost=0;
    let myradios=document.getElementsByName("myradio");
    let myradio_selected="M";
  
    myradios.forEach((radio) => {
      if(radio.checked) {
          myradio_selected = radio.value;
          let myradio_cost = basic_option_cost[radio.value];
          Cost += myradio_cost;
        }
    });
   
    let mylist=document.getElementById("mylist");
    mylist.style.display = (myradio_selected == "Hoodie SKY") ? "block" : "none";
    let mylist_selected = document.getElementById("mylist");
    if (!mylist_selected.value=="") {
        Cost += additional_cost[mylist.value];
    }

    let checkbox=document.getElementById("checkbox");
    checkbox.style.display = (myradio_selected == "T" ? "block" : "none");
    let chch=document.getElementById("checkbox-checked");
    if (chch.checked) Cost+=300;
    
    let amount = document.getElementById("fieldk");
    Cost*=Number(amount.value);


    let result=document.getElementById("result_6");
    result.innerHTML= Cost;
  }

  function obnl(){
    document.getElementById("checkbox-checked").checked = false;
    document.getElementById("mylist").value = "M";
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    obnl();

    let myradios = document.getElementsByName("myradio");
    let mylist=document.getElementById("mylist");
    let checkbox=document.getElementById("checkbox");
    let input = document.getElementById("fieldk");
    
    mylist.value="M";
  
    mylist.style.display = "none";
    checkbox.style.display = "none";
  
    input.addEventListener("input", () => {
      UpdateFinalCost();
    })
  
    mylist.addEventListener("change", (event) => {
      UpdateFinalCost();
    });
  
    myradios.forEach((radio) => {
        radio.checked = false;
        radio.addEventListener("change", (event) => {
            obnl();
            UpdateFinalCost();
        })
    });
  
    document.getElementById("checkbox-checked").addEventListener("change", (event) => {
      UpdateFinalCost();
    });
  });
  