<?php
/**
 * Phone Modal
 *
 * A modal window containing call buttons for all phone numbers that have been registered in the template settings.
 *
 * @package PbhsTheme
 */

?>
<div id="phoneModal" class="modal modal--simple fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<div class="modal-title h4">Office Numbers</div>
			</div>
			<div class="modal-body">
				<?php
				$output = null;
				foreach ( get_template_setting( 'offices', [] ) as $office ) {
					$phone_parts = pbhs_get_phone_types( $office['phone'] );
					$office_title = ! empty( $office['name'] ) ? "[OFFICE_NAME id='{$office['guid']}']" : "[CITY id='{$office['guid']}']";
					$output .= "<a class='btn btn-primary btn-block preserve-styles' href='tel:{$phone_parts[1]}'><strong>$office_title</strong><br />{$phone_parts[0]}</a>";
				}
				echo do_shortcode( $output );
				?>
			</div>
			<div class="modal-footer">

			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
