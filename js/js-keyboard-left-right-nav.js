

/* Radio Element - Header nav */
var elementHeaderNavRadioDocs = document.getElementById("radio-my-header-nav-docs");
var elementHeaderNavRadioProjects = document.getElementById("radio-my-header-nav-projects");
var elementHeaderNavRadioAbout = document.getElementById("radio-my-header-nav-about");


// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    
    var name = event.key;
   
    
    if( name === "ArrowRight") {

        // 1st
        if( elementHeaderNavRadioDocs.checked ) {

            // unset docs 
            elementHeaderNavRadioDocs.checked = false;
            // set projects
            elementHeaderNavRadioProjects.checked = true;
           

        } else {

            // 2nd
            if( elementHeaderNavRadioProjects.checked ) {

                // unset projects 
                elementHeaderNavRadioProjects.checked = false;
                // set about
                elementHeaderNavRadioAbout.checked = true;

            }

        }

    } 

    if( name === "ArrowLeft" ) {

        // 3nd
        if( elementHeaderNavRadioAbout.checked ) {
            
            // unset about 
            elementHeaderNavRadioAbout.checked = false;
            // set projects
            elementHeaderNavRadioProjects.checked = true;

        } else {

            // 2nd
            if ( elementHeaderNavRadioProjects.checked ) {

                // unset projects 
                elementHeaderNavRadioProjects.checked = false;
                // set docs
                elementHeaderNavRadioDocs.checked = true;

            }


        }

       

    } 

  }, false);