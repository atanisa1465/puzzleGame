//Images Puzzle 1
const ITEMS1 = [
  ["01", "Puzzle1/cutPuzzle1/image_part_001.png"],
  ["02", "Puzzle1/cutPuzzle1/image_part_002.png"],
  ["03", "Puzzle1/cutPuzzle1/image_part_003.png"],
  ["04", "Puzzle1/cutPuzzle1/image_part_004.png"],
  ["05", "Puzzle1/cutPuzzle1/image_part_005.png"],
  ["06", "Puzzle1/cutPuzzle1/image_part_006.png"],
  ["07", "Puzzle1/cutPuzzle1/image_part_007.png"],
  ["08", "Puzzle1/cutPuzzle1/image_part_008.png"],
  ["09", "Puzzle1/cutPuzzle1/image_part_009.png"],
  ["10", "Puzzle1/cutPuzzle1/image_part_010.png"],
  ["11", "Puzzle1/cutPuzzle1/image_part_011.png"],
  ["12", "Puzzle1/cutPuzzle1/image_part_012.png"],
  ["13", "Puzzle1/cutPuzzle1/image_part_013.png"],
  ["14", "Puzzle1/cutPuzzle1/image_part_014.png"],
  ["15", "Puzzle1/cutPuzzle1/image_part_015.png"],
  ["16", "Puzzle1/cutPuzzle1/image_part_016.png"],
];

//Images Puzzle 2
const ITEMS2 = [
  ["01", "Puzzle2/cutPuzzle2/image_part_001.png"],
  ["02", "Puzzle2/cutPuzzle2/image_part_002.png"],
  ["03", "Puzzle2/cutPuzzle2/image_part_003.png"],
  ["04", "Puzzle2/cutPuzzle2/image_part_004.png"],
  ["05", "Puzzle2/cutPuzzle2/image_part_005.png"],
  ["06", "Puzzle2/cutPuzzle2/image_part_006.png"],
  ["07", "Puzzle2/cutPuzzle2/image_part_007.png"],
  ["08", "Puzzle2/cutPuzzle2/image_part_008.png"],
  ["09", "Puzzle2/cutPuzzle2/image_part_009.png"],
  ["10", "Puzzle2/cutPuzzle2/image_part_010.png"],
  ["11", "Puzzle2/cutPuzzle2/image_part_011.png"],
  ["12", "Puzzle2/cutPuzzle2/image_part_012.png"],
  ["13", "Puzzle2/cutPuzzle2/image_part_013.png"],
  ["14", "Puzzle2/cutPuzzle2/image_part_014.png"],
  ["15", "Puzzle2/cutPuzzle2/image_part_015.png"],
  ["16", "Puzzle2/cutPuzzle2/image_part_016.png"],
];

//Images Puzzle 3
const ITEMS3 = [
  ["01", "Puzzle3/cutPuzzle3/image_part_001.png"],
  ["02", "Puzzle3/cutPuzzle3/image_part_002.png"],
  ["03", "Puzzle3/cutPuzzle3/image_part_003.png"],
  ["04", "Puzzle3/cutPuzzle3/image_part_004.png"],
  ["05", "Puzzle3/cutPuzzle3/image_part_005.png"],
  ["06", "Puzzle3/cutPuzzle3/image_part_006.png"],
  ["07", "Puzzle3/cutPuzzle3/image_part_007.png"],
  ["08", "Puzzle3/cutPuzzle3/image_part_008.png"],
  ["09", "Puzzle3/cutPuzzle3/image_part_009.png"],
  ["10", "Puzzle3/cutPuzzle3/image_part_010.png"],
  ["11", "Puzzle3/cutPuzzle3/image_part_011.png"],
  ["12", "Puzzle3/cutPuzzle3/image_part_012.png"],
  ["13", "Puzzle3/cutPuzzle3/image_part_013.png"],
  ["14", "Puzzle3/cutPuzzle3/image_part_014.png"],
  ["15", "Puzzle3/cutPuzzle3/image_part_015.png"],
  ["16", "Puzzle3/cutPuzzle3/image_part_016.png"],
];

