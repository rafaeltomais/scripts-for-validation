function run(userInput) {
  try {
    const userInputCleaned = userInput.replace(/[-., ]/g, "");
    
    const regexForZipcode = new RegExp(/(\d){8}/, "gi");

    const emailFound = userInputCleaned.match(regexForZipcode);
    
    return emailFound != null ? emailFound[0] : false;
  } catch (error) {
    return "error";
  }
}

console.log(run("123456789012313232132"));
