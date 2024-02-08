let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length); //To get a random index
    
    quote.innerHTML = quotes[random]; //Finding the quote based on the randomly generated index
;
});



const quotes = [
    "You only live once, but if you do it right, once is enough.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Never let the fear of striking out keep you from playing the game.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "In order to write about life first you must live it.",
    "Life is not a problem to be solved, but a reality to be experienced.",
    "The unexamined life is not worth living.",
    "Turn your wounds into wisdom.",
    "The purpose of our lives is to be happy.",
    "Live for each second without hesitation.",
 ]
