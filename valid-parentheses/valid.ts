function isValid(s: string): boolean {
  const pairs = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      stack.push(char);
    } else {
      const prevChar = stack.pop();
      if (pairs[prevChar] != char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function test1() {
  let s = "()[]{}";
  console.log(isValid(s));
}

test1();
