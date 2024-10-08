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
console.log(reverseText(''));

// funzione che genera un numero random da min a max

function getRandomNumber(min = 0, max = 100, isMaxIncluded = true){
    // blocco la funz se l'utente digita un valore NaN
    if (isNaN(min) || isNaN(max)){
        console.error(`questi valori (${min} , ${max}) devono essere dei numeri`); 
        return NaN;
    }
    // blocco la funz se l'utente da un min >= a max
    if (min >= max){ 
        console.error(`il valore max(${max}) deve essere maggiore del valore min(${min})`); 
        return null;
    }

    // se il valore isMaxIncluded è true incremento di uno max (max + 1)
    if (isMaxIncluded) max++;

    // genero il numero casuale 
    result = Math.floor(Math.random() * (max -min)) + min;

    // dalla funzione mi uscirà il numero casuale generato
    return result;
}

console.log(getRandomNumber());

// funzione per pari o dispari

function isEven(number){
    let numb;

    // il numero è paro se è divisibile per due
    (number % 2 === 0) ? numb = 'pari' : numb = 'dispari';

    return numb;
}

console.log(isEven());


// ------------- ESERCIZIO PALIDROMO -------------
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
    
    (userWord === reverseWord) ? messagePali = `La tua parola: <strong>${userWord}</strong>, <span class="text-success">è palidroma</span>.` : messagePali = `La tua parola: <strong>${userWord}</strong>, <span class="text-danger">non è palidroma</span>.`;
    console.log(messagePali);

    // 4.generazione output
    // stampo message
    targertPali.innerHTML = messagePali;

})

// ------------- ESERCIZIO PARI E DISPARI -------------

// 1.recupero l'elemento dal Dom
const button = document.querySelector(('.button'));
const selectField = document.getElementById('evenOdd');
const userNumberField = document.getElementById('userNumber');
const targetEvenOdd = document.querySelector('.targetEvenOdd');

// creo evento
button.addEventListener('click', function(event){
    // blocco il reload
    event.preventDefault();

    //2.raccolta dati
    // creo le value dei fieldIndex
    userSelect = selectField.value;
    userNumber = parseInt(userNumberField.value.trim());
    console.log(userSelect, userNumber)

    //validazione userNumber
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    const errorUserNumber = `<span class="text-danger">HAI INSERITO UN VALORE NON VALIDO!</span>`; 
    
    // se da errore stampa in pagina
    targetEvenOdd.innerHTML = errorUserNumber;

    return;
    }

    // preparo cpuNumb, il numero generato dalla funz getRandomNumber
    cpuNumber = getRandomNumber(1, 5, true);
    console.log('cpuNumber', cpuNumber);

    // 3.lavorazione dati
    // sommo il numero del computer con il numero dell'utente
    somma = cpuNumber + userNumber;
    console.log('somma', somma);

    // verifico con la funz isEven se la somma è pari o dispari
    isEvenSomma = isEven(somma);
    console.log('isEvenSomma', isEvenSomma)

    // preparo message se utante ha vinto o perso
    message = `<span class="text-danger">HAI PERSO! La somma del tuo numero <strong>${userNumber}</strong> con il mio numero <strong>${cpuNumber}</strong> è <strong>${isEvenSomma}</strong>(<strong>${somma}</strong>)<span>`
    // verifico se la scelta dell'utente corrsponde ad isEvenSomma
    if(userSelect === isEvenSomma) message = `<span class="text-success">HAI VINTOOOO! La somma del tuo numero <strong>${userNumber}</strong> con il mio numero <strong>${cpuNumber}</strong> è <strong>${isEvenSomma}</strong>(<strong>${somma}</strong>)<span>`
    
    // 4.generazione output
    // stampo in pagina message
    targetEvenOdd.innerHTML = message;
});
