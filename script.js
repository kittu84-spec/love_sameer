// HACKER INTRO
const hackerLines = [
  "Initializing system...",
  "Accessing heart database...",
  "Cracking emotional firewall...",
  "Injecting love.exe",
  "Loading love for Sameer from Vanshika 💜",
  "Status: Sameer hacked successfully 😏"
];

let hackIndex = 0;
const hackText = document.getElementById("hackText");

function hackerTyping() {
  if (hackIndex < hackerLines.length) {
    hackText.innerHTML += hackerLines[hackIndex] + "\n";
    hackIndex++;
    setTimeout(hackerTyping, 700);
  }
}
hackerTyping();

// After intro ends
setTimeout(() => {
  document.getElementById("hackerScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  typeText(msg1, "typing1");
}, 6500);

// 💜 PAGE MESSAGES

const msg1 = `  

And tomorrow is your paper.  
Give your best, baby. I am very proud of you for trying in such a tough field.  
I just love you so much, my baby 💜
Sameer, I love you a little too much, and sometimes it hurts that you can’t give me your time. 
But I understand. You have your reasons, and I respect them. 
I will never force you to choose between me, your studies, or your family. 
I just love you—and I know you love me too.

I know that right now you can’t show it in the ways that make me feel loved, but it’s okay. 
I’ll try to understand from now on. Just bear with me—I know I can be a little irritating sometimes.

And please, thoda sa sabr rakhna, because I love you too, too, too, too, too, too much. 
Mwah 💋
`;

const msg2 = `
And baby, you are only mine and mine alone 😌  
If you go somewhere else, I’ll beat you with slippers, belt, and everything I find 😤😂  
But I love you so, so, so, so, so much. Mwah 💋  

And tomorrow is your paper.  
Give your best, baby. I am very proud of you for trying in such a tough field.  
I just love you so much, my baby 💜

`;

// Typing Effect
function typeText(text, id) {
  let i = 0;
  const el = document.getElementById(id);
  el.innerHTML = "";
  const typing = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 35);
}

// PAGE SWITCH
function nextPage(num) {
  document.querySelector(".page.active").classList.remove("active");
  document.getElementById("page" + num).classList.add("active");

  if (num === 2) typeText(msg2, "typing2");
}

// SECRET MESSAGE
function showSecret() {
  document.getElementById("secretBox").style.display = "block";
}

// YES BUTTON
function yesLove() {
  alert("Sameer is officially Vanshika’s forever 💜😏");
}

// NO BUTTON RUN AWAY
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth - 120;
  const y = Math.random() * window.innerHeight - 120;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

