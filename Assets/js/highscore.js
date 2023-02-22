
var highScore = JSON.parse(localStorage.getItem("score")) || [];

// Event listener to Reaset Score button, to clear scores.
var reset = document.querySelector("#resetScore");
reset.addEventListener("click", function (){ 
    localStorage.clear();
    location.reload();
    console.log("clicked");
  })


  // Render score on screen.

  var scoreTable = document.getElementById("scoreTable");
  highScore.forEach( function (item){
    console.log(item)
    var createLi = document.createElement("li");
    createLi.innerHTML = 'Name: ' + item.initials + " - " + ' Score: ' + item.timeLeft
    console.log(createLi)
    scoreTable.append(createLi)
  })

 

