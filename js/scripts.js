// Time
function currentTime () {
    // Váriaveis:
    const timeDisplay = document.querySelector(".clock");
    const hourDisplay = document.querySelector(".hours");
    const minutesDisplay = document.querySelector(".minutes");
    const secondsDisplay = document.querySelector(".seconds");

    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    hourDisplay.textContent = hour;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}
currentTime();
setInterval(currentTime, 1000);


// Day
function currentDate () {
    const monthDisplay = document.querySelector(".month"); 
    const dayDisplay = document.querySelector(".day");
    const yearDisplay = document.querySelector(".year");
    const dataDisplay = document.querySelector(".day-container");
    
    let now = new Date ();
    //now.setDate()
    const formattedDate = now.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    const month = formattedDate.split(' ')[0];
    const day = formattedDate.split(' ')[1];
    const year = formattedDate.split(' ')[2]; 

    monthDisplay.textContent = month;
    dayDisplay.textContent = day;
    yearDisplay.textContent = year;

    return formattedDate;
}


// QUOTES
function updateQuote() {
    const storedData = localStorage.getItem("quoteData");
    const currentDateValue = currentDate();

    let storedDataJson = {};
    if (storedData) {
        storedDataJson = JSON.parse(storedData);
    }

    if (!storedDataJson.date || storedDataJson.date !== currentDateValue) {
        const quotes = [
            {
                quote: "Believe you can and you are halfway there.",
                author: "- Theodore Roosevelt",
            },
            {
                quote: "The best way to predict the future is to create it.",
                author: "- Abraham Lincoln",
            },
            {
                quote: "Happiness is not by chance, but by choice.",
                author: "- Jim Rohn",
            },
            {
                quote: "You are never too old to set another goal or to dream a new dream",
                author: "- C.S. Lewis",
            },
            {
                quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                author: "- Nelson Mandela",
            },
            {
                quote: "The purpose of our lives is to be happy.",
                author: "- Dalai Lama",
            },
        ];

        const index = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[index];

        const quoteText = selectedQuote.quote;
        const quoteAuthor = selectedQuote.author;

        SetNewQuote(selectedQuote, currentDateValue);

        displayQuote(quoteText, quoteAuthor);
    } else {
        ReadQuoteSaved(storedDataJson);
    }
}

function SetNewQuote(quote, date) {
    localStorage.setItem("quoteData", JSON.stringify({
        "date": date,
        "frasedodia": quote,
    }));
}

function ReadQuoteSaved(quoteJson) {
    const quoteText = quoteJson.frasedodia.quote;
    const quoteAuthor = quoteJson.frasedodia.author;

    displayQuote(quoteText, quoteAuthor);
}

function displayQuote(quote, author) {
    const quoteTextElement = document.querySelector(".quote");
    const quoteAuthorElement = document.querySelector(".writer");

    quoteTextElement.textContent = quote;
    quoteAuthorElement.textContent = author;
}

updateQuote();