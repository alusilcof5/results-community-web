/* Task 1 --------------------------------------------------------------------------------------- */

/* This is a line with exactly 100 characters --------------------------------------------------- */

/**
 * The question about the DOM:
 * El DOM (Document Object Model) és com un mapa o representació dels elements d’una web que ens permet jugar amb ells des del JavaScript.
 */

/**
 * The question about `defer`:
 * L’atribut defer fa que el JS s’executi només quan l’HTML ja està carregat, així tot va més fluït.
 */

/**
 * The question about `getElementBy...` vs `getElementsBy...`:
 * getElementBy agafa un sol element, mentre que getElementsBy en pot agafar més d’un.
 */

/* Task 2 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 2 solution ------------------------------------------------------------------------------ */
const roles = document.querySelectorAll(".nav-role li");
const user = roles[0];
const admin = roles[1];

const options = document.querySelectorAll(".nav-options li");
const adminOptions = document.querySelectorAll(".nav-options li.admin");
const userOptions = Array.from(options).filter(option => !option.classList.contains("admin"));

function selectUser() {
  user.classList.add("role-selected");
  admin.classList.remove("role-selected");

  userOptions.forEach(option => {
    option.style.display = "list-item";
  });

  adminOptions.forEach(option => {
    option.style.display = "none";
  });
}

function selectAdmin() {
  admin.classList.add("role-selected");
  user.classList.remove("role-selected");

  // Mostrar totes les opcions
  options.forEach(option => {
    option.style.display = "list-item";
  });
}

user.addEventListener("click", selectUser);
admin.addEventListener("click", selectAdmin);


selectUser();


/* Task 3 --------------------------------------------------------------------------------------- */

let teams = [
  {
    team: 'South Korea',
    games: {
      wins: 0,
      draws: 1,
      losses: 2,
    },
  },
  {
    team: 'Denmark',
    games: {
      wins: 1,
      draws: 0,
      losses: 2,
    },
  },
  {
    team: 'Finland',
    games: {
      wins: 2,
      draws: 1,
      losses: 0,
    },
  },
  {
    team: 'Italy',
    games: {
      wins: 1,
      draws: 2,
      losses: 0,
    },
  },
]

/* Task 3 solution ------------------------------------------------------------------------------ */
const teamsWithPoints = teams.map((team) => {
  const totalPoints = team.games.wins * 3 + team.games.draws * 1;
  return { team: team.team, totalPoints };
});

teamsWithPoints.sort((a, b) => b.totalPoints - a.totalPoints);

const tableClassification = document.getElementById("classification");
const tbody = tableClassification.querySelector("tbody");

let i = 0;
for (const teamWithPoints of teamsWithPoints) {
  const team = teams.find((el) => el.team === teamWithPoints.team);
  const newRow = document.createElement("tr");

  const teamCell = document.createElement("td");
  teamCell.textContent = team.team;
  newRow.appendChild(teamCell);

  const winCell = document.createElement("td");
  winCell.textContent = team.games.wins;
  newRow.appendChild(winCell);

  const drawsCell = document.createElement("td");
  drawsCell.textContent = team.games.draws;
  newRow.appendChild(drawsCell);

  const lossesCell = document.createElement("td");
  lossesCell.textContent = team.games.losses;
  newRow.appendChild(lossesCell);

  const pointsCell = document.createElement("td");
  pointsCell.textContent = teamWithPoints.totalPoints;
  newRow.appendChild(pointsCell);

  if (i === 0) {
    newRow.classList.add("classification-first");
  }
  tableClassification.appendChild(newRow);
  i++;
}
/* Task 4 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 4 solution ------------------------------------------------------------------------------ 
Pasos: 
Marcar valors negatius amb classe 'unpaid'
Funció per calcular saldo total actual
Eliminar morosos i recalcular saldo
*/
const clients = document.getElementById("customers");
const unpaid = clients.querySelectorAll("tbody tr td:nth-child(3)");
const finalResult = clients.querySelector("tfoot tr td:nth-child(2)");
const removeUnpaidButton = clients.querySelector("tfoot tr td:nth-child(3)");

for (const cell of unpaid) {
  const days = parseInt(cell.textContent);
  if (days < 0) {
    cell.classList.add("unpaid");
  }
}

const calculateBalance = () => {
  const rows = clients.querySelectorAll("tbody tr");
  let total = 0;
  for (const row of rows) {
    const amountCell = row.querySelector("td.amount");
    const amount = parseFloat(amountCell.textContent);
    if (!isNaN(amount)) {
      total += amount;
    }
  }
  finalResult.textContent = total.toFixed(2) + "€";
};

calculateBalance();


function removeUnpaid() {
  const unpaid = clients.querySelectorAll("tbody tr td.unpaid");
  for (const cell of unpaid) {
    const row = cell.closest("tr");
    if (row) row.remove();
  }
  calculateBalance();
}


/* Task 5 --------------------------------------------------------------------------------------- */

let rating = 0

/* Task 5 solution ------------------------------------------------------------------------------ */
const stars = document.querySelectorAll(".star-gray");
for (const [index, star] of stars.entries()) {
  star.addEventListener("click", () => {
    for (const element of stars) {
      element.classList.remove("star-pink");
      element.classList.add("star-gray");
    }
    for (let i = index; i >= 0; i--) {
      stars[i].classList.remove("star-gray");
      stars[i].classList.add("star-pink");
    }
    rating = index + 1;
  });
}

/* Task 6 --------------------------------------------------------------------------------------- */

// This is how many pixels the bar has to move each time.
const delta = 20
// Same initial value as left: 200px in CSS.
let left = 200

/* Task 6 solution ------------------------------------------------------------------------------ */
let rightPressed = false;
let leftPressed = false;
const barContainer = document.querySelector(".bar-container");
const bar = document.querySelector(".bar");
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const containerWidth = barContainer.offsetWidth;
const barWidth = bar.offsetWidth;

function moveBar() {
  if (rightPressed) {
    left += delta;
    if (left + barWidth > containerWidth) {
      left = containerWidth - barWidth;
    }
    bar.style.left = left + "px";
  } else if (leftPressed) {
    left -= delta;
    if (left < 0) {
      left = 0;
    }
    bar.style.left = left + "px";
  }
}

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

setInterval(moveBar, 40);

/* Task 7 --------------------------------------------------------------------------------------- */

// These indicate how many pixels the ball has to move each time on each axis.
let topDelta = (leftDelta = 5)
// These are the coordinates for ball position.
let topCoord = (leftCoord = 0)
// This is the width of the playground area.
const fieldWidth = document.querySelector('.ball-container').clientWidth
// This is the height of the playground area.
const fieldHeight = document.querySelector('.ball-container').clientHeight

/* Task 7 solution ------------------------------------------------------------------------------ */
const ball = document.querySelector('.ball-container div');

function moveBall() {
  topCoord += topDelta;
  leftCoord += leftDelta;

  // Rebote vertical
  if (topCoord <= 0 || topCoord >= fieldHeight - ball.clientHeight) {
    topDelta = -topDelta;
    console.log("Rebote vertical");
  }

  // Rebote horizontal
  if (leftCoord <= 0 || leftCoord >= fieldWidth - ball.clientWidth) {
    leftDelta = -leftDelta;
    console.log("Rebote horizontal");
  }

  ball.style.top = topCoord + 'px';
  ball.style.left = leftCoord + 'px';
}

// Establecer posición inicial y asegurarse de que sea absoluta
ball.style.position = 'absolute';
ball.style.top = topCoord + 'px';
ball.style.left = leftCoord + 'px';

setInterval(moveBall, 20);
