const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

document.getElementById("result").innerHTML = cards;

function shuffle(){
    for(let i = cards.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
        
        // [array[i], array[random]] = [array[random], array[i]];
    }

    document.getElementById("result").innerHTML = cards;
}





