var ctx1 = document.getElementById("case1").getContext("2d")
var ctx2 = document.getElementById("case2").getContext("2d")
var ctx3 = document.getElementById("case3").getContext("2d")
var ctx4 = document.getElementById("case4").getContext("2d")
var ctx5 = document.getElementById("case5").getContext("2d")
var ctx6 = document.getElementById("case6").getContext("2d")
var ctx7 = document.getElementById("case7").getContext("2d")
var ctx8 = document.getElementById("case8").getContext("2d")
var ctx9 = document.getElementById("case9").getContext("2d")

var c1, c2, c3, c4, c5, c6, c7, c8, c9

var tour = 0

function drawCross(context) {
	context.beginPath()
    context.lineWidth = "5"
		context.moveTo(0 ,0)
		context.lineTo(100 ,100)
		context.moveTo(100 ,0)
		context.lineTo(0 ,100)
		context.stroke()
}

function drawCircle(context) {
    context.beginPath()
    context.lineWidth = "5"
    context.arc(50, 50, 45, 0, Math.PI * 2)
    context.stroke()
    context.closePath()
}

document.getElementById("case1").addEventListener('click', function() {
	if (c1 !== 'a' && c1 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx1)
			c1 = 'a'
		} else {
			drawCircle(ctx1)
			c1 = 'b'
		}
		tour++
	}
	document.getElementById("case1").style.backgroundColor = "red"
})

document.getElementById("case2").addEventListener('click', function() {
	if (c2 !== 'a' && c2 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx2)
			c2 = 'a'
		} else {
			drawCircle(ctx2)
			c2 = 'b'
		}
		tour++
	}
	document.getElementById("case2").style.backgroundColor = "red"
})

document.getElementById("case3").addEventListener('click', function() {
	if (c3 !== 'a' && c3 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx3)
			c3 = 'a'
		} else {
			drawCircle(ctx3)
			c3 = 'b'
		}
		tour++
	}
	document.getElementById("case3").style.backgroundColor = "red"
})

document.getElementById("case4").addEventListener('click', function() {
	if (c4 !== 'a' && c4 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx4)
			c4 = 'a'
		} else {
			drawCircle(ctx4)
			c4 = 'b'
		}
		tour++
	}
	document.getElementById("case4").style.backgroundColor = "red"
})

document.getElementById("case5").addEventListener('click', function() {
	if (c5 !== 'a' && c5 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx5)
			c5 = 'a'
		} else {
			drawCircle(ctx5)
			c5 = 'b'
		}
		tour++
	}
	document.getElementById("case5").style.backgroundColor = "red"
})

document.getElementById("case6").addEventListener('click', function() {
	if (c6 !== 'a' && c6 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx6)
			c6 = 'a'
		} else {
			drawCircle(ctx6)
			c6 = 'b'
		}
		tour++
	}
	document.getElementById("case6").style.backgroundColor = "red"
})

document.getElementById("case7").addEventListener('click', function() {
	if (c7 !== 'a' && c7 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx7)
			c7 = 'a'
		} else {
			drawCircle(ctx7)
			c7 = 'b'
		}
		tour++
	}
	document.getElementById("case7").style.backgroundColor = "red"
})

document.getElementById("case8").addEventListener('click', function() {
	if (c8 !== 'a' && c8 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx8)
			c8 = 'a'
		} else {
			drawCircle(ctx8)
			c8 = 'b'
		}
		tour++
	}
	document.getElementById("case8").style.backgroundColor = "red"
})

document.getElementById("case9").addEventListener('click', function() {
	if (c9 !== 'a' && c9 !== 'b') {
		if (tour % 2 === 0) {
			drawCross(ctx9)
			c9 = 'a'
		} else {
			drawCircle(ctx9)
			c9 = 'b'
		}
		tour++
	}
	document.getElementById("case9").style.backgroundColor = "red"
})

