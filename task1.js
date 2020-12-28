function polindromChecker(str) {  
    var word = str.length;
    for (var i = 0; i<word / 2; i++) {
        if (str.charAt(i) !== str.charAt(word - 1 - i)) {
            return false;
        }
    }return true;
}

if (polindromChecker("abba")) {
    console.log("Palindrom")
} else {
    console.log("Bukan Palindrom")
}