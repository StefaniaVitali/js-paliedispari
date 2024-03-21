console.log('Js-Paliedispari');


/*Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma. 
Questa funzione deve ricevere come input la parola inserita dall’utente e 
ritornare true se la parola è palindroma e false se la parola non è palindroma
*/

//chiedere all'utente di inserire una parola
const parola = prompt('scrivi una parola');

//creare una funzione per capire se la parola inserita è palindroma

function palindroma(word){
        
    //--mettere la parola con il lowerCase nel caso inizi con maiuscola 
    const lowerCase = word.toLowerCase();
    console.log(word,lowerCase)
    //--dividere la parola in lettere e creare quindi un'array
    const wordSplit = lowerCase.split('');
    console.log(wordSplit);
    //--invertire l'ordine dell'array 
    const wordReverse = wordSplit.reverse();
    console.log(wordReverse);
    //--unire nuovamente le lettere in una parola
    const wordjoined = wordReverse.join('')
    console.log(wordjoined);

    //let palindroma vera
    let wordResult = true 
    
    //SE la parola dell'input è uguale alla sua versione invertita 
    if (wordjoined !== lowerCase){
        wordResult = false  
    }

    return wordResult


  //esito True
 //ALTRIMENTI
 //esito false

} 

//ritornare il risultato
const answer = palindroma(parola);
console.log(answer);

/*Pari e Dispari
L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//L’utente sceglie pari o dispari (tramite prompt) 
const provaDoppia = prompt('Scegli pari o dispari');
console.log(provaDoppia);

//l'utente scegli un numero da 1 a 5
const num = parseInt(prompt('Scegli un numero da 1 a 5')); //number
console.log(num);

//generare un numero random
//funzione numero random
function Random (number){
    const num = number
    const randomNum = Math.floor(Math.random()*(num) + 1)  //number
    console.log(randomNum)
    return randomNum
}

//invocare la funzione per il numero casuale da 1 a 5
const numeroRandom = Random(5);


//Sommiamo i due numeri 
const somma = num + numeroRandom;
console.log(somma)

function pariDispari (string, num1){
    
    const resto2 = somma % 2
    let risultato = true
    
    //SE la stringa è uguale a 'pari' e il numero è pari
    if (string === 'pari' &&  resto2 ===0){
        //dai risultato vero 
        risultato = true
    //ALTRIMENTI SE la stringa è uguale a 'dispari' e il numero è dispari   
    } else if (string === 'dispari' && resto2 ===1){
         //dai risultato vero
        risultato = true
    //ALTRIMENTI dai risultato falso    
    } else(
        risultato = false
    )

    console.log(risultato);
    //ritorna vero/falso
    return risultato;

}

//invociamo la funzione
const gamePariDispari = pariDispari(provaDoppia, somma);
console.log(gamePariDispari)

//dire all'utente se ha vinto o perso

//SE il risultato della funzione corrisponde a vero
if(gamePariDispari === true){
    //Stampa che l'utente ha vinto
    console.log('Bravo, hai vinto')
    alert('Bravo, hai vinto')
//ALTRIMENTI    
} else {
    // //Stampa che l'utente ha vinto
    console.log('Ci dispiace, Hai perso!')
    alert('Ci dispiace, Hai perso!') 
}


