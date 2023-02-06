let number1;
let number2;
let operator;
let total=0;
const operators=['+','-','x','/'];

let display=document.getElementById("display");
const number=document.querySelectorAll("[id=number]");

number.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(e.target.innerText=="." && !display.innerText){
            display.innerText="0.";
        } else if(e.target.innerText=="." && display.innerText){
                display.innerText=display.innerText+".";
        } else{
        let a = e.target.innerText; 
       
            if(!operator){
                display.innerText += a;
                number1=display.innerText;   
            } else {
                    if(operators.includes(display.innerText)){
                        clearDisplay();
                    }
                display.innerText += a;
                number2=display.innerText;
                }
        }
            
         
    })
});        
function calculationDisplay(){
    let inputs=[];
    document.getElementById("calculation").style.display="block";
    
    inputs.push(number1);
    inputs.push(operator);
    inputs.push(number2);
    inputs.push("=");
    inputs.push(total);
    console.log(inputs);
    document.getElementById("calculation").innerText=inputs.join('');
}
function reset(){
    display.innerText="";
    number1=0;
    number2=0;
    operator=null;
    total=0;
    inputs=[];
    document.getElementById("calculation").style.display="none";
}
function clearDisplay(){
    display.innerText="";
}
    
function calculation(operatorGiven){
    operator=operatorGiven;
    display.innerText=operator;
    
}

function result(){

        switch(operator){
            case '+' :
                total=parseFloat(number1)+parseFloat(number2);
                break;

            case '-':
                total=parseFloat(number1)-parseFloat(number2);
                break;

            case 'x':
                total=parseFloat(number1)*parseFloat(number2);
                break;

            case '/':
                total=parseFloat(number1)/parseFloat(number2);
                break;

           }

         
           display.innerText=total;
           calculationDisplay();
           number1=total;
           
    }
    

function del(){
    let value=display.innerText;
    display.innerText=value.slice(0, -1);
    console.log(value.slice(0, -1))
    number1=display.innerText;
    
}
 

        



