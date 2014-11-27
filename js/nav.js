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
var $bannerText = $('.banner-text');
var $bannerImg = $('.banner-img');

    $win.on('scroll', function() {
        var scrollPos = $win.scrollTop();

        $bannerText.css('margin-top', '' + scrollPos/3 + 'px');
        $bannerImg.css('top', '' + scrollPos/3 + 'px');
    });


var $facts = $('.facts');
var $factsWrap = $('.facts-wrap')
var $navBar = $('.nav-bar')


    $factsWrap.waypoint(function(direction) {
        if(direction =='down'){
            $facts.addClass('facts-sticky').css('top',$navBar.outerHeight())
            $factsWrap.addClass('facts-wrap-sticky')
        }else{
            $facts.removeClass('facts-sticky').css('top',0)
            $factsWrap.removeClass('facts-wrap-sticky')
        }
    },{offset:function(){
        return $navBar.outerHeight()
    }});