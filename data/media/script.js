/*

Copyright (C) 2014 Gabriel Barbosa <barbosanascimentogabriel@gmail.com>
This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License version 3, as published 
by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but 
WITHOUT ANY WARRANTY; without even the implied warranties of 
MERCHANTABILITY, SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR 
PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along 
with this program.  If not, see <http://www.gnu.org/licenses/>.


------------GUIDE CODE--------------

1.0 - Main variables and functions
1.1 - General Scripts
1.2 - Alarm scripts and properties
1.3 - localStorage scripts

------------------------------------

*/

/*----------------1.0 - Main variables and functions ------------------------*/

function backToClassic() {
	$('.classic .switch div').animate({right: '-20px'},300);
	$('.classic .switch').css('background-color', colorSwitch);
	$('#circle').fadeOut('fast');
	$('#i1').attr("src","media/1.png");
	$('#i2').attr("src","media/2.png");
	$('#i3').attr("src","media/3.png");
	$('#i4').attr("src","media/4.png");
	$('#i5').attr("src","media/5.png");
	$('#animation, #alarm-settings, .alarm-popup').css("background","#2f0916");
	$('#pallet-color span img').css('display','none');
	$('.custom').css("background","rgba(0, 0, 0, 0.2)");
}

//Colors of each span pallet
var c1Color = "#333";
	c2Color = "#535353";
	c3Color = "#16a085";
	c4Color = "#54c28f";
	c5Color = "#3b6dd5";
	c6Color = "#5b95f5";
	c7Color = "#a527c6";
	c8Color = "#f8a645";
	c9Color = "#f3894e";
	c10Color = "#e05a4c";

var colorSwitch = 'rgb(138, 85, 103)';

//Spans of the pallet of color
//it returns to the colored theme
function palletColors() {
	$('#circle').fadeIn('fast');
	$('#i1').attr("src","media/1.svg");
	$('#i2').attr("src","media/2.svg");
	$('#i3').attr("src","media/3.svg");
	$('#i4').attr("src","media/4.svg");
	$('#i5').attr("src","media/5.svg");
	$('.classic .switch div').animate({right: 0},200);
	$('.classic .switch').css('background-color','rgba(0, 0, 0, 0.1)');
	$('.custom').css("background","rgba(0, 0, 0, 0.2)");
}

//Variable that change the clocks
function clock1(color) {
	$('.t24 .switch div').animate({right: '-20px'},300);
	$('.t24 .switch').css('background-color', color);
	$('#clock').fadeOut('fast');
	$('#ur').fadeIn('fast');
	$('.t24').addClass('off');
	$('.t24').removeClass('on');
}
function clock2(){
	$('.t24 .switch div').animate({right: '0'},300);
	$('.t24 .switch').css('background-color','rgba(0, 0, 0, 0.1)');
	$('#clock').fadeIn('fast');
	$('#ur').fadeOut('fast');
	$('.t24').addClass('on');
	$('.t24').removeClass('off');
}


/*----------------------------1.1 - Scripts-------------------------------------*/

