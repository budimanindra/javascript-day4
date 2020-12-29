function polindromChecker(str) {  
    for (var i = 0; i<str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
            return false
        }
    }return true
}

if (polindromChecker("malam")) {
    console.log("Palindrom")
} else {
    console.log("Not Palindrom")
}