setInterval(function() {
	if (c1 === 'a' && c2 === 'a' && c3 === 'a' || c4 === 'a' && c5 === 'a' && c6 === 'a' || c7 === 'a' && c8 === 'a' && c9 === 'a' || c1 === 'a' && c4 === 'a' && c7 === 'a' || c2 === 'a' && c5 === 'a' && c8 === 'a' || c3 === 'a' && c6 === 'a' && c9 === 'a' || c1 === 'a' && c5 === 'a' && c9 === 'a' || c3 === 'a' && c5 === 'a' && c7 === 'a') {
		document.getElementById("endGame").innerHTML = "The first player win ! OMG GG WP !<br>ps: you suck second player."
		setTimeout(function() {
			location.reload()
		}, 2500)
	} else if (c1 === 'b' && c2 === 'b' && c3 === 'b' || c4 === 'b' && c5 === 'b' && c6 === 'b' || c7 === 'b' && c8 === 'b' && c9 === 'b' || c1 === 'b' && c4 === 'b' && c7 === 'b' || c2 === 'b' && c5 === 'b' && c8 === 'b' || c3 === 'b' && c6 === 'b' && c9 === 'b' || c1 === 'b' && c5 === 'b' && c9 === 'b' || c3 === 'b' && c5 === 'b' && c7 === 'b') {
		document.getElementById("endGame").innerHTML = "The second player win ! OMG GG WP !<br>ps: you suck first player."
		setTimeout(function() {
			location.reload()
		}, 2500)
	} else if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9) {
		document.getElementById("endGame").innerHTML = "It's a freaking draw ! Congrats, you both suck equally."
		setTimeout(function() {
			location.reload()
		}, 2500)
	}
}, 1000/3)

var hardcore = 0
var text = "I told you...\nnow press 'z' you dumbass."
var colors = ['red', 'blue', , 'yellow', 'green']

setInterval(function() {	
	document.addEventListener('keydown', function(e) {
		if (e.keyCode === 65) {
			hardcore = 1
			if (text[0] === "F") {
				document.getElementById("tip").innerHTML = text
				text = "..."
			} else {
				document.getElementById("tip").innerHTML = text
			}
		}
		if (e.keyCode === 90) {
			hardcore = 0
			if (text === "...") {
			document.getElementById("tip").innerHTML = text
			} else {
				document.getElementById("tip").innerHTML = "Don't you dare doing it again."
				text = "FUCK YOU I'M QUITING !"
			}
		}
	})
	if (hardcore === 1) {
		document.getElementById("case1").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c1 === 'a' || c1 === 'b') {
		document.getElementById("case1").style.backgroundColor = "red"
	} else if (!c1) {
		document.getElementById("case1").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case2").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	}
	else if (c2 === 'a' || c2 === 'b') {
		document.getElementById("case2").style.backgroundColor = "red"
	} else if (!c2) {
		document.getElementById("case2").style.backgroundColor = "black"
	}  
	if (hardcore === 1) {
		document.getElementById("case3").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c3 === 'a' || c3 === 'b') {
		document.getElementById("case3").style.backgroundColor = "red"
	} else if (!c3) {
		document.getElementById("case3").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case4").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c4 === 'a' || c4 === 'b') {
		document.getElementById("case4").style.backgroundColor = "red"
	} else if (!c4) {
		document.getElementById("case4").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case5").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c5 === 'a' || c5 === 'b') {
		document.getElementById("case5").style.backgroundColor = "red"
	} else if (!c5) {
		document.getElementById("case5").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case6").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c6 === 'a' || c6 === 'b') {
		document.getElementById("case6").style.backgroundColor = "red"
	} else if (!c6) {
		document.getElementById("case6").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case7").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c7 === 'a' || c7 === 'b') {
		document.getElementById("case7").style.backgroundColor = "red"
	} else if (!c7) {
		document.getElementById("case7").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case8").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c8 === 'a' || c8 === 'b') {
		document.getElementById("case8").style.backgroundColor = "red"
	} else if (!c8) {
		document.getElementById("case8").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.getElementById("case9").style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (c9 === 'a' || c9 === 'b') {
		document.getElementById("case9").style.backgroundColor = "red"
	} else if (!c9) {
		document.getElementById("case9").style.backgroundColor = "black"
	} 
	if (hardcore === 1) {
		document.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)]
	} else if (hardcore === 0) {
		document.body.style.backgroundColor = "black"
	}
}, 1)