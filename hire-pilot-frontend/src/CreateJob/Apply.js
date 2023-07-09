import React from "react";
import './Apply.css';
import formSlideUtil from "../utils/formslideutils";


function Apply({closeModal}) {
    return(

        
        <div className="containerapply">
         
            <form id="Form1">
                <h3>Appply</h3>
                <input className="newst" type="text" placeholder="Resume"/>
                <input className="newst" type="text" placeholder="Resume"/>
                <input  className="newst" type="text" placeholder="Resume"/>
                <div className="btn-box">
                <button type="button" id="Next1">Next</button>
            </div>
            </form>

            <form id="Form2">
                <h3>Second</h3>
                <input className="newst" type="text" placeholder="dfd"/>
                <input className="newst" type="text" placeholder="second"/>
                <input  className="newst" type="text" placeholder="Readsume"/>
                <div className="btn-box">
                
                <button type="button" id="Back1">Previous</button>
                <button type="button" id="Next2">Next</button>
            </div>
            </form>

            <form id="Form3">
                <h3>Third</h3>
                <input className="newst" type="text" placeholder="ume"/>
                <input className="newst" type="text" placeholder="Rcl"/>
                <input  className="newst" type="text" placeholder="Submit final"/>
                <div className="btn-box">
                
                <button type="button" id="Back2">Previous</button>
                <button type="button">Submit</button>
            </div>
            </form>

            <div className="step-row">
                <div id="progress"></div>
                <div className="step-col"><small>Step 1</small></div>
                <div className="step-col"><small>Step 2</small></div>
                <div className="step-col"><small>Step 3</small></div>

            </div>

{/*             
            <script>
                var Form1 = document.getElementById("Form1");
                var Form2 = document.getElementById("Form2");
                var Form3 = document.getElementById("Form3");

                var Next1 = document.getElementById("Next1");
                var Next2 = document.getElementById("Next2");
                var Back1 = document.getElementById("Back1");
                var Back2 = document.getElementById("Back2");

                Next1.onclick = function() {
                    
                    Form1.style.left = "-450px";
                    Form1.style.left = "-450px"

                }

            </script> */}

            {formSlideUtil}
        </div>
    )
}

export default Apply;