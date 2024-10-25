function goatLatin(S) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return S.split(' ').map((word, i) => {
    let suffix = 'a'.repeat(i + 1);
    if (!vowels.has(word[0].toLowerCase())) {
      word = word.slice(1) + word[0];
    }
    return word + 'ma' + suffix;
  }).join(' ');
}