function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings:
      `Volverán las oscuras golondrinas en tu balcón sus nidos a colgar, 
      y otra vez con el ala a sus cristales jugando llamarán; 
      pero aquellas que el vuelo refrenaban tu hermosura y mi dicha a contemplar, 
      aquellas que aprendieron nuestros nombres... ¡esas... no volverán!`,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.getElementById("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
