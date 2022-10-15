const setQuoteList = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => kanyeQuote(data))
}

const kanyeQuote = data =>{
    const quoteContent = document.getElementById('quote');
    console.log(data);
    quoteContent.innerHTML = data.quote;
}