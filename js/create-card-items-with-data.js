/* --------------------------------------------- */
/* 
    > crate-card-items-with-data.js

    | read our json Files which we had defined
    | for our cards 

/* --------------------------------------------- */

/* ---------------------------------------------------------- */
/* Functions 
/* ---------------------------------------------------------- */

console.log("### Create Card Items With Data  ###");

const noJsInfoContainer = document.getElementById("json-no-js-create-card-items-info-container");
console.log(noJsInfoContainer);
// if js is activated in the web-browser unshown no js info box 
noJsInfoContainer.style.display = "none";



// fetch("../data/cards/docs/docs-cards-web-dev-web-frameworks.json")
//     .then((response) => {
//         return response.json();
//     })
//     .then((cards) => {
        
//         // Container which we want append our all cards 
//         const appendCardsInThisContainer = document.getElementById("docs-card-items-layout-container");
//         // get all creating card numbers 


//         // Clone Template Card Layout to get all styling Elements to fill or handle with it 
//         // with .content.cloneNode(true) we get all inside styling elements too
//         const tmplCardItem = document.getElementById("template-card-item").content.cloneNode(true);


//     });