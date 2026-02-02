homeScore = 0 
awayScore = 0
guestCounter = document.getElementById("guestCounter")
homeCounter = document.getElementById("homeCounter")

function home3(){
    homeScore +=  3
    homeCounter.textContent = homeScore
}
function home2(){
    homeScore += 2
    homeCounter.textContent = homeScore
}
function home1(){
    homeScore += 1
    homeCounter.textContent = homeScore
}

function guest3(){
    awayScore +=  3
    guestCounter.textContent = awayScore
}
function guest2(){
    awayScore += 2
    guestCounter.textContent = awayScore
}
function guest1(){
    awayScore += 1
    guestCounter.textContent = awayScore
}

function newGame(){
    awayScore = 0
    homeScore = 0
    guestCounter.textContent = 0
    homeCounter.textContent = 0
}
