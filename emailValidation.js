function run(userInput) {
    try {
      const regexForEmail = new RegExp(/([a-z0-9._-]){3,}@([\w-]+\.)+[\w-]{2,4}/, "gi");
      
      const emailFound = userInput.match(regexForEmail);
      
      const filteredEmail = emailFound[0];
  
      return emailFound ? filteredEmail : false;
    } catch (error) {
      return "error";
    }
  }

  console.log(run("meu email é 1231321 rafael.2008_sk8@vendas.selases.com"))