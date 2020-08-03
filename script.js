
//........... HIDE ...........
 let match=document.getElementById("matched");
 match.style.display="none";

 let unMatch=document.getElementById("unmatched");
 unMatch.style.display="none";


//...........Random Numbers...........

const generate=document.getElementById("pin-button").addEventListener('click',function(){
    
    var val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("pin-input").value=val;

    let match=document.getElementById("matched");
match.style.display="none";

let unMatch=document.getElementById("unmatched");
unMatch.style.display="none";
    
});




function getOutput(){
    return document.getElementById("output-value").value;
}

function printOutput(num){
    
    document.getElementById("output-value").value=num;
    
}


//.....NotePad.........

var button=document.getElementsByClassName("button");
for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
       var output=getOutput();
      
       if(output!=NaN){
           if(this.id=="C"){
            printOutput("");
           }
           else if(this.id=="backspace"){
            var output=getOutput().toString();
            
            if(output){
                output=output.substr(0,output.length-1);
              
                printOutput(output);
            }
           }
           else{
         output=output+this.id;
           printOutput(output);
        }
    }
        
    });
}

//....Check Generate Pin.......

const submitButton=document.getElementById("submit-btn").addEventListener('click',function()
{
    var outputValue=document.getElementById("output-value").value;
    var pinInput=document.getElementById("pin-input").value;
   
    if(outputValue==pinInput){
    var match=document.getElementById("matched");
    match.style.display="block";

    document.getElementById("output-value").value="";
    let unMatch=document.getElementById("unmatched");
unMatch.style.display="none";
    

   }
   else if(outputValue!=pinInput){
    var unMatch=document.getElementById("unmatched");
    unMatch.style.display="block";

    document.getElementById("output-value").value="";

    let match=document.getElementById("matched");
match.style.display="none";

   
   }
   else {
       
let match=document.getElementById("matched");
match.style.display="none";

let unMatch=document.getElementById("unmatched");
unMatch.style.display="none";

   }

});