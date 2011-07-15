
Cufon.replace('.font-replace', { fontFamily: 'Myriad Pro Regular', hover: true });
Cufon.replace('.font-replace-shadow', { fontFamily: 'Myriad Pro Semibold', textShadow: '1px 1px 1px #333', hover: true });
Cufon.replace('h1', { fontFamily: 'Myriad Pro Semibold', textShadow: '1px 1px 2px #333', hover: true });

$(function(){
    $('input[placeholder], textarea[placeholder]').placeholder();
    
    $('div#banner-slider').cycle({
		fx: 'fade',
		speed: '1500',
		easing: 'easeInOutExpo',
		timeout: 7000
	}); 
});

Cufon.now();