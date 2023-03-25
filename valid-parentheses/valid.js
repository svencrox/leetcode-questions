function isValid(s) {
    var pairs = {
        "[": "]",
        "{": "}",
        "(": ")",
    };
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        console.log(char);
        if (pairs[char]) {
            stack.push(char);
        }
        else {
            var prevChar = stack.pop();
            if (pairs[prevChar] != char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
function test1() {
    var s = "()[]{}";
    console.log(isValid(s));
}
test1();
