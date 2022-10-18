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
    



    for (let i = 0; i < arraynumbers.length;i++){
        
        //creo il box
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML= arraynumbers[i];

        //aggiungo event al click sul box
        box.addEventListener("click", function(){
            this.classList.add("box-color")
        })

        //append finale
        wrapper.append(box);
    }
})











