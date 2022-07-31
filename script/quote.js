const quotes = [
    {
    quote: "“That the sea is one of the most beautiful and magnificent sights in Nature, all admit.”",
    author: "-John Joly-"
    },
    {
    quote: "“The sea is a desert of waves, A wilderness of water.”",
    author: "-Langston Hughes-"
    },
    {
    quote: "“Limitless and immortal, the waters are the beginning and end of all things on earth.”",
    author: "-Heinrich Zimmer-"
    },
    {
    quote: "“I must be a mermaid. I have no fear of depths and a great fear of shallow living.”",
    author: "-Anais Nin-"
    },
    {
    quote: "“We got no troubles, life is the bubbles, under the sea.”",
    author: "-The Little Mermaid, “Under the Sea-"
    }
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;