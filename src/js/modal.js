var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;  
export default today;  
  
//Jquery modal submittion
var submittedBtn=document.getElementById("submitted"); 
var emptyfield=document.getElementById("emptyfield");
 function emptyField(message){
    var msg=document.createElement("p");
    var textNode=document.createTextNode(message);
    msg.appendChild(textNode);
    emptyfield.appendChild(msg);
    submittedBtn.setAttribute("data-dismiss", "modal");// the modal dissapears 
 };

 /*-- Random Id for every single weight --*/
 var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
 var weightDate=[];
$("#submitted").click(function(){
    var weight= $("#exampleModal #weightNmber").val();
    var theDate= $("#exampleModal #theDate").val();
    if(!weight) {
        emptyField("Please enter your weight");
        setTimeout(function(){
            submittedBtn.removeAttribute("data-dismiss"); //the modal still there
            emptyfield.removeChild(emptyfield.childNodes[1]);
        },3000);
    }
    else if(weight && weightDate.length > 0 && weightDate[weightDate.length-1].weightdate==theDate){
       weightDate.pop();
       weightDate.push({
        weight:weight,
        weightdate:theDate,
        id:ID()
    }); 
        emptyField("You edited the last weight");
        setTimeout(function(){
            emptyfield.removeChild(emptyfield.childNodes[1]);
        },3000);
        localStorage.setItem("weightDate",JSON.stringify(weightDate));
    }  
    //Push an objects filled with weight and date 
     else{
        weightDate.push({
            weight:weight,
            weightdate:theDate,
            id:ID()
        }); 
        submittedBtn.setAttribute("data-dismiss", "modal");// the modal dissapears 
        let sortWeight= weightDate.sort(function(a,b){
            return new Date(a.weightdate) - new Date(b.weightdate);
          });
        localStorage.setItem("weightDate",JSON.stringify(sortWeight));
     }
     
 });

 

