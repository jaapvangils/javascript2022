	// Declare and assign variables.
	let object1Size = {
	  width: 20,
	  height: 20
	};
	let position = {
	  x: 10,
	  y: 10
	};
	let moveRate = 10;
	let object1 = document.getElementById("object1");
	
  // ververs de Y.
	function verversYPositie(distance) {
	  position.y -= distance;
	  // randen detecteren
	  if (position.y < 0) {
	    position.y = 499;
	  } else if (position.y > 499) {
	    position.y = 0;
	  }
	}

	// ververs de X.
	function verversXpositie(distance) {
	  position.x += distance;
	  // Randen detecteren
	  if (position.x < 0) {
	    position.x = 499;
	  } else if (position.x > 499) {
	    position.x = 0;
	  }
	}

	function verversPositie() {
	  let x = position.x - (object1Size.width/2);
	  let y = position.y - (object1Size.height/2);
	  let transform = "translate(" + x + " " + y + ")";

	  object1.setAttribute("transform", transform);
	}

	window.addEventListener("keydown", function(toets) {
	  if (toets.defaultPrevented) {
	    return;
	  }
	  if (toets.code === "ArrowDown"){
	      // Handle "down"
	      verversYPositie(-moveRate);
	  } else if (toets.code === "ArrowUp"){
	      // Handle "up"
	      verversYPositie(moveRate);
	  } else if (toets.code === "ArrowLeft"){
	      // Handle "left"
	     verversXpositie(-moveRate);
	  } else if (toets.code === "ArrowRight"){
	      // Handle "right"
	     verversXpositie(moveRate);
	  }
	  verversPositie();
	  toets.preventDefault();
	}, true);
