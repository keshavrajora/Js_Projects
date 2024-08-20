const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error('Word not found');
        }
        const data = await response.json();
        const definitions = data[0]?.meanings[0]?.definitions[0] || {};
        const antonyms = definitions.antonyms || [];

        resultDiv.innerHTML = `
            <h2><strong>Word:</strong> ${data[0].word}</h2>
            <p><strong>Part of Speech:</strong> ${data[0].meanings[0]?.partOfSpeech || 'Not Found'}</p>
            <p><strong>Meaning:</strong> ${definitions.definition || 'Not Found'}</p>
            <p><strong>Example:</strong> ${definitions.example || 'Not Found'}</p>
            <p><strong>Antonyms:</strong></p>
        `;

        if (antonyms.length === 0) {
            resultDiv.innerHTML += `<span>Not Found</span>`;
        } else {
            resultDiv.innerHTML += '<ul>';
            for (let i = 0; i < antonyms.length; i++) {
                resultDiv.innerHTML += `<li>${antonyms[i]}</li>`;
            }
            resultDiv.innerHTML += '</ul>';
        }

        // Adding Read More Button
        if (data[0].sourceUrls && data[0].sourceUrls.length > 0) {
            resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls[0]}" target="_blank">Read More</a></div>`;
        }

    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }

    // console.log(data);
};
