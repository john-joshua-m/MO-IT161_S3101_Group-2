/* This is our code file for the Quote of the day functionality. 

For context, the functionality we have involves vanilla JS and Zen quotes API so it's more organized to have the codes 
separate from the once we have for Vue.js to implement modularity 

*/

const QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const quoteContainer = document.querySelector('.quote-container');

/**
 * Fetches a random quote from the Quotable.io API.
 * The API returns a single quote object with 'content' and 'author' fields.
 */
async function fetchQuote() {
    // Show a loading state
    if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = 'Loading inspiration...';
        quoteAuthorElement.textContent = '';
    }

    try {
        const response = await fetch(QUOTE_API_URL);
                
        // Ensure the response is OK (status 200)
        if (!response.ok) {
            throw new Error(`API returned status: ${response.status}`);
        }

        const data = await response.json();
        // CORRECTED: Quotable API returns a single object directly, not an array.
        const quote = data; 

        // CORRECTED: Quotable API uses 'content' and 'author' fields.
        if (quote && quote.content && quote.author) { 
            // This updates UI with the fetched quote
            quoteTextElement.textContent = `“${quote.content}”`;    
            quoteAuthorElement.textContent = `― ${quote.author}`;
            
            
            quoteContainer.classList.add('animate__fadeIn'); //This uses Animate.css, adds basic animation for style
            setTimeout(() => {
                quoteContainer.classList.remove('animate__fadeIn');
            }, 500);
        } else {
            throw new Error("Invalid quote format received from API.");
        }

    } catch (error) {
        console.error('Failed to fetch quote:', error);
        // Fallback message on error
        quoteTextElement.textContent = '“The best way to get started is to stop talking and begin doing.”';
        quoteAuthorElement.textContent = '― Walt Disney';
    }
}

//This is the fetcher, fetches the quote after the script loads
fetchQuote();
