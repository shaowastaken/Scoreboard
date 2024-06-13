scoreH = document.getElementById("home")
scoreG = document.getElementById("guest")
prev = "";
prevN=0;


function addH(num) {
    prev = "H";
    prevN=scoreH.innerText;
    scoreH.innerText= parseInt(scoreH.innerText)+num;
}

function addG(num) {
    prev = "G";
    prevN= parseInt(scoreG.innerText);
    scoreG.innerText= parseInt(scoreG.innerText)+num;
}

function revert(){
    if(prev=="H"){
        scoreH.innerText= prevN;
    }else{
        if(prev=="G"){
            scoreG.innerText= prevN;
        }  
    }
}
