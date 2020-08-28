function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            continue;
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (!vowels.includes(s[j])) {
            console.log(s[j]);
        } else {
            continue;
        }
    }
}

vowelsAndConsonants('book');