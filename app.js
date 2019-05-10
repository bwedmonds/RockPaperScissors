let playerChoice
// let computerChoice

let options = {
  rock: 0,
  paper: 1,
  scissors: 2
}

let results = ["win", "lose", "draw"]

function setPlayerChoice(choice) {
  playerChoice = choice
  setComputerChoice()
}

function setComputerChoice() {
  let int = Math.floor(Math.random() * (4 - 1)) + 1;
  let computerChoice
  if (int == 1) {
    computerChoice = 'rock';
  } else if (int == 2) {
    computerChoice = 'paper';
  } else if (int == 3) {
    computerChoice = 'scissors'
  }
  play(computerChoice)
}

function play(computerChoice) {
  document.getElementById("results").innerText = results[2 + ((options[playerChoice]) - (options[computerChoice]) % 3)]

  let template = `
  <div class="container-fluid">
		<div class="row">
			<div class="col-4">
				<div class="card" style="width: 18rem;">
					<img class="card-img-top" src="..." alt="Card image cap">
					<div class="card-body">
						<h5 class="card-title">${results}</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
						<button class="btn btn-primary" onclick="resetGame">Play Again!</button>
					</div>
				</div>
      </div>
      </div>
      </div>
       document.getElementById('score').innerHTML = template
      `
}



// button text
//   < button class="btn btn-primary" id = "throw" value = "rock" onclick = "playerChoice" > rock</button >
//     <button class="btn btn-primary" id="throw" value="paper" onclick="playerChoice">paper</button>
//     <button class="btn btn-primary" id="throw" value="scissors" onclick="playerChoice">scissors</button>


// function playerChosen() {
//   let playerChoice = document.getElementById("throw").value;
// }