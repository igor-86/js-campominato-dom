//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma.
const wrapper = document.querySelector(".row-wrap");
const buttonStart = document.getElementById("btn");
console.log(buttonStart);
console.log(wrapper);

//evento al click del bottone
buttonStart.addEventListener("click", function(){
wrapper.innerHTML="";
for (let i = 1; i <= 100; i++){
    console.log(i);
    
    //Creo i quadrati
    const boxCreate = document.createElement("div");
    boxCreate.classList.add("box");
    boxCreate.innerHTML = i;

    //Rendo i quadrati cliccabili
    boxCreate.addEventListener("click", function(){
        this.classList.add("box-color");
        console.log(this.textContent);
    })

    
    
    wrapper.append(boxCreate);
}

})










