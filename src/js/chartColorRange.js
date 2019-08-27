export function chartColorRange(num){
    console.log("working here also");
     if(num >= 90) {
       return "red";
     }
     else if (num > 60 && num < 90){
       return "green"
     } else if (num <= 60 ){
       return "yellow"
     }
   }