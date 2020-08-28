const doBracketsBalance = (str) => {
  const bracketSet = new Set(["(", ")", "[", "]", "{", "}", "|"]);

  const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
    "|": "|",
  };

  const stack = [];

  // if pipecount is odd, then an opening '|' is on the stack
  let pipeCount = 0;

  for (let bracket of str) {
    // Check if char is an opening bracket
    if (bracketSet.has(bracket)) {
      // if an opening bracket
      if (bracketMap[bracket]) {
        if (bracket === "|") {
          // create variable to determine if pipecount is odd or even
          pipeCount++;
          let pipeMod = pipeCount % 2;
          // if pipecount is odd, it is an opening "|" so push it onto the stack
          if (pipeMod > 0) {
            stack.push(bracket);
          } else {
            stack.pop();
            pipeCount = 0;
          }
        } else {
          // an opening [, {, or (
          stack.push(bracket);
        }
      } else {
        // bracket is a closing bracket

        // if there is no opening bracket on the stack to match
        if (stack.length === 0) return false;

        // pop matching opening bracket off the stack
        const poppedBracket = stack.pop();

        // Check to see if the popped opening bracket is not a closing bracket
        if (bracketMap[poppedBracket] !== bracket) {
          return false;
        }
      }
    }
  }
  // when done, stack should be empty
  return stack.length === 0; // if true statement, returns true
};

doBracketsBalance("{{||[]||}}");
