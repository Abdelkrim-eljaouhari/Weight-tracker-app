import Chart from 'chart.js';
import "../scss/global.scss";
import "../scss/mainpage.scss";
import "../scss/history.scss";
import "../scss/modal.scss";
import "../scss/actualweight.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import today  from "./modal";
import { result } from "./history";
import {actualWeight} from "./actualWeight";
import {chartColorRange} from "./chartColorRange";



export function changeTbaleContent(){
  var str="";
  JSON.parse(localStorage.getItem("weightDate")).reverse().map(function(item,i){
      return str+=`<tr>
      <th scope="row">${i+1}</th>
      <td>${item.weight}</td>
      <td>${item.weightdate}</td>
      <td id=${item.id}><button type="button" class="btn btn-danger">Delete</button> <i class="far fa-edit" data-toggle="modal" data-target="#exampleModal"></i></td>
    </tr> `
  });
  document.getElementById("tableBody").innerHTML="";
  document.getElementById("tableBody").insertAdjacentHTML('afterbegin',str);
 };  


window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("actualW").addEventListener("click",function(){
    document.getElementById("modalTitle").textContent="Add your weight";
    document.getElementById("theDate").value = today;
    /*--*/
    //document.getElementById("theDate").max = today; // it still not working
});
/*Change active page function */
  function changeActivePage(active){
document.querySelector(".active").classList.remove("active");
document.querySelector(`.${active}`).classList.add("active");
} 
/* change page */

 /*--*/
document.getElementById("list").addEventListener("click",function(e){
e.preventDefault();
let text=e.target.textContent.toLowerCase().replace(/\s/g, '');
changeActivePage(text);
if (text==="history"){
  changeTbaleContent();
 }
 else if (text==="actualweight"){
  actualWeight();
  let color =JSON.parse(localStorage.getItem("actualWeightColor"));
  document.getElementById("yWeight").style.color=color;
  document.querySelector(".yourWeight").style.border="2px solid "+ color;
 }
});

/* go back to main page */
[...document.querySelectorAll(".clickme")].forEach(function(item){
item.addEventListener("click",function(){
changeActivePage("menu");
history.replaceState({id:null},null,"./");
});
});


/*-- change page url --*/

let links = Array.from(document.getElementsByClassName("links"));
links.forEach(function(b){
let id=b.id;
b.addEventListener("click",function(e){
  history.pushState({id},null,`./${id}`); 
});  
});



window.addEventListener("popstate",function(e){
/*
Adding items to the tbody table in history page

 */
 if(!e.state){
   changeActivePage("menu");
 }else {
   changeActivePage(e.state.id.toLowerCase());
 }
});

/*--Chart.js --*/

//let spliced=elements.splice(elements.length-6,6);


document.getElementById("chart").addEventListener("click",function(){
  
  let backgroundColor=[];
  let elements=[...JSON.parse(localStorage.getItem("weightDate"))];
  var data=[];
  var labels=[];
  elements.forEach(function(item){
    data.push(item.weight);
    labels.push(item.weightdate);
    backgroundColor.push(chartColorRange(item.weight));
  });
  console.log(backgroundColor);
  
  var myChart = document.getElementById('myChart').getContext('2d');
var barChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels,
        datasets: [{
            label: 'Weight',
            data,
            backgroundColor
        }],
    },
    options: {
      title:{
        display:true,
        text:"Your weights"
      },
      legend:{
        position:"right",
        labels:{
          fontColor:"black"
        }
      }
    }
}); 
})
});
/*--a chart--*/




 



 


 






