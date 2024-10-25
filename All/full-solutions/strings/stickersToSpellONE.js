function minStickersToSpellWord(sticker, target) {
    // Function to create a frequency map for a given string
    const createFreqMap = (str) => {
        const freqMap = new Map();
        for (const char of str) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
        return freqMap;
    };

    // Frequency map for the sticker
    const stickerFreq = createFreqMap(sticker);

    // Frequency map for the target word
    const targetFreq = createFreqMap(target);

    let stickersUsed = 0;

    // While there are still characters in the target word to cover
    while (true) {
        let hasProgress = false;
        for (const [char, count] of targetFreq) {
            if (count > 0 && stickerFreq.get(char)) {
                const maxCover = Math.min(count, stickerFreq.get(char));
                targetFreq.set(char, count - maxCover);
                hasProgress = true;
            }
        }

        // If no progress is made, it's impossible to spell the word
        if (!hasProgress) {
            return -1;
        }

        // Increment the sticker usage
        stickersUsed++;

        // Check if all characters in the target word are covered
        let allCovered = true;
        for (const count of targetFreq.values()) {
            if (count > 0) {
                allCovered = false;
                break;
            }
        }

        if (allCovered) {
            return stickersUsed;
        }
    }
}

// Example usage:
const sticker = "abc";
const target = "aabbcc";
console.log(minStickersToSpellWord(sticker, target));  // Output: 2