$(document).ready(function() {
	$('#ur, #clock').addClass('animated bounce');

	//Gear button to open the configurations
	$('#settings').click(function() {
		if ($('#settings').hasClass('show'))
		{
			$('#settings').addClass('hide');
			$('#settings').removeClass('show');
			$('#configuration').animate({
				top: 200
			}, 250);
			$('#ur').animate({
				top: 155
			}, 250);
			$('#clock').animate({
				top: 160
			}, 250);
		}
		else {
			$('#settings').addClass('show');
			$('#settings').removeClass('hide');
			$('#configuration').animate({
				top: 442
			}, 250);
			$('#ur').animate({
				top: 200
			}, 250);
			$('#clock').animate({
				top: 206
			}, 250);
		}
	});
    
    //Alarm page action script
	$('#alarm').click(function() {
		if ($('#alarm').hasClass('show'))
		{
			$('#alarm-settings').fadeIn(400);
			$('#alarm').removeClass('show');
			$('#alarm').addClass('hide');
			$('#settings').css('z-index','98');
		}
		else {
			$('#alarm-settings').fadeOut(400);
			$('#alarm').addClass('show');
			$('#alarm').removeClass('hide');
			$('#settings').css('z-index','100');
			$('#alarm-settings').fadeOut(400);
		}
	});



	//Color changes
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function() {
		if ($(this).hasClass("c1")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c1Color);
			$('.c1 img').css('display','block');
			$('.c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c1Color);
            }
		} else if ($(this).hasClass("c2")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c2Color);
			$('.c2 img').css('display','block');
			$('.c1 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c2Color);
            }
		} else if ($(this).hasClass("c3")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c3Color);
			$('.c3 img').css('display','block');
			$('.c1 img, .c2 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c3Color);
            }
		} else if ($(this).hasClass("c4")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c4Color);
			$('.c4 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c4Color);
            }
		} else if ($(this).hasClass("c5")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c5Color);
			$('.c5 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c5Color);
            }
		} else if ($(this).hasClass("c6")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c6Color);
			$('.c6 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c6Color);
            }
		} else if ($(this).hasClass("c7")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c7Color);
			$('.c7 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c8 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c7Color);
            }
		} else if ($(this).hasClass("c8")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c8Color);
			$('.c8 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c9 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c8Color);
            }
		} else if ($(this).hasClass("c9")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c9Color);
			$('.c9 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c10 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c9Color);
            }
		} else if ($(this).hasClass("c10")) {
			$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c10Color);
			$('.c10 img').css('display','block');
			$('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img').css('display','none');
            if ($('.t24').hasClass('off')) {
                clock1(c10Color);
            }
		}
	});

	//Change the classic to colored theme behavior
	$('#pallet-color span').click(function() {
		palletColors();
	});

	//Classic button
	$('.classic').click(function() {
		backToClassic();
        if ($('.t24').hasClass('off')) {
            clock1(colorSwitch);
        }
	});
	 
    //Custom Button
    function changeColor(choosenColor){
        $('.custom').css("background","rgba(0, 0, 0, 0.3)");
        $('#circle').fadeIn('fast');
        $('#i1').attr("src","media/1.svg");
        $('#i2').attr("src","media/2.svg");
        $('#i3').attr("src","media/3.svg");
        $('#i4').attr("src","media/4.svg");
        $('#i5').attr("src","media/5.svg");
        $('.classic .switch div').animate({right: 0},300);
        $('.classic .switch').css('background-color','rgba(0, 0, 0, 0.1)');
        $('#animation, #circle, #alarm-settings, .alarm-popup').css("background",choosenColor);
        $('.c1 img, .c2 img, .c3 img, .c4 img, .c5 img, .c6 img, .c7 img, .c8 img, .c9 img, .c10 img').css('display','none');
        $('.custom').css('background','rgba(0, 0, 0, 0.4)');
    }
    
	$('.custom').click(function() {
		var color = prompt("Put the whole Hexadecimal code of your favourite color (with sharp #) ! \nHow about #bada55 ?");
		colorcode_validate(color);
		function colorcode_validate(choosenColor) {
			var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;

		if (choosenColor === null){
			//If the user enters clicks "Cancel", do nothing
		} else if (choosenColor === ''){
			//If the user enters enters nothing but clicks "Ok", do nothing
		} else if(regColorcode.test(choosenColor) === false) {
			alert("The code you entered is invalid. \nVisit http://html-color-codes.info/ to get correct hexadecimal code of colors.");
		} else {
			changeColor(choosenColor);
			localStorage.setItem("CHOOSEN_COLOR", choosenColor);
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			if ($('.t24').hasClass('off')) {
				clock1(choosenColor);
			}
		}
		}
	});

    if (localStorage.getItem("CHOOSEN_COLOR")) {
        var savedColor = localStorage.getItem("CHOOSEN_COLOR");
        changeColor(savedColor);
        if ($('.t24').hasClass('off')) {
            clock1(savedColor);
        }
    }


	//Clock changing
	$('.t24').click(function() {
        var savedColor = localStorage.getItem("CHOOSEN_COLOR");

        if ($('.t24').hasClass('on')) {
            if (localStorage.getItem("c1") === 'true') {
                clock1(c1Color);
            }
            else if (localStorage.getItem("c2") === 'true') {
                clock1(c2Color);
            }
            else if (localStorage.getItem("c3") === 'true') {
                clock1(c3Color);
            }
            else if (localStorage.getItem("c4") === 'true') {
                clock1(c4Color);
            }
            else if (localStorage.getItem("c5") === 'true') {
                clock1(c5Color);
            }
            else if (localStorage.getItem("c6") === 'true') {
                clock1(c6Color);
            }
            else if (localStorage.getItem("c7") === 'true') {
                clock1(c7Color);
            }
            else if (localStorage.getItem("c8") === 'true') {
                clock1(c8Color);
            }
            else if (localStorage.getItem("c9") === 'true') {
                clock1(c9Color);
            }
            else if (localStorage.getItem("c10") === 'true') {
                clock1(c10Color);
            } 

            else if (localStorage.getItem("CHOOSEN_COLOR")) {
                clock1(savedColor);
            }

            else if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, CHOOSEN_COLOR') === null) {
                clock1(colorSwitch);
            }

        }
        
        else {
            clock2();
        }
		
	});


	
});


