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


var $win = $(window);
var $aboutSection = $('.about');

    $win.on('scroll', function() {
        var scrollPos = $win.scrollTop();

        $aboutSection.css('margin-top', '-' + scrollPos/2 + 'px');

    });


var $facts = $('.facts');
var $factsWrap = $('.facts-wrap')

    $facts.waypoint(function() {
        $facts.toggleClass('facts-sticky')
        $factsWrap.toggleClass('facts-wrap-sticky')
    },{offset:'5.5em'});