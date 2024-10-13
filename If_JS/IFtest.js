// if testments = if a condition is true, execute ssome code, if not do something else


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    

    age = myText.value;
    age = Number(age);


    if(age >= 100){
        resultElement.textContent = `Eres muy viejo`;
    }
    else if(age == 0){
        resultElement.textContent = `No has nacido`;
    }
    else if(age >= 18){
        resultElement.textContent = `Puedes entrar`;
    }
    else if(age < 0){
        resultElement.textContent = `Tu edad no puede ser menor que 0`;
    }
    else{
        resultElement.textContent = `debes ser +18 para entrar`
    }
    
}