const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = "";
// Get Quotes From API

// Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

async function getQuotes(){
    loading();
    const apiUrl = 'https://api.quotable.io/random?id=LBG_RasdBg_';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        updateData();


    }
    catch(e){
        alert("ERRORRR!",e);
    }
    complete();

}


document.getElementById('new-quote').onclick = ()=>getQuotes();
document.getElementById('twitter').onclick = ()=>tweetQuote();

function updateData(){
    loading();
    quoteText.textContent = apiQuotes.content;
    authorText.textContent = apiQuotes.author;

    apiQuotes.length>120?quoteText.classList.add('long-quote'):quoteText.classList.remove('long-quote');
    // complete();

}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}



// On Load
// getQuotes()
// loading();
getQuotes();