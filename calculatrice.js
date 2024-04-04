
const result = document.querySelector(".result");
const chiffres = document.querySelectorAll(".chiffre") ;
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");
let resultat = document.querySelector(".resultat");
let currentLastValue = "";
let currentLastOperator= "+";
let storage = 0;
let lastOneWasNumber = true;
const signeTable = {
    '+': function(a, b) { return  a + b  },
    '-': function(a, b) { return  a - b  },
    'x': function(a, b) { return  a * b  },
    '%': function(a, b) { return  a / b  },
}; 

operator.forEach(item=> item.addEventListener("click",(event)=>{
    if(lastOneWasNumber == true){
    currentLastValue= parseFloat(currentLastValue); 
    storage = signeTable[currentLastOperator](storage, currentLastValue);
    currentLastValue = "";
    }
    currentLastOperator = event.currentTarget.innerHTML;
    lastOneWasNumber = false;
}));
equal.addEventListener("click",()=>{
    currentLastValue= parseFloat(currentLastValue); 
    resultat.innerText = signeTable[currentLastOperator](storage, currentLastValue);
})
reset.addEventListener("click",()=>{
    result.innerHTML=""; 
    resultat.innerHTML=""; 
    currentLastValue= "";
    currentLastOperator = "+"; 
    storage = 0;
    lastOneWasNumber = true;
})
chiffres.forEach(item=> item.addEventListener("click",(event)=>{
    const currentChiffre = event.currentTarget.innerHTML;
    currentLastValue += currentChiffre;
    result.innerHTML = currentLastValue;
    lastOneWasNumber = true;
})); 
