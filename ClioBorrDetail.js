// ==UserScript==
// @name         ClioBorrDet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://waubonsee-staff.cliohosting.com/BorRequest/Details/*
// @icon         https://www.google.com/s2/favicons?domain=cliohosting.com
// @grant        none
// ==/UserScript==

// var pickup_location=document.querySelector("#reqcollapse > div:nth-child(1) > div.col-md-6 > dl > dd:nth-child(36) > b").innerHTML;
/* var pickup_location=document.querySelector("#reqcollapse > div:nth-child(1) > div.col-md-6 > dl > dd:nth-child(32) > b").innerHTML;
var name=document.querySelector("#patronHold453 > div > div.col-md-9 > dl > dd:nth-child(2)")

var selTest = document.querySelector("#reqcollapse > div:nth-child(1) > div.col-md-6");

var selDd = selTest; */

//alert(pickup_location);
var sel = document.querySelectorAll("#reqcollapse > div:nth-child(1) > div.col-md-6 > dl > dt");
//alert(sel[5].innerHTML);
var elemnum=-1;
const re = /.*location.*/i;
var mystr = "";
var label = "";
var name ="";
var pu = "";


for (const e of sel) {
        elemnum++;
         mystr =e.innerHTML;
          console.log(elemnum);
          console.log(mystr);
label = sel[elemnum].innerHTML;
    //location = sel[elemnum].;

       console.log(re.test(mystr));
    if(re.test(mystr)){
        alert(label);
    }

}


(function() {
    'use strict';

    // Your code here...
})();