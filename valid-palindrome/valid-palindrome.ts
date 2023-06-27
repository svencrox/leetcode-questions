function isPalindrome(s: string): boolean {
    const palindrome = s
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim()
        .split(" ")
        .join("");

    const reversePalindrome = palindrome.split("").reverse().join("");

    return palindrome === reversePalindrome;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