const images = [];
const cells = [];

let puzzle, choice, shuffleButton, totalClicks, currentClick, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, shuffleCount, audioSrc, bgMusic, fullImage;

function choosePuzzle(i) {
  sessionStorage.setItem("puzzleChoice", i);
  window.location.href = "puzzle.html";
}

function initialize() {
  choice = 0;
  puzzle = [];
  let puzzleChoice = sessionStorage.getItem("puzzleChoice");
  console.log(puzzleChoice);
  totalClicks = 0;
  currentClick = 0;
  shuffleCount = 0;
  fullImage = document.getElementById("fullImg");

  if (puzzleChoice == 1) {
    for (let j = 0; j < 16; j++) {
      puzzle[j] = ITEMS1[j];
      console.log(puzzle[j][1]);
    }
    fullImage.src = "/Puzzle1/image1.jpg";
  }
  if (puzzleChoice == 2) {
    for (let j = 0; j < 16; j++) {
      puzzle[j] = ITEMS2[j];
    }
    fullImage.src = "/Puzzle2/image2.jpg";
  }
  if (puzzleChoice == 3) {
    for (let j = 0; j < 16; j++) {
      puzzle[j] = ITEMS3[j];
    }
    fullImage.src = "/Puzzle3/image3.jpg";
  }

  image1 = document.getElementById("cell1");
  images.push(image1);
  image2 = document.getElementById("cell2");
  images.push(image2);
  image3 = document.getElementById("cell3");
  images.push(image3);
  image4 = document.getElementById("cell4");
  images.push(image4);
  image5 = document.getElementById("cell5");
  images.push(image5);
  image6 = document.getElementById("cell6");
  images.push(image6);
  image7 = document.getElementById("cell7");
  images.push(image7);
  image8 = document.getElementById("cell8");
  images.push(image8);
  image9 = document.getElementById("cell9");
  images.push(image9);
  image10 = document.getElementById("cell10");
  images.push(image10);
  image11 = document.getElementById("cell11");
  images.push(image11);
  image12 = document.getElementById("cell12");
  images.push(image12);
  image13 = document.getElementById("cell13");
  images.push(image13);
  image14 = document.getElementById("cell14");
  images.push(image14);
  image15 = document.getElementById("cell15");
  images.push(image15);
  image16 = document.getElementById("cell16");
  images.push(image16);

  console.log(images);

  for (let img = 0; img < images.length; img++) {
    cells.push(images[img]);
  }

  for (let k = 0; k < cells.length; k++) {
    (cells[k]).src = puzzle[k][1];
  }

  shuffleButton = document.getElementById("shufflePuzzle");
  shuffleButton.addEventListener("click", function() { shuffleImages(puzzle); });
  let scoreSpan = document.getElementById("scoreSpan");
  isPuzzleComplete();

  //Song
  bgMusic = document.getElementById("backgroundMusicChoice");
  audioBar = document.getElementById("backgroundMusic");
  audioSrc = document.getElementById("mp3source");
  makeSongChoice();

  document.getElementById("viewDemo").addEventListener("click", function() { displayDemoVid(); })
  document.getElementById("openImage").addEventListener("click", function() { displayImage(); })

}

//Click Image
let img1, img2;

function clickImage(button) {
  console.log(currentClick);
  currentClick++;

  if (currentClick === 1) {
    console.log("1st image clicked " + currentClick);
    img1 = button;
  } else {
    if (currentClick === 2) {
      totalClicks++;
      console.log("2nd image clicked " + currentClick);
      img2 = button;
      swapCards(img1, img2);
      currentClick = 0;
    }
  }
}

//Add all event listeners
let addAllEventListeners = () => {
  for (let button = 0; button < images.length; button++) {
    images[button].addEventListener("click", function() { designButton(this, true); clickImage(button); });
  }
}

function designButton(button, isAdding) {
  return isAdding ?
    (button.style.transition = 0.1,
      button.style.boxShadow = "5px 5px 3px #023020, -5px -5px 3px #023020")
    : (button.style.transition = 0,
      button.style.boxShadow = "none");
}

