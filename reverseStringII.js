function reverseString(s) {
    try {
        let revString = s.split('').reverse().join('');
        console.log(revString);
    } catch (error) {
        console.error(error);
        console.log(s);
    }
}

reverseString(1234);