"use strict";

window.onload = init;

function init(){

    const pickupDate = document.getElementById("pickupDate");
    
    const noOfDays = document.getElementById("noOfDays");

    const tollTagChkbox = document.getElementById("tollTagChkbox");

    const gpsChkbox = document.getElementById("gpsChkbox");

    const roadsideChkbox = document.getElementById("roadsideChkbox");

    const optionNo = document.getElementById("optionNo");

    const optionYes = document.getElementById("optionYes");

    const estimateTotalCost = document.getElementById("estimateTotalCost");
    estimateTotalCost.onclick = calculateEstimateTotalCost;

}

function calculateEstimateTotalCost(){

    let noOfDays = document.getElementById("noOfDays");
    let numberOfDays = noOfDays.value;

    let basicCarRental = 29.99;
    let tollCost = 0;
    let surcharge = 0;
    let tollTagCost = 0;

    let tollTagChkbox = document.getElementById("tollTagChkbox");
    let gpsChkbox = document.getElementById("gpsChkbox");
    let roadsideChkbox = document.getElementById("roadsideChkbox");

    let optionYes = document.getElementById("optionYes");
    if(optionYes.checked){
        surcharge = (basicCarRental * 0.30) + 29.99;
    }

    //Assuming multiple options are selected 
    //finding which tolltags are selected and 
    //taking out per day cost of that tolltag type
    if(tollTagChkbox.checked){
        tollCost = 3.95;
    }
    if(gpsChkbox.checked){
        tollCost = 4.95;
    }
    if(roadsideChkbox.checked){
        tollCost = 2.95;
    }
   
    tollTagCost = numberOfDays * (basicCarRental + surcharge +  tollCost);

    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv");

     // Set the contents of the div
    messageDiv.innerHTML = `Car Rental: ${numberOfDays} <br>
                             Options: ${tollCost}  <br>
                             Under 25 Surcharge: ${surcharge} <br>
                             <br>
                             Total due: ${tollTagCost}`; 
/**
    messageDiv.innerHTML = "Car Rental: " + numberOfDays + 
                            "<br> Options: " + tollCost + 
                            "<br> Under 25 Surcharge: " + surcharge + 
                            "<br> Total due: " + tollTagCost;  */

}