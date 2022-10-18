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

    let click = 0;
    box.addEventListener("click", function(){
        if(arrayBombsRandom.includes(parseInt(this.innerHTML))){
            console.log(this.textContent);
            
            for (let b = 0; b < arrayBombsRandom.length; b++){
                boxList[arrayBombsRandom[b]-1].classList.add("b-red");
            }
        } else {
            this.classList.add("box-color");
            console.log(this.textContent);
        }
    })




    }
})


/* Functions */

//numeri random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}