/*----------------1.2 - Alarm scripts and properties---------------------*/

$(document).ready(function() {

    $('.btn').click(function() {
		$('#alarm').addClass('hide');
		$('#alarm').removeClass('show');
		$('#alarm-settings').fadeOut('slow');
		$('.alarm-popup img').css('-webkit-animation','play 0.2s linear infinite alternate');
		$('.alarm-popup img').css('animation','play 0.2s linear infinite alternate');
		$('#settings').css('z-index','100');
		$('#alarm').fadeOut('fast');

		
		var alarmSeconds = $('.seconds input').val() * 1000;
		var alarmMinutes = $('.minutes input').val() * 60000;
		var alarmHours = $('.hours input').val() * 3600000;

		var timeLeft = alarmSeconds + alarmMinutes + alarmHours;

		var alarmSound = new Audio('media/alarm.ogg');

		var ring = function () {
			$('#alarm').css('display','none');

			setTimeout(function(){
				alarmSound.loop = true;
				alarmSound.play();

			},timeLeft);

			setTimeout(function(){
				$('.alarm-popup').css('display','block');

			},timeLeft);
		};

		if (timeLeft !== 0, timeLeft !== null) {
			ring();
		}

		$('.btn-close').click(function() {
			$('.alarm-popup').fadeOut('slow', function() {
				$('#alarm-settings').css('display','none');
			});
			$('#alarm').addClass('show');
			$('#alarm').css('display','block');
			$('.alarm-popup img').css('-webkit-animation','0');
			$('.alarm-popup img').css('animation','0');
			$('#alarm').fadeIn('fast');
			alarmSound.pause();
		});

	});
    
    
});



/*----------------------1.3 - localStorage scripts---------------------------*/

