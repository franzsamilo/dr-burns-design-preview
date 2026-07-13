/**
 * Initialize banner and custom features
 *
 * @param object $         -   global jQuery object
 * @param object Theme     -   global PbhsTheme object
 */
(function ($, Theme) {

  // Detect the primary container
  Theme.pageBanner = $('.slider', '#banner')

  // Exit if the container does not exists
  if (!Theme.pageBanner.length) return


  Theme.pageBanner.pbhsSlider({
    // @bannerImgWidth - Set by the common plugin, matches width set for $image_sizes['banner']|$image_sizes['banner_interior'] in _includes/config.php
    autoScaleSliderWidth: bannerImgWidth,
    // @bannerImgHeight - Set by the common plugin, matches height set for $image_sizes['banner']|$image_sizes['banner_interior'] in _includes/config.php
    autoScaleSliderHeight: bannerImgHeight,
    autoScaleSlider: true,
    autoPlay: {
      enabled: true,
      pauseOnHover: false,
      stopAtAction: false,
      delay: 5000
    },
    imageScaleMode: 'fill',
    imageScalePadding: 0,
    keyboardNavEnabled: true,
    arrowsNav: false,
    loop: true,
    transitionType: 'fade',
    transitionSpeed: 1200,
    globalCaption: false,
    randomizeSlides: false,
    numImagesToPreload: 1
  })

  // Get the current banner slide
  Theme.pageBannerSlide = Theme.pageBanner.data('pbhsSlider').currSlide

  // Vertically centers the content for the current banner slide
  Theme.centerPbhsSliderABlock = function () {
    var slide = this.pageBannerSlide
    if (slide.animBlocks.length && slide.content.hasClass('pbhs-slider-vertical-align-content')) {
      slide.animBlocks.css('margin-top', (slide.content.height() - slide.animBlocks.outerHeight()) / 2)
    }
  }

  // Update the current banner slide and vertically center the content when pbhsSlider transitions banner slides
  Theme.pageBanner.data('pbhsSlider').ev.on('pbhsSliderAfterSlideChange', function (event) {
    Theme.pageBannerSlide = event.target.currSlide
    Theme.centerPbhsSliderABlock()
  })

  // Update the current banner slide and vertically center the content when pbhsSlider transitions banner slides
  Theme.pageBanner.data('pbhsSlider').ev.on('pbhsSliderAfterContentSet', function (event, slide) {
    var img = slide.holder.find('img').eq(0)
    if (img && img.length && !img.attr('alt')) {
      if (slide.caption) {
        img.attr('alt', slide.caption.text())
      } else {
        img.attr('alt', '')
      }
      if(img.attr('alt') === '') {
        img.attr('role', 'presentation')
      }
    }
  })

  // Reprocess vertical alignment on window resizing
  Theme.addAction('responsive', 'centerPbhsSliderABlock')

  Theme.videoSlides = []
  Theme.wistiaSetFullHeight = function (slide) {
    var sliderHeight = PbhsTheme.pageBanner.height()
    var sliderWidth = PbhsTheme.pageBanner.width()
    if (typeof slide.wistia === 'undefined') {
      return
    }
    if (typeof slide.wistia.data === 'undefined') {
      return
    }
    if (typeof slide.wistia.data.media === 'undefined') {
      return
    }
    if (!slide.wistia.data.media.assets.length) {
      return
    }
    var videoWidth = slide.wistia.data.media.assets[0].width
    var videoHeight = slide.wistia.data.media.assets[0].height
    var aspectRatio = videoWidth / videoHeight

    slide.holder.addClass('wistia-sized')
    var newWidth = sliderHeight * aspectRatio
    if (newWidth >= sliderWidth) {
      slide.holder.width(newWidth)
      slide.holder.height(sliderHeight)
    } else {
      slide.holder.width(sliderWidth)
      var newHeight = sliderWidth / aspectRatio
      slide.holder.height(newHeight)
    }

    slide.holder.addClass('wistia-sized')
  }

  $(window).on('wistiaEmbedComplete', function (event) {
    Theme.wistiaSetFullHeight(event.slide)
    Theme.videoSlides.push(event.slide)
    Theme.addAction('responsive', 'responsiveFitWistia')
  })

  Theme.responsiveFitWistia = function () {
    $.each(Theme.videoSlides, function (index, value) {
      Theme.wistiaSetFullHeight(value)
    })
  }

})(jQuery, PbhsTheme)