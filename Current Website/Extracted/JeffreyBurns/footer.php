<?php
/**
 * Footer
 *
 * @package PbhsTheme
 */

?>
</div><!-- / #pageWrap -->
<?php
get_template_part('_parts/action-menu');
get_template_part('_parts/action-nav');
get_template_part('_parts/modals');
?>
<a href="#" class="scrollup hidden-xs" id="scrollup" aria-label='Scroll to top'><i class="fa fa-arrow-up"></i></a>
<?php wp_footer(); // Display WordPress Footer (footer scripts, admin bar). ?>
<script>
    document.addEventListener('click', function(event) {
        const target = event.target.closest('[data-mediabox]');
        if (target) {
            const url = target.getAttribute('data-mediabox');
            if (url) {
                window.location.href = url;
            }
        }
    });

</script>
<script>
    (function () {
        document.querySelectorAll('[data-pbhs-lazy-load-bg]').forEach((item) => {
            item.style.backgroundImage = `url(${item.getAttribute('data-pbhs-lazy-load-bg')})`;
        } )
    })();
</script>
<script>
    (function() {
        if(document.querySelectorAll('.testimonial-slide').length) {
            var testimonial_flick = new Flickity('.testimonial-slide', {
                accessibility: true,
                adaptiveHeight: false,
                autoPlay: false,
                cellAlign: 'center',
                cellSelector: '.testimonial-slide-inner',
                contain: true,
                draggable: true,
                dragThreshold: 8,
                freeScroll: false,
                friction: 0.3,
                groupCells: 1,
                initialIndex: 0,
                lazyLoad: false,
                percentPosition: false,
                prevNextButtons: false,
                pageDots: false,
                resize: true,
                rightToLeft: false,
                setGallerySize: true,
                watchCSS: false,
                wrapAround: true
            });
            var testimonialnav_flick = new Flickity('.testimonial-nav', {
                asNavFor: '.testimonial-slide',
                accessibility: true,
                adaptiveHeight: false,
                autoPlay: false,
                cellAlign: 'center',
                cellSelector: '.nav-slide',
                contain: true,
                draggable: true,
                dragThreshold: 8,
                freeScroll: false,
                friction: 0.3,
                groupCells: 1,
                initialIndex: 0,
                lazyLoad: false,
                percentPosition: false,
                prevNextButtons: false,
                pageDots: false,
                resize: true,
                rightToLeft: false,
                setGallerySize: true,
                watchCSS: false,
                wrapAround: false
            });
            jQuery('.testimonial-buttons .previous').unbind("click").on('click', function () {
                testimonial_flick.previous();
            });
            jQuery('.testimonial-buttons .next').unbind("click").on('click', function () {
                testimonial_flick.next();
            });

            jQuery(".testimonial-slide-inner").each(function (index) {
                $testimonial_flickity_image = jQuery(this).find('.video-container img');
                $testimonial_flickity_image.attr("srcset", $testimonial_flickity_image.attr("data-srcset"));
                $testimonial_flickity_image.attr("src", $testimonial_flickity_image.attr("data-src"));
            });
        }

        if(document.querySelectorAll('.apart-items').length) {
            var service_flick = new Flickity('.apart-items', {
                accessibility: true,
                adaptiveHeight: false,
                autoPlay: false,
                cellAlign: 'center',
                cellSelector: '.apart-item',
                contain: true,
                draggable: true,
                dragThreshold: 8,
                freeScroll: false,
                friction: 0.3,
                groupCells: 1,
                initialIndex: 0,
                lazyLoad: false,
                percentPosition: false,
                prevNextButtons: false,
                pageDots: false,
                resize: true,
                rightToLeft: false,
                setGallerySize: true,
                watchCSS: false,
                wrapAround: true
            });
            var servicenav_flick = new Flickity('.nav-items', {
                asNavFor: '.apart-items',
                accessibility: true,
                adaptiveHeight: false,
                autoPlay: false,
                cellAlign: 'center',
                cellSelector: '.nav-item',
                contain: false,
                draggable: true,
                dragThreshold: 8,
                freeScroll: true,
                friction: 0.3,
                groupCells: 1,
                initialIndex: 0,
                lazyLoad: false,
                percentPosition: false,
                prevNextButtons: false,
                pageDots: false,
                resize: true,
                rightToLeft: false,
                setGallerySize: true,
                watchCSS: false,
                wrapAround: true
            });
            jQuery('.part-content .buttons .previous').unbind("click").on( 'click', function() {
                service_flick.previous( );
            });
            jQuery('.part-content .buttons .next').unbind("click").on( 'click', function() {
                service_flick.next( );
            });

            var $carousel = jQuery('.apart-items').flickity();
            var $carouselStatus = jQuery('.carousel-status');
            var flkty = $carousel.data('flickity');

            function updateStatus() {
                if ( jQuery( ".carousel-status" ).length ) {

                    var cellNumber = flkty.selectedIndex + 1;
                    $carouselStatus.html( '<span class="cell-num">' +cellNumber.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + '</span> /' + flkty.slides.length  );

                }


            }
            updateStatus();
            $carousel.on( 'change.flickity', updateStatus );
        }
    })();
</script>
</body>
</html>
