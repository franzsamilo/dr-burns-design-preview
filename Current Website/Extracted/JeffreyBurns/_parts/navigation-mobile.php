<?php
/**
 * Mobile Navigation
 *
 * Displays phone link, practice name, and menu control at the top of the page on xs screens.
 *
 * @package PbhsTheme
 */

$phone = pbhs_get_phone();
$offices_count = count( get_template_setting( 'offices' ) );

?>
<div id="mobileMenu" class="nav-mobile-wrap clearfix bg-color-dark visible-xs">
	<button class="menu-control" aria-controls='actionNavMobileContainer' aria-expanded='false'>
		<i class="fa fa-bars"></i>
		<span class='sr-only'>Open Menu</span>
	</button>
	<span class="action-links pull-right text-right">
		<?php if ( $offices_count > 1 ) : ?>
			<a class="phone-link" href="#phoneModal" data-toggle="modal" data-target="#phoneModal">
				<i class="fa fa-phone"></i>
				<span class='sr-only'>Open Phone Menu</span>
			</a>
		<?php else : ?>
			<a class="phone-link" href="tel:<?php echo $phone[1]; // WPCS: XSS ok. ?>">
				<i class="fa fa-phone"></i>
				<span class='sr-only'>Call <?php echo do_shortcode( '[CITY], [STATE]' ); ?> Office Phone Number </span>
			</a>
		<?php endif; ?>
		</span>
   
</div>