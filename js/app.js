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
