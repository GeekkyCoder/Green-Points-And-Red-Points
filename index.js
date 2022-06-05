const body = document.body
const pointsEl = document.getElementById("points-p")
const btnsContainer = document.getElementById("btns-container")
const activityCountEl = document.getElementById("activity-count-el")
let points = 0;
let activityCount = 0

const actionsArr = [
 {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false,
  }
]



function renderBtns(){
  for (let i=0; i < actionsArr.length; i++) {
     let numOfTimesDone = actionsArr[i].numOfTimesDone 
     let goodOrBad = ""
    
    actionsArr[i].good ? goodOrBad = "good" : goodOrBad = "bad"
    btnsContainer.innerHTML += `
    <button id="${actionsArr[i].name}" class="btn btn-${goodOrBad}">
        ${actionsArr[i].emoji} ${actionsArr[i].text}
      </button>`
      
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', ()=> {
        btn.classList.contains("btn-good") ? points += 5 : points -= 5 
        pointsEl.textContent = `${points} points today!`
        determineBackgroundColor()
        increment()
      });
    })
  }
}

function determineBackgroundColor(){
  points < 0 ? body.classList.add("background-bad") : body.classList.remove("background-bad")
}

function increment() {
    activityCount += 1
    activityCountEl.textContent = activityCount
}


renderBtns()
