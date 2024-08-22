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
const formPali = document.querySelector('form');
const wordField = document.getElementById('wordPali');
const targertPali = document.querySelector('.targetPali');

//2.raccolta dati
  
// 3.lavorazione dati

// creo evento
formPali.addEventListener('submit', function(e){
    // blocco il reload
    e.preventDefault();

    // recupero la parola scritta dall'utente
    const userWord = wordField.value.trim();  
    console.log('userWord', userWord);

    // attivo la funz reverseText con la parola raccolta
    reverseText(userWord);
    console.log('reverseWord',reverseText(userWord));

    // recupero e riaassegno l'output generato dalla funz
    reverseWord = reverseText(userWord);

    // comparo l'output della funz con la parola dell'utente e verifico se è palidroma
    let messagePali;
    
    let isPalidroma = (userWord === reverseWord) ? messagePali = `La tua parola: <strong>${userWord}</strong>, <span class="text-success">è palidroma</span>.` : messagePali = `La tua parola: <strong>${userWord}</strong>, <span class="text-danger">non è palidroma</span>.`;
    console.log(messagePali);

    // 4.generazione output
    // stampo message
    targertPali.innerHTML = messagePali;

})


