<?php
/**
 * Searchable
 *
 * @package PbhsTheme
 */

wp_enqueue_script( 'pbhs-utility-searchable' );
?>
<form id="searchableForm" action="<?php echo esc_url( get_home_url() ); ?>" class="relative layer1 searchable-form"
      aria-label='Search Form'>
    <span role='status' class='sr-only searchable-form__status' aria-live='polite'></span>
    <input aria-label='Enter Search Term and press Enter to Search or press tab to read the list of suggestions'
           class="searchable-form__input block full-width" type="text" name="s" autocomplete="off"
           placeholder="Search"/>
    <div class="absolute full-width searchable-form__output"></div>
    <button class='fa fa-arrow-right'><span class='sr-only'>Search</span></button>
</form>
