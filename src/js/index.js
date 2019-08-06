import "../scss/global.scss";
import "../scss/mainpage.scss";
import "../scss/modal.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import today  from "./modal.js";
 /* default date for date input */
 document.getElementById("actualWeight").addEventListener("click",function(){
    document.getElementById("theDate").value = today;
    document.getElementById("theDate").max = today; // it still not working 
 })
 



