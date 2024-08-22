//Check link
console.log('JS OK')

// funzione per invertire l'ordine delle lettere di un text/word

function reverseText (text){
    //creo una stringa da riempire
    let reverseText = ''; 
    
    //creo un ciclo con un contatore che mi parte dalla ultima lettere ed inizia il decremento
    for (let i = text.length - 1; i >= 0; i--){
        reverseText += text[i];
    }

    //dalla funzione mi uscirà la stringa completata
    return reverseText;
}

console.log(reverseText(''))

// 1.recupero l'elemento dal Dom

//2.raccolta dati
    
// 3.lavorazione dati
    

// 4.generazione output
