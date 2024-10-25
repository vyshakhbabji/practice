var toGoatLatin = function(sentence) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);  // Account for both lowercase and uppercase vowels
    let words = sentence.split(" ");  // Split sentence into words
    let suffix = "ma";

    for (let i = 0; i < words.length; i++) {
        if (vowels.has(words[i][0])) {
            // If the word starts with a vowel, just add 'ma' and 'a's
            words[i] = words[i] + suffix + "a".repeat(i + 1);
        } else {
            // If the word starts with a consonant, move the first letter to the end and add 'ma' and 'a's
            words[i] = words[i].slice(1) + words[i][0] + suffix + "a".repeat(i + 1);
        }
    }

    return words.join(" ");  // Join the words back into a sentence
};
