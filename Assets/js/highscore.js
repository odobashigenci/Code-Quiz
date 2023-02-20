var reset = document.querySelector("#resetScore");


// Event listener to clear scores 
reset.addEventListener("click", function (){ 
    localStorage.clear();
    location.reload();
    console.log("clicked");
  })
  