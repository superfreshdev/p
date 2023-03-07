/* --------------------------------------------- */
/* 
    > crate-card-items-with-data.js

    | read our json Files which we had defined
    | for our cards 

/* --------------------------------------------- */

/* ---------------------------------------------------------- */
/* Functions 
/* ---------------------------------------------------------- */

/* Check Exist for HTML Element */
function existObjDocument ( objDocumentString ) {

    /* --------------------------------------------- */
    /* [to do] - parameter is not a valid css selector
    /* e.g only # , output of document.querySelectorAll 
    /* --------------------------------------------- */

    // check if exist 
    if( document.querySelectorAll(objDocumentString).length > 0 ) {
        return true;
    } else {
        console.log("[HTMLelements] - Not Found");
        return false;
    }

  
  


}
/* Check CSS Selector Direction Exist */
function existDeleteDirectionObjDocument ( objDocumentStringDeleteFrom , objDocumentDeleteElementStrings ) {

    // " " search rekusriv in css  
    if( document.querySelectorAll( objDocumentStringDeleteFrom + " " + objDocumentDeleteElementStrings).length > 0 ) {
        return true;    
    } else {
        console.log("[CSS Delete Direction] - Not Found !!! ");
        return false;    
    }
}

/* delete by css selector
 ( e.g deleteFromHtmlDocumentPointHtmlElements( "#main" , ".cards" );
    >> delete all .cards from #main ) */
function deleteFromHtmlDocumentPointHtmlElements ( objDocumentStringDeleteFrom , objDocumentDeleteElementStrings ) {

    // Pruefe ob Uebergabe überhaupt existiert 
    if( existObjDocument(objDocumentStringDeleteFrom) == true &&
        existObjDocument( objDocumentDeleteElementStrings ) == true ) 
    {
        
        // Pruefe ob CSS Selektor richtig zum loeschen verwendet wurde
        if( existDeleteDirectionObjDocument ( objDocumentStringDeleteFrom , objDocumentDeleteElementStrings ) ) {

            console.log("Beides gefunden - entfernen kann begonnen werden ");

            // Beginne vom Loeschpunkt die HTML Elemente zu entfernen
            document.querySelectorAll(objDocumentStringDeleteFrom + " " + objDocumentDeleteElementStrings).forEach( objDocumentDelete => {
                
                objDocumentDelete.style.display = "none";

            })
          
        }
     
    } 

}


/* ------------------------------------------------------------------------------------------------------------------------- */
/* Delete JS Infos if js is activated 
/* ------------------------------------------------------------------------------------------------------------------------- */
deleteFromHtmlDocumentPointHtmlElements( "#my-main-container" , ".js-trigger-no-js-info-container" );
// deleteFromHtmlDocumentPointHtmlElements( ".peter" , "div" );


/* ------------------------------------------------------------------------------------------------------------------------- */
/* Show Main Nav Filter Container if js is activated 
/* ------------------------------------------------------------------------------------------------------------------------- */
var mainNavFilterContainer = document.querySelector("#main-nav-topic-filter-layout"); 
mainNavFilterContainer.style.display = "grid";











console.log("### Create Card Items With Data  ###");









// run from body and look for all nojs classes to display none */

// const noJsInfoContainer = document.getElementById("json-no-js-create-card-items-info-container");
// console.log(noJsInfoContainer);
// if js is activated in the web-browser unshown no js info box 
// noJsInfoContainer.style.display = "none";



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