//Remove all event listeners
let removeAllEventListeners = () => {
  for (let button = 0; button < images.length; button++) {
    images[button].addEventListener("click", function() { designButton(this, false); });
  }
}

//Shuffle Images
function shuffle() {
  console.log("Shuffling");
  console.log(shuffleCount);
  if (shuffleCount === 0) {
    shuffleImages(puzzle);
  }
}

function shuffleImages(array) {
  if (shuffleCount === 0) {
    totalClicks = 0;
    for (let row = array.length - 1; row > 0; row--) {
      let imgSrc = Math.floor(Math.random() * (row + 1));
      let tempImgSrc = array[row][1];
      array[row][1] = array[imgSrc][1];
      array[imgSrc][1] = tempImgSrc;
    }

    display();
    addAllEventListeners();

    console.log(array);
    shuffleCount++;
  }
}


//Swap Cards
function swapCards(click1, click2) {

  tempSwap = puzzle[click1][1];
  puzzle[click1][1] = puzzle[click2][1];
  puzzle[click2][1] = tempSwap;

  display();

  if (currentClick !== 0) {
    currentClick = 0;
  }

  if (isPuzzleComplete()) {
    console.log("Solved in " + totalClicks + " clicks");
    displayMessage();
  }

  setTimeout(() => { designButton(images[click1], false); designButton(images[click2], false); }, "300")

}

//Display
function display() {
  for (let k = 0; k < cells.length; k++) {
    (cells[k]).src = puzzle[k][1];
  }
  shuffleButton.innerHTML = `Clicks: ${totalClicks}`;
}

//Check if Puzzle is matched
function isPuzzleComplete() {
  for (let imgNumber = 0; imgNumber < puzzle.length; imgNumber++) {
    let imgSource = (puzzle[imgNumber][1]).substring(31, 33);
    console.log(imgSource);

    if (!(puzzle[imgNumber][0] === imgSource)) {
      return false;
    }
  }

  return true;
}

let modal, span;
let modalVideo;

function displayMessage() {
  let text = document.querySelector(".winner");
  text.innerHTML = `It took you ${totalClicks} clicks to complete the puzzle.`;
  modal = document.getElementById("winnerModal");
  span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.addEventListener("click", function() { modal.style.display = "none"; });
}

function displayDemoVid() {
  modalVideo = document.getElementById("demoVideo");
  span = document.getElementById("vidDone");
  modalVideo.style.display = "block";
  span.addEventListener("click", function() { modalVideo.style.display = "none"; });
}

function displayImage() {
  modalVideo = document.getElementById("viewIMG");
  span = document.getElementById("closeIMG");
  modalVideo.style.display = "block";

  span.addEventListener("click", function() { modalVideo.style.display = "none"; });
}



//Selects the song
function makeSongChoice() {
  console.log("here");
  // audioSrc.src = source;
  let songChoice = bgMusic.value;
  // let audio = document.getElementById("mp3source");
  // //let song = document.getElementById("backgroundMusic");
  switch (songChoice) {
    case "1":
      //sessionStorage.setItem("bgMusic", "riverlands");
      //console.log("Riverlands was chosen");
      audioSrc.src = "Audio/riverlands.mp3";
      audioBar.load();
      break;
    case "2":
      //sessionStorage.setItem("bgMusic", "ophilia");
      audioSrc.src = "Audio/ophilia.mp3";
      audioBar.load();
      break;
    case "3":
      //sessionStorage.setItem("bgMusic", "wii");
      audioSrc.src = "Audio/wii.mp3";
      audioBar.load();
      break;
    case "4":
      //sessionStorage.setItem("bgMusic", "kahoot");
      audioSrc.src = "Audio/kahoot.mp3";
      audioBar.load();
      break;
    case "5":
      //sessionStorage.setItem("bgMusic", "tacos");
      audioSrc.src = "Audio/tacos.mp3";
      audioBar.load();
      break;
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "311px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}