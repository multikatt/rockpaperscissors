$(() => {
    var state = {
        scores: {
            user: 0,
            comp: 0
        }
    }
    
    var elements = {
        scores: {
            user: document.getElementById("user-score"),
            comp: document.getElementById("comp-score"),
        },
        options: {
            rock: document.getElementById("rock"),
            paper: document.getElementById("paper"),
            scissors: document.getElementById("scissors")
        }
    }

    function getWinner(userHand, compHand) { 
        const hands = [userHand, compHand];
        if (hands.includes("rock") && hands.includes("scissors")) {
            return hands.indexOf("rock");
        }
        if (hands.includes("rock") && hands.includes("paper")) {
            return hands.indexOf("paper");
        }
        if (hands.includes("scissors") && hands.includes("paper")) {
            return hands.indexOf("scissors");
        }
        if (hands.userHand == hands.compHand) {
            return -1
        }
    }

    function randomHand() {
        const hands = ["rock", "scissors", "paper"];
        
        return hands[Math.floor(Math.random()*10 % 3)];
    }

    function turn(element) {
        const rH = randomHand();
        const winner = getWinner(element.target.id, rH);
        if (winner > -1) {
            state.scores[winner ? "comp" : "user"] += 1;
        }
        
        elements.scores.comp.textContent = state.scores.comp;
        elements.scores.user.textContent = state.scores.user;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", (element) => turn(element));
    })
    
});