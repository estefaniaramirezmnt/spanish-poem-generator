function displayPoem(response) {
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
    `You are a romantic poem enthusiast and love to writte poems. Your task is to write a 4 line poem, separating the 3 first lines with a HTML <br/>. Don't add a break at the end of the last line. Don't write the first letter of each line in uppercase, but write the first letter of the first word of the poem in uppercase. Add a title inside a <h3> element saying "Your poem". Make sure to follow the user instructions.`;
  let prompt = `User instructions are: Generate a Spanish poem about: ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.getElementById("poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem for you about ${instructionsInput.value}...</div>`

  axios.get(apiUrl)
  .then(displayPoem).
  catch(function (error) {
    poemElement.innerHTML = "An error occurred while generating the poem. Please try again.";
  });
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);