function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.getElementById("user-instructions");

  let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
  let context =
    "You are a romantic poem enthusiast and love to writte short poems. Your task is to write a 4 line and separate the 3 first lines with a HTML <br/>. If there is not a dot don't write the first letter of the first word of the line with capital letters. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a Spanish poem about: ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt is ${prompt}`);
  console.log(`Context is ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
