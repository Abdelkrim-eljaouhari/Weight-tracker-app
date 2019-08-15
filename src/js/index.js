
import "../scss/global.scss";
import "../scss/mainpage.scss";
import "../scss/history.scss";
import "../scss/modal.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import today  from "./modal.js";
//import {tbodyEl}  from "./history.js";
 /* default date for date input */
document.onload = function(){
   document.getElementById("actualWeight").addEventListener("click",function(){
      document.getElementById("theDate").value = today;
      //document.getElementById("theDate").max = today; // it still not working
    });
};




 


 






