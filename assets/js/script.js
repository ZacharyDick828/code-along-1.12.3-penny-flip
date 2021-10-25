// TODO: Declare any global variables we need

let numberOfHeads = 0
let numberOfTails = 0
let percentageHeads = 0
let percentageTails = 0
let totalFlips = numberOfHeads + numberOfTails
let images = [
    {
        imagePath: "./assets/images/penny-heads.jpg",
        side: "heads",
        message: "you flipped heads"
    },
    {
        imagePath: "./assets/images/penny-tails.jpg",
        side: "tails",
        message: "you flipped tails"
    },
]

document.addEventListener('DOMContentLoaded', function () {


    // TODO: Add event listener and handler for flip and clear buttons

    document.getElementById("flip").addEventListener("click", function() {

        let randomImage = images[Math.floor(Math.random()*images.length)]

        document.getElementById("penny").setAttribute("src", randomImage.imagePath)

        document.querySelector(".message-container").textContent = randomImage.message

        if (randomImage.side === "heads"){
            numberOfHeads++
            totalFlips = numberOfHeads + numberOfTails
            document.getElementById("heads").textContent = numberOfHeads
        }else { 
            numberOfTails++
            totalFlips = numberOfHeads + numberOfTails
            document.getElementById("tails").textContent = numberOfTails
        }

        percentageHeads = ((numberOfHeads / totalFlips) * 100).toFixed(2) + "%"
        percentageTails = ((numberOfTails / totalFlips) * 100).toFixed(2) + "%"

        document.getElementById("heads-percent").textContent = percentageHeads
        document.getElementById("tails-percent").textContent = percentageTails
        console.log(percentageHeads)
        console.log(percentageTails)

    })

    document.getElementById("clear").addEventListener("click", function(){
        let numberOfHeads = 0
        let numberOfTails = 0
        let percentageHeads = 0 + "%"
        let percentageTails = 0 + "%"
        let totalFlips = numberOfHeads + numberOfTails

        document.getElementById("heads").textContent = numberOfHeads
        document.getElementById("tails").textContent = numberOfTails
        document.getElementById("heads-percent").textContent = percentageHeads
        document.getElementById("tails-percent").textContent = percentageTails

    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})