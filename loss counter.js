document.body.innerHTML = `
  <div class="orange-square"></div>
  <div class="blue-circle">
    <h1>Win/Loss Counter</h1>
    <div class="counter-text">
      <p>Wins: <span id="win-count">0</span></p> 
      <p>Losses: <span id="loss-count">0</span></p> 
    </div>
  </div>
  <div class="button-container">
    <button id="win-button">Win</button>
    <button id="loss-button">Loss</button>
    <button id="reset-button">Reset</button> 
  </div>
`;

const style = document.createElement('style');
style.innerHTML = `
  body {
    font-family: Arial, sans-serif;
    background-image: url('White Background.jpg');
    background-size: cover;
  }

  h1 {
    text-align: center;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    width: 300px; 
    height: 200px; 
    padding: 10px 20px;
    margin: 25px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  #win-button {
    background-color: #1a721a; 
  }

  #loss-button {
    background-color: #9c2424; 
  }

  .orange-square {
    position: absolute;
    top: 0; 
    left: 0; 
    width: 480px;
    height: 100vh;
    background-color: #d6630d; 
  }

  .blue-circle {
    position: absolute; 
    top: 50%; /* Center the circle vertically */
    left: 50%; /* Center the circle horizontally */
    transform: translate(-140%, -50%); 
    width: 500px; /* Diameter of the circle */
    height: 500px; 
    border-radius: 50%; 
    background-color: rgb(19, 59, 82);
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }

  .blue-circle h1 {
    color: white; 
    margin: 0; 
    font-size: 30px; 
  }

  .counter-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(170%, -50%);
    font-size: 36px; /* Increase the font size */
    font-weight: bold;
  }

  .button-container {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(155%, -50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }

  #reset-button {
    position: absolute;
    top: 530px; 
    left: 44%; 
    transform: translateX(-50%);
    background-color: #4552c4; /* Add a background color */
    color: #000000; /* Set the text color */
    padding: 10px 20px; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
  }
`;
document.head.appendChild(style);


const winButton = document.getElementById("win-button");
const lossButton = document.getElementById("loss-button");
const winCountSpan = document.getElementById("win-count");
const lossCountSpan = document.getElementById("loss-count");
const resetButton = document.getElementById("reset-button");

let winCount = 0;
let lossCount = 0;

function updateCounter() {
  winCountSpan.textContent = winCount;
  lossCountSpan.textContent = lossCount;
}

winButton.addEventListener("click", () => {
  winCount++;
  updateCounter();
});

lossButton.addEventListener("click", () => {
  lossCount++;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  winCount = 0;
  lossCount = 0;
  updateCounter();
});
