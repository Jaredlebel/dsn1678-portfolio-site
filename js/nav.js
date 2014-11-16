// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
		
		}
	});

var $quoteSection = $('.quote-section');

$win.on('scroll', function() {
    var scrollPos = $win.scrollTop();
    
    $quoteSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});