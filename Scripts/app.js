/* app.js by Mike Roe (200166222) on  */
/* Using JavaScript to write the text on the main page */

/* Properly using JavaScript to display text on my index.html */

"use strict";

// IIFE - Immediately Involked Function Expression

(function () {


    console.log("App Started...");
    console.info("Page Title: " + document.title);
    switch (document.title) {
        case "About Me":

            let Introduction = document.getElementById("Introduction");
            let myContent = 'My name is Mike Roe. I am a first year student just trying to get my name out there.';
            Introduction.textContent = myContent;

            let Description = document.getElementById("Description");
            let PhotoInfo = 'My Graduating class from this past April. I am in the very back, second from the left with the long hair.';
            Description.innerHTML = PhotoInfo;

            break;

        case "Projects":




            break;

        case "Contact":

            let Name = document.getElementById("Name");
            document.getElementById("Name").value;
            let Email = document.getElementById("Email");
            document.getElementById("Email").value;
            let Message = document.getElementById("Message");
            document.getElementById("Message").value;
            let ButtonSubmit = document.getElementById("ButtonSubmit");

            ButtonSubmit.addEventListener("click", function (event) {
                event.preventDefault();

                console.log(Name.value);
                console.log(Email.value);
                console.log(Message.value);
    

            });

            break;
    }

    /*let myVariable = 500; (was just playing around with printing to the console) */





})();

