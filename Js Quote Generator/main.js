// var

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes =[{
    quote:"Surround yourself with a bunch of like minded people, and you'll soak up their habits like a starved sponge. Fat people with fat friends care less about their weight.",
    person:"Vir Das"
}, {
    quote:"Surround yourself with a bunch of like-minded people, and you'll soak up their habits like a starved sponge. Fat people with fat friends care less about their weight.",
    person:"Marilyn Monroe"
},{
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person:"Albert Einstein"
},{
    quote:"So many books, so little time.",
    person:"Frank Zappa"
},{
    quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    person:"Dr. Seuss"
},{
    quote:"You only live once, but if you do it right, once is enough.",
    person:"Mae West"
}]; 

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});