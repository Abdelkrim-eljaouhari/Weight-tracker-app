
import {changeTbaleContent} from "./index";
export var result =document.getElementById("tableBody").addEventListener("click",function(e){
    let weightDate= JSON.parse(localStorage.getItem("weightDate"));
    let id =e.target.parentNode.id;
    if(e.target.classList.value.includes("fa-edit")){
    document.getElementById("modalTitle").textContent="Edit this weight";
     console.log(weightDate);
     let newarr= weightDate.map(function(item,i){
         if(item.id===id){
             let weightInput=document.getElementById("weightNmber");
                weightInput.value=item.weight;
                document.getElementById("theDate").value=item.weightdate;
                document.getElementById("submitted").addEventListener("click",function(){
                   
               if(weightInput.value){
                  item["weight"]=document.getElementById("weightNmber").value;
                  changeTbaleContent();
                  return item;
               } 
            });
         }
         return item;
     });
     localStorage.setItem("weightDate",JSON.stringify(newarr));
    }
    else if(e.target.classList.value.includes("btn-danger")){
        if(confirm("Are you sure of that")){
            let deletedArr=weightDate.filter(function(item){
                return item.id!== id;
            })
            localStorage.setItem("weightDate",JSON.stringify(deletedArr));
            changeTbaleContent();
        }  
    }
  });

  
 
  
   

  