$(document).ready(function() {
	//Saving clock users preferences
    $(".t24").click(function() {
        if ($('.t24').hasClass('off')) {
            localStorage.setItem('clock2', 'true');
            localStorage.removeItem('clock1', 'true');
        } else {
            localStorage.setItem('clock1', 'true');
            localStorage.removeItem('clock2', 'true');
        }
    });
	
    if (localStorage.getItem("clock1") === "true") {
        if (localStorage.getItem("c1") === 'true') {
            clock1(c1Color);
        }
        else if (localStorage.getItem("c2") === 'true') {
            clock1(c2Color);
        }
        else if (localStorage.getItem("c3") === 'true') {
            clock1(c3Color);
        }
        else if (localStorage.getItem("c4") === 'true') {
            clock1(c4Color);
        }
        else if (localStorage.getItem("c5") === 'true') {
            clock1(c5Color);
        }
        else if (localStorage.getItem("c6") === 'true') {
            clock1(c6Color);
        }
        else if (localStorage.getItem("c7") === 'true') {
            clock1(c7Color);
        }
        else if (localStorage.getItem("c8") === 'true') {
            clock1(c8Color);
        }
        else if (localStorage.getItem("c9") === 'true') {
            clock1(c9Color);
        }
        else if (localStorage.getItem("c10") === 'true') {
            clock1(c10Color);
        }
        else if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
            clock1(colorSwitch);
        }
    } else if (localStorage.getItem("clock2") === "true") {		
        clock2();
    }

/*----------------------------------------------------------------------*/
	//Color Saving

	//Backing to normal
	$('.classic').click(function() {
		localStorage.removeItem('c1', 'true');
		localStorage.removeItem('c2', 'true');
		localStorage.removeItem('c3', 'true');
		localStorage.removeItem('c4', 'true');
		localStorage.removeItem('c5', 'true');
		localStorage.removeItem('c6', 'true');
		localStorage.removeItem('c7', 'true');
		localStorage.removeItem('c8', 'true');
		localStorage.removeItem('c9', 'true');
		localStorage.removeItem('c10', 'true');
		localStorage.removeItem("CHOOSEN_COLOR");
	});

	if (localStorage.getItem('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10') === null) {
		backToClassic();
	}

	//Colors
	$('.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10').click(function() {
		if ($(this).hasClass("c1")) {
			localStorage.setItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c2")) {
			localStorage.setItem('c2', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c3")) {
			localStorage.setItem('c3', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c4")) {
			localStorage.setItem('c4', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c5")) {
			localStorage.setItem('c5', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c6")) {
			localStorage.setItem('c6', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c7")) {
			localStorage.setItem('c7', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c8")) {
			localStorage.setItem('c8', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c9")) {
			localStorage.setItem('c9', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c10', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} if ($(this).hasClass("c10")) {
			localStorage.setItem('c10', 'true');
			localStorage.removeItem('c1', 'true');
			localStorage.removeItem('c2', 'true');
			localStorage.removeItem('c3', 'true');
			localStorage.removeItem('c4', 'true');
			localStorage.removeItem('c5', 'true');
			localStorage.removeItem('c6', 'true');
			localStorage.removeItem('c7', 'true');
			localStorage.removeItem('c8', 'true');
			localStorage.removeItem('c9', 'true');
			localStorage.removeItem("CHOOSEN_COLOR");
		} 

	});

	
	//Colors load
	if (localStorage.getItem("c1") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c1Color);
		palletColors();
		$('.c1 img').css('display','block');
	}
	if (localStorage.getItem("c2") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c2Color);
		palletColors();
		$('.c2 img').css('display','block');
	}

	if (localStorage.getItem("c3") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c3Color);
		palletColors();
		$('.c3 img').css('display','block');
	}

	if (localStorage.getItem("c4") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c4Color);
		palletColors();
		$('.c4 img').css('display','block');
	}

	if (localStorage.getItem("c5") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c5Color);
		palletColors();
		$('.c5 img').css('display','block');
	}

	if (localStorage.getItem("c6") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c6Color);
		palletColors();
		$('.c6 img').css('display','block');
	}

	if (localStorage.getItem("c7") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c7Color);
		palletColors();
		$('.c7 img').css('display','block');
	}

	if (localStorage.getItem("c8") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c8Color);
		palletColors();
		$('.c8 img').css('display','block');		
	}

	if (localStorage.getItem("c9") === 'true') {
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c9Color);
		palletColors();
		$('.c9 img').css('display','block');		
	}

	if (localStorage.getItem("c10") === 'true') {		
		$('#animation, #circle, #alarm-settings, .alarm-popup').css("background", c10Color);
		palletColors();
		$('.c10 img').css('display','block');
	}
    
	
});
