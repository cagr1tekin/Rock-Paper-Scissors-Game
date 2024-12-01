const pcDisplay = document.querySelector(".pc-option-container");
const scoreDisplay = document.querySelector(".scoreBoard-container");
const meDisplay = document.querySelector(".me-option-container");
const optionsButton = document.querySelector(".container3");
const possibleOptions = document.querySelectorAll(".container3-inner");
const container2 = document.querySelector(".container2");

let meOption
let pcOption
let score
let meScoreCounter = 0
let pcScoreCounter = 0

refleshGame()

possibleOptions.forEach(possibleOption => possibleOption.addEventListener('click',(e)=>{
    meOption = e.target.id;
    meDisplay.innerHTML ="";
    const img = document.createElement("img");

    if(meOption==="tas"){
        
        img.src="img\\tas.png";
        meDisplay.appendChild(img);
    }
    if(meOption==="kagit"){
        img.src="img\\kagit.png";
        meDisplay.appendChild(img);
    }
    if(meOption==="makas"){
        img.src="img\\makas.png";
        meDisplay.appendChild(img);
    }
    
    generatePcOption();
    getScore();
    getScoreDisplay();
}))

function generatePcOption(){
    const randomNumber = Math.floor(Math.random() * possibleOptions.length+1)
    const img = document.createElement("img");
    pcDisplay.innerHTML="";
    if(randomNumber===1){
        pcOption = "tas"
        img.src="img\\tas.png";
        pcDisplay.appendChild(img);
    }
    if(randomNumber===2){
        pcOption = "kagit"
        img.src="img\\kagit.png";
        pcDisplay.appendChild(img);
    }
    if(randomNumber===3){
        pcOption = "makas"
        img.src="img\\makas.png";
        pcDisplay.appendChild(img);
    }
    
}

function getScore(){
    if(pcOption===meOption){
        score = "Berabere"
    }
    if(pcOption==='tas' && meOption==='kagit'){
        score = "Kazandınız"
        meScoreCounter++
    }
    if(pcOption==='tas' && meOption==='makas'){
        score = "Kaybettiniz"
        pcScoreCounter++
    }
    if(pcOption==='kagit' && meOption==='tas'){
        score = "Kaybettiniz"
        pcScoreCounter++
    }
    if(pcOption==='kagit' && meOption==='makas'){
        score = "Kazandınız"
        meScoreCounter++
    }
    if(pcOption==='makas' && meOption==='tas'){
        score = "Kazandınız"
        meScoreCounter++
    }
    if(pcOption==='makas' && meOption==='kagit'){
        score = "Kaybettiniz"
        pcScoreCounter++
    }

    
}
function getScoreDisplay(){
    scoreDisplay.innerHTML = (pcScoreCounter+" - "+meScoreCounter);
    refleshGame();
}

function refleshGame(){
    
    if(pcScoreCounter===3){
        
        scoreDisplay.remove();
        optionsButton.innerHTML ="";
        container2.innerHTML="";
        lose();
        pcScoreCounter=0;
        meScoreCounter=0;
        againButtonClick();

        
    }
    else if(meScoreCounter===3){

        scoreDisplay.remove();
        optionsButton.innerHTML ="";
        container2.innerHTML="";
        win();
        pcScoreCounter=0;
        meScoreCounter=0;
        againButtonClick();
    }
}

function win(){
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const br = document.createElement("br");
    const div = document.createElement("div");
    const button = document.createElement("button");

    span1.textContent = "KAZANDINIZ";
    
    span2.textContent = pcScoreCounter+" - "+meScoreCounter;
    div.className = "winORlose";
    button.className="againBtn";
    button.textContent="Tebrikler, bir oyun daha?"

    div.appendChild(span1);
    div.appendChild(br);
    div.appendChild(span2);

    
    container2.appendChild(div)
    optionsButton.appendChild(button)
}

function lose(){
    const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const br = document.createElement("br");
        const div = document.createElement("div");
        const button = document.createElement("button");

        span1.textContent = "KAYBETTİNİZ";
        span1.style.color="rgb(123, 98, 98)";
        span2.textContent = pcScoreCounter+" - "+meScoreCounter;
        span2.style.color="rgb(123, 98, 98)";
        div.className = "winORlose";
        button.className="againBtn";
        button.style.backgroundColor="rgb(123, 98, 98)"
        button.textContent="Üzgünüz, bir oyun daha?"

        div.appendChild(span1);
        div.appendChild(br);
        div.appendChild(span2);

        
        container2.appendChild(div)
        optionsButton.appendChild(button)
}

function againButtonClick(){
    optionsButton.addEventListener('click',againButton)
}
function againButton(e){
    
    if(e.target.className==="againBtn"){
        location.reload()
    //     container2.innerHTML="";
    //     optionsButton.innerHTML="";
    //     const pcdiv = document.createElement("div");
    //     const vsdiv = document.createElement("div");
    //     const mediv = document.createElement("div");
    //     const button1 = document.createElement("button");
    //     const button2 = document.createElement("button");
    //     const button3 = document.createElement("button");

    //     pcdiv.className="pc-option-container"
    //     vsdiv.className="vs-container";
    //     mediv.className="me-option-container"

    //     button1.className="container3-inner";
    //     button1.id="tas";
    //     button1.textContent="TAŞ"

    //     button2.className="container3-inner";
    //     button2.id="kagit";
    //     button2.textContent="KAĞIT"

    //     button3.className="container3-inner";
    //     button3.id="makas";
    //     button3.textContent="MAKAS"

    //     container2.appendChild(pcdiv);
    //     container2.appendChild(vsdiv);
    //     container2.appendChild(mediv);

    //     optionsButton.appendChild(button1);
    //     optionsButton.appendChild(button2);
    //     optionsButton.appendChild(button3);


    //     const newPossibleOptions = document.querySelectorAll(".container3-inner");
    //     newPossibleOptions.forEach(option => {
    //     option.addEventListener('click', (e) => {
    //         meOption = e.target.id;
    //         meDisplay.innerHTML = "";

    //         const img = document.createElement("img");
    //         if (meOption === "tas") img.src = "img\\tas.png";
    //         if (meOption === "kagit") img.src = "img\\kagit.png";
    //         if (meOption === "makas") img.src = "img\\makas.png";

    //         meDisplay.appendChild(img);

    //         generatePcOption();
    //         getScore();
    //         getScoreDisplay();
    //     })
    // })
    }
    
}