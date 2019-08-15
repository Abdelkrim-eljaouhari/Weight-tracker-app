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
 function emptyFilled(message){
    var msg=document.createElement("p");
    var textNode=document.createTextNode(message);
    msg.appendChild(textNode);
    emptyfield.appendChild(msg);
    submittedBtn.setAttribute("data-dismiss", "modal");// the modal dissapears 
 } 
 var weightDate=[];
$("#submitted").click(function(){
    var weight= $("#exampleModal #weightNmber").val();
    var theDate= $("#exampleModal #theDate").val();
    if(!weight) {
        emptyFilled("Please enter your weight");
        setTimeout(function(){
            submittedBtn.removeAttribute("data-dismiss"); //the modal still there
            emptyfield.removeChild(emptyfield.childNodes[1]);
        },3000);
    } 
    //Push an objects filled with weight and date 
    weightDate.push({
        weight:weight,
        weightdate:theDate
    });   
    
 });

 

