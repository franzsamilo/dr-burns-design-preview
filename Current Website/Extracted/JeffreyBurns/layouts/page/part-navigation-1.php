<div class="pbhs-website-part part-home part-navigation palette_c-1-bg    container-fluid part-width-full has-bg-color" id="part-navigation-1" data-motion-id="part-navigation-1"><div class="row">         <div id="actionNav" class="nav-wrap sf-active">
 
	
	<nav class="menu table-nav flex-nav clearfix container padding-horz-none action-panel__nav" role="navigation">
		<?php
		wp_nav_menu(array(
			'theme_location' => 'main_menu', // register this location in functions.php
			'menu_class'     => 'main-menu sf-menu full-width-xs',
			'container'       => false,
			'depth'           => 3, // or use 0 for unlimited depth
			'fallback_cb'     => false
		));
		?>
		
		<?php
		wp_nav_menu(array(
			'theme_location'  => 'main_menu', // Make sure this is registered
			'menu_class'      => 'main-menu1 sf-menu full-width-xs',
			'container'       => false, // Prevents extra <div>
			'fallback_cb'     => false, // Avoids showing default pages if no menu assigned
			// Optional: You can use a custom walker here if needed
		));
		?>
	</nav>
	 

 

        </div>

        <script>
            !function(e){window.onscroll=function(){window.pageYOffset>t&&768<e(window).width()?i.classList.add("sticky"):i.classList.remove("sticky")};var i=document.getElementById("pageWrap"),t=253;1200<e(window).width()&&(t=83)}(jQuery,PbhsTheme);        </script>

    </div>
</div>

<script>
jQuery(document).ready(function($) {
    const $desktopMenuItems = $('.main-menu li.menu-item-has-children > a');
    const $mobileMenuItems = $('.main-menu1 li.menu-item-has-children > a');

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function initDesktopMenu() {
        $('.main-menu li.menu-item-has-children').hover(
            function() {
                $(this).children('.sub-menu').stop(true, true).slideDown(200);
            },
            function() {
                $(this).children('.sub-menu').stop(true, true).slideUp(200);
            }
        );
    }

    function initMobileMenu() {
        $mobileMenuItems.on('click touchstart', function(e) {
            const $parent = $(this).parent();
            if (!$parent.hasClass('submenu-open')) {
                e.preventDefault();
                $('.main-menu1 li.submenu-open').removeClass('submenu-open').children('.sub-menu').slideUp(200);
                $parent.addClass('submenu-open');
                $parent.children('.sub-menu').slideDown(200);
            } else {
                window.location.href = $(this).attr('href');
            }
        });
    }

    if (isMobile()) {
        initMobileMenu();
    } else {
        initDesktopMenu();
    }
});

</script>



<style>
@media (min-width:768px) {     
    .main-menu1 {         
        display: none !important;     
    }
}	
@media (max-width:768px) {     
    ul#menu-main-menu {         
        display: none !important;     
    }
}


@media (max-width: 768px) {
	.main-menu1 .sub-menu {
		display: none;
	}

	.main-menu1 li.submenu-open > .sub-menu {
		display: block;
	}

	/* Optional: add indicator arrow */
 
    .main-menu1 li.menu-item-has-children > a::after {
        content: ' ▼';
        font-size: 15px;
        margin-left: 5px;
        right: 20px;
        position: absolute;
    }
 

	ul#menu-main-menu-1 {
    flex-direction: column;
    text-align: left;
    gap: 30px;
	     
	}
	ul#menu-main-menu-1 li a {
	    font-weight:500;
	    font-size: 20px;
	}
	html .flex-nav>ul>li {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1 1 100%;
	    -ms-flex: 1 1 100%;
	    flex: 1 1 100%;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    text-align: center;
	    list-style: none;
	    height: 100%;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: column;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    -ms-flex-pack: center;
	    justify-content: center;
	    position: relative;
	    align-content: flex-start;
	    align-items: flex-start;
	}
	.sf-active .sf-menu ul
	Specificity: (0,2,1)
	{
		background: rgba(62, 62, 62, 0.9);
		padding-top: 17px;
		padding-bottom: 37px;
		width: 100%;
		z-index: 999;
		position: relative;
	}
}	
</style>