/**
 * Even out the heights of featured page titles and descriptions for even vertical alignment.
 */
(function( $, Theme ) {

    // Detect the primary container
    Theme.featured = $('#featured');

    // Exit if the container does not exists
    if(!Theme.featured.length) return;

    // Find all needed elements
    Theme.buckets = $('.bucket', Theme.featured);
    Theme.bucketDescriptions = $('.bucket-text', Theme.buckets);
    Theme.bucketTitles = $('.bucket-title', Theme.buckets);

    Theme.evenBucketHeights = function() {
        var descHeight = 0,
            titleHeight = 0;

        // Reset all heights to auto so we can find the new heighest cell
        this.bucketDescriptions.css('height', '');
        this.bucketTitles.css('height', '');

        this.bucketDescriptions.each(function() {
            descHeight = Math.max( $(this).height(), descHeight );
        });

        this.bucketTitles.each(function() {
            titleHeight = Math.max( $(this).height(), titleHeight );
        });

        this.bucketDescriptions.css('height', descHeight);
        this.bucketTitles.css('height', titleHeight);
    };

    // Run once now
    Theme.evenBucketHeights();

    // Rerun the action when the window is resized
    Theme.addAction('responsive', 'evenBucketHeights');

})( jQuery, PbhsTheme );