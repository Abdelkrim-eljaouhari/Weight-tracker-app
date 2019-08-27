import {chartColorRange} from "./chartColorRange";
export function actualWeight(){
    let elements=[...JSON.parse(localStorage.getItem("weightDate"))];
    let actualWeight=elements[elements.length-1].weight;
    document.getElementById("yWeight").innerHTML = actualWeight + "<span> Kg </span>";
    let color =chartColorRange(actualWeight);
    localStorage.setItem("actualWeightColor",JSON.stringify(color));
}