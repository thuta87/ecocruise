// JavaScript Document
(function($) {

	$(".appear-wrapper").each(function(index, element) {
      $(".appear-content , .appear-delay .delay-content").css({opacity: 0 , top: 20 , right: 0 , left: 0});
      $(".appear-delay .delay-content.from-left").css({opacity: 0 , top: 0 , right: 0 , left: -20});
      $(".appear-delay .delay-content.from-right").css({opacity: 0 , top: 0 , right: 0 , left: 20});
      $(".appear-delay .delay-content.fadein").css({opacity: 0 , top: 0 , right: 0 , left: 0});
		var
			$window = $(window),
			$wrapper = $(element);

		function scrollDetail() {
			var
				speed = 1000;

				$window.off("scroll", scrollListener);
				$(".appear-content", $wrapper)
					.animate({
						top: (0) + "px",
						opacity: '1'
					}, speed);
          
                $(".appear-delay .delay-content", $wrapper).each(function(i){
                  $(this).delay(i*(800));
                  
                  if ( $(this).is(".from-left") ) {
                    
                    $(this).animate({
                      left: (0) + "px",
                      opacity: '1'
                    }, speed);
                    
                  } else if ( $(this).is(".from-right") ) {
                    
                    $(this).animate({
                      left: (0) + "px",
                      opacity: '1'
                    }, speed);
                  
                  } else if ( $(this).is(".fadein") ) {
                    
                    $(this).animate({
                      opacity: '1'
                    }, speed);
                    
                  } else {
                    
                    $(this).animate({
                      top: (0) + "px",
                      opacity: '1'
                    }, speed);
                    
                  }
                });
		}
		
		function scrollListener() {
			var
				wrapper_top = $wrapper.offset().top,
				window_height = $window.height(),
				show_offset = wrapper_top - window_height / 3 * 2,
				scrollHeight = $(document).height(),
				scrollPosition = $window.height() + $window.scrollTop();

			if ($window.scrollTop() > show_offset) {
				scrollDetail();
			}
			
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
				scrollDetail();
			}
		}

		$window.on("load scroll", scrollListener);
	});
})(jQuery);