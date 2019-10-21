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
        results: document.getElementById("results")
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
        if (winner == -1) {
            elements.results.textContent = `It was a draw! You both chose ${element.target.id}`;
        }
        else {
            if (winner == 0) {
                elements.results.textContent = `${element.target.id} (user) beats ${rH} (comp).`;
            }
            if (winner == 1) {
                elements.results.textContent = `${rH} (comp) beats ${element.target.id} (user).`;
            }
            state.scores[winner ? "comp" : "user"] += 1;
        }
        elements.scores.comp.textContent = state.scores.comp;
        elements.scores.user.textContent = state.scores.user;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", (element) => turn(element));
    })
    
});