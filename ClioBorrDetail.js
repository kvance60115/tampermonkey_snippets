// ==UserScript==
// @name         ClioBorrDet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the Clio!
// @author       Kendall Vance
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

const re = /.*location.*/i;
var mystr = "";
for (const e of sel) {
         mystr =e.innerHTML;
          console.log(mystr);

        //this was the hard part
       console.log(re.test(mystr));

}
const pattern = /e/;
pattern.test("The best things in life are free!");

(function() {
    'use strict';

    // Your code here...
})();