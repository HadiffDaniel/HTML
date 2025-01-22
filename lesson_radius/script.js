const PI = 3.142;
let r;
let x;

document.getElementById("submit_radNum").onclick=function(){
    r=document.getElementById("radNum").value;

    x=2*PI*r;
    
    x=x.toFixed(2);
    //calculate circle's circumference
    document.getElementById("value").textContent =`Circle's Circumference: ${x} cm`;
}




