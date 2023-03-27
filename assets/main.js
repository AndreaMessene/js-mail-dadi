
/************** MAIL *************/

function entra(){

    const nome = document.querySelector("#nome").value;

    const cognome = document.querySelector("#cognome").value;

    const mail = document.querySelector("#mail").value;

    const password = document.querySelector("#password").value;
    
    
    console.log(nome, cognome, mail, password);

    const nomeUtente = [ "Marco", "Luca", "Giuseppe", "Veronica", "Alice" ];
    
    const cognomeUtente = [ "Storto", "Dritto", "Araldi", "Barcolla", "Sole"]

    const mailUtente = [ "Storto@example.com", "Dritto@example.com", "Araldi@example", "Barcolla@example", "Sole@example.com"];

    const passwordUtente = [ "Marcostorto5", "Lucadritto5", "Giuseppearaldi5", "Veronicabarcolla5", "Alicesole5"];

    console.log(nomeUtente, cognomeUtente, mailUtente, passwordUtente);


    let soldatino = false;
    let posizioneUtente = false;

    for(let i = 0; i < mailUtente.length; i++){

        if(mail == mailUtente[i]){
            soldatino = true;
            posizioneUtente = i;
        }
    }    
    
    if (soldatino == true){
        if(nome == nomeUtente[posizioneUtente] && cognome == cognomeUtente[posizioneUtente] && mail == mailUtente[posizioneUtente] && password == passwordUtente[posizioneUtente]){
            console.log ( `Accesso consentito` );
        }else{
            console.log ( `Dati non corretti` );
        }
        
    }else{
        console.log ( `Accesso non consentito`)
    }
}



/************** DADI *************/




function avvia(){
    let randomNumber =  Math.floor(Math.random() * 7);
    document.getElementById("computer").innerHTML =randomNumber ;
    let numeroScelto = document.getElementById("numero").value;
    if(randomNumber > numeroScelto){
        document.getElementById("vincitore").innerHTML = "vincitore computer";

    }else if(randomNumber == numeroScelto){
        document.getElementById("vincitore").innerHTML = "pareggio";

    }else{
        document.getElementById("vincitore").innerHTML = "vincitore utente";
    }

}
















