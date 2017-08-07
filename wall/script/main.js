var sendbtn = document.getElementsByClassName('wall-btn')[0];
var sendtext = document.getElementsByClassName('wall-input')[0];
var sendwall = document.getElementsByClassName('wall')[0];
var sendnum = 0;
var divspeed = 20;

function adddiv() {
	if(sendtext.value == '') {
		alert('请输入内容')
	}else {
		var walldiv = document.createElement('div');
		var rantop = 80 * Math.random();
		walldiv.innerHTML = sendtext.value;
		walldiv.setAttribute('class','wall-sub');
		walldiv.setAttribute('num',sendnum);
		walldiv.setAttribute('speed',divspeed);
		walldiv.style.top = rantop + 'px';
		sendwall.appendChild(walldiv);
		var wallsubs = document.getElementsByClassName('wall-sub');
		for(var j=0; j<wallsubs.length; j++) {
			wallsubs[j].style.width = wallsubs[j].offsetWidth + 'px';
		}
		sendtext.value = '';
		sendnum++;
	}
}

sendbtn.addEventListener('click',function() {
	
	adddiv();
});

var timer1 = setInterval(function() {
	if(document.getElementsByClassName('wall-sub')[0]) {
		var wallsubs = document.getElementsByClassName('wall-sub');
		// wallsubs[0].style.right =  20 + 'px';
		var divnnums = 0;
		
		// console.log(wallsubs[0].style.left);
		for(var i=0 ;i<wallsubs.length; i++) {
			var thisspeed = wallsubs[i].getAttribute('speed') - 0;
			var thiswidth = wallsubs[i].offsetWidth - 0;
			// console.log(thiswidth)
			// wallsubs[i].style.width = thiswidth + 'px';
			wallsubs[i].style.right =  wallsubs[i].getAttribute('speed') + 'px';
			wallsubs[i].setAttribute('speed',thisspeed+=5);
			if(thisspeed > thiswidth + 970) {
				// thisspeed = - thiswidth * 2;
				// wallsubs[i].setAttribute('speed',thisspeed);
				wallsubs[i].parentNode.removeChild(wallsubs[i])
			}
		}
	}else {
		
	}
	
},100);

document.onkeydown=function(e) {
	if(e && e.keyCode == 13) {
		adddiv();
	}
}