document.addEventListener("DOMContentLoaded", () => {
    const choices = ["pierre", "feuille", "ciseau"];
    let rounds = 0, playerWins = 0, cpuWins = 0;
  
    const gameContainer = document.getElementById("game");
  
    // Titre
    const title = document.createElement("h1");
    title.textContent = "Jeu de Shifumi (Pierre-Feuille-Ciseaux)";
    gameContainer.appendChild(title);
  
    // Zone de boutons
    const buttonContainer = document.createElement("div");
    choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.charAt(0).toUpperCase() + choice.slice(1);
      btn.addEventListener("click", () => playRound(choice));
      buttonContainer.appendChild(btn);
    });
    gameContainer.appendChild(buttonContainer);
  
    // Affichage du résultat
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    gameContainer.appendChild(resultDiv);
  
    // Affichage du score
    const scoreDiv = document.createElement("div");
    scoreDiv.id = "score";
    updateScore();
    gameContainer.appendChild(scoreDiv);

    // Bouton de remise à zéro
    const resetButton = document.createElement("button");
    resetButton.textContent = "Remettre à zéro";
    resetButton.style.backgroundColor = "#f88";
    resetButton.addEventListener("click", () => {
        rounds = 0;
        playerWins = 0;
        cpuWins = 0;
        resultDiv.innerHTML = "";
    updateScore();
});
gameContainer.appendChild(resetButton);

  
    function playRound(playerChoice) {
      const cpuChoice = choices[Math.floor(Math.random() * 3)];
      let result = "";
  
      if (playerChoice === cpuChoice) {
        result = "Égalité !";
      } else if (
        (playerChoice === "pierre" && cpuChoice === "ciseau") ||
        (playerChoice === "feuille" && cpuChoice === "pierre") ||
        (playerChoice === "ciseau" && cpuChoice === "feuille")
      ) {
        result = "Vous gagnez cette manche !";
        playerWins++;
      } else {
        result = "L'ordinateur gagne cette manche.";
        cpuWins++;
      }
  
      rounds++;
      resultDiv.innerHTML = `
        <p>Vous avez choisi : <strong>${playerChoice}</strong></p>
        <p>L'ordinateur a choisi : <strong>${cpuChoice}</strong></p>
        <p><strong>${result}</strong></p>
      `;
      updateScore();
    }
  
    function updateScore() {
      scoreDiv.innerHTML = `
        <p>Manches jouées : ${rounds}</p>
        <p>Victoires joueur : ${playerWins}</p>
        <p>Victoires ordinateur : ${cpuWins}</p>
      `;
    }
  });
  