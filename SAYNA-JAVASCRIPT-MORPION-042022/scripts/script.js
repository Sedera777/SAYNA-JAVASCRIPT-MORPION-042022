let items = document.querySelectorAll(".grid-item");
const choose1 = document.querySelector('.choose1');
const reset = document.querySelector('.reset');
const again = document.querySelector('#play-again');
items = Array.from(items);
let myArray = [];
const PLAYERX = 'X';
const PLAYERO = 'O'
let currentPlayer = PLAYERX ? PLAYERX : PLAYERO;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
$(document).ready(function() {




    function choosePlayer() {



    }
    startGame()

    function startGame() {
        for (var i = 0; i < items.length; i++) {
            items[i].textContent = ''
            myArray = [];
        }
        $(".layer").hide()
        $(".layer2").hide()
        $("#overlay").hide()
       

    }
    items.forEach(function(item) {
        item.addEventListener("click", function() {
            if (item.innerText.trim() != "") return
            item.innerText = currentPlayer
            checkWinner()
            currentPlayer = currentPlayer == PLAYERX ? PLAYERO : PLAYERX;
            if (myArray.length <= 9)
                myArray.push(currentPlayer)
        })
    })

    function checkWinner() {
        winCombos.forEach(function(combo) {
            let check = combo.every(index => items[index].innerText.trim() == currentPlayer)
            if (check) {
                $("#overlay").show()
                $(".layer").show()
                $("#text").html(currentPlayer + " WIN")
            }
            if (!check && myArray.length == 8) {

                $("#overlay").show()
                $(".layer").show()
                $("#text").html("DRAW")
            }

        })
    }
    
    again.addEventListener('click', function() {
            for (var i = 0; i < items.length; i++) {
                items[i].textContent = ''
                myArray = [];
            }
            $(".layer2").hide()
            $("#overlay").hide()
            $(".layer").hide()

        })
        // // Vide le contenu de toute les cases
    reset.addEventListener('click', function() {
        for (var i = 0; i < items.length; i++) {
            items[i].textContent = ''
        }
        choosePlayer()
        startGame()

    })
});