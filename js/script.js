//array vuoto esterno
let arraynumbers = [];
console.log(arraynumbers);
let n = 1;

while(arraynumbers.length < 100){
    arraynumbers.push(n); 
    
    n++;
}

const wrapper = document.querySelector(".row-wrap");
const clickButton = document.getElementById("btn");
let message = document.querySelector(".message");
//event play
clickButton.addEventListener("click", function(){
    //pulisco il wrapper
    wrapper.innerHTML="";

    //Genero un array random di massimo 16 numeri con le bombe
    let arrayBombsRandom = [];
    while(arrayBombsRandom.length < 16){
        let bombsNumber = getRndInteger(1,100);
        if(!arrayBombsRandom.includes(bombsNumber)){
            arrayBombsRandom.push(bombsNumber);
        }
    }
    console.log(arrayBombsRandom);


    const boxList = document.getElementsByClassName("box");
    console.log(boxList);
    let click = 1;

    for (let i = 0; i < arraynumbers.length;i++){
        
        //creo il box
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML= arraynumbers[i];

     /*    //aggiungo event al click sul box
        box.addEventListener("click", function(){
            this.classList.add("box-color")
        }) */

        //append finale
        wrapper.append(box);

    //Evento click su array di bombe

    let clicked = 1;
    box.addEventListener("click", function(){
        if(arrayBombsRandom.includes(parseInt(this.innerHTML))){
            console.log(this.textContent);
            
            for (let b = 0; b < arrayBombsRandom.length; b++){
                boxList[arrayBombsRandom[b]-1].classList.add("b-red");
            }
        //messaggio su schermo...
        message.innerHTML = `Hai perso dopo ${click} tentativi`;
        console.log(message);
        } else {
            this.classList.add("box-color");
            console.log(this.textContent);
            click += clicked;
        }
    })




    }
    console.log(click);
})


/* Functions */

//numeri random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}










