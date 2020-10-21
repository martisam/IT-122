var quotes = [
    "If you can dream it, you can do it.",
    "It's kind of fun to do the impossible.", 
    "Light in Nature creates the movement of colors.",
    "The vote is the most powerful nonviolent tool we have.", 
    "Autumn is a second spring when every leaf is a flower."];

var rand = Math.floor(Math.random() * quotes.lenght);

function printQuotes(q) {
    console.log(q);
}

printQuotes(quotes[rand]);
