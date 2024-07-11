const palindromes = function (phrase) {
    const alphanum = "1234567890qwertyuiopasdfghjklzxcvbnm"
    const letters = phrase
                    .toLowerCase()
                    .split('')
                    .filter((letter) => alphanum.includes(letter));
    const phraseFW = letters.join('');
    const phraseRV = letters.reverse().join('');
    return phraseFW === phraseRV;
};

// Do not edit below this line
module.exports = palindromes;
