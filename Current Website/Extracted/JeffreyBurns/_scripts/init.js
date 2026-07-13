
(function ($, PbhsTheme) {
  /**
   *  @action_sets: - All Action sets are fired on Document Ready to initialize default functionality
   *      ready         - Fires on Document Ready Only
   *      fontLoad      - Fires after Web Fonts have Loaded
   *      responsive    - Fires on Window Load and Resize
   *      scroll        - Fires on Window Scroll
   *
   *  Use PbhsTheme.addAction(action, fn, beforeExistingFn); to register functions to action sets
   *  @documentation  - https://revenuewell.atlassian.net/wiki/spaces/WDD/pages/3040149527/PbhsTheme+Object#Functions
   *                  - https://revenuewell.atlassian.net/wiki/spaces/WDD/pages/3040149527/PbhsTheme+Object#Using-Action-Sets
   *
   *  -----------------------------------------------------------------------------------------------
   *
   *  See online documentation for more information about each section in this file
   *  @documentation  - https://revenuewell.atlassian.net/wiki/spaces/WDD/pages/3041034241/Default+init.js
   */

  // Fix for the 'body' attribute since PbhsTheme is getting loaded in the head and the body element does not exist yet
  PbhsTheme.body = $('body')

  //  Start: Link Behavior
  PbhsTheme.links = $('a')
  PbhsTheme.links.filter('[rel=tooltip]').tooltip()
  PbhsTheme.links.filter('[rel=popover]').popover().click(function (e) { e.preventDefault() })
  //  End: Link Behavior

  //  Start: Main Navigation Controls
  PbhsTheme.sfActive = true
  //  Superfish parameters
  PbhsTheme.sfSettings = {
    cssArrows: true,
    onInit: function () { $(this).find('.children').css({display: 'none'}) }
  }
  PbhsTheme.nav = $('#nav')
  PbhsTheme.navParent = PbhsTheme.nav.parent()
  PbhsTheme.navWrap = PbhsTheme.nav.closest('.nav-wrap')
  //  Change between Desktop and Mobile Style Menus
  PbhsTheme.setNavigationState = function () {
    if (this.viewPort.width < 768 && this.sfActive) {
      this.sfActive = false
      this.nav.superfish('destroy')
      this.navParent.removeClass('table-nav')
      this.navParent.removeClass('flex-nav')
      this.navWrap.removeClass('sf-active')
      window.PbhsActionMenu.activate()
    } else if (this.viewPort.width > 767 && !this.sfActive) {
      this.sfActive = true
      this.nav.superfish(this.sfSettings)
      this.navParent.addClass('table-nav')
      this.navParent.addClass('flex-nav')
      this.navWrap.addClass('sf-active')
      window.PbhsActionMenu.deactivate()
    }
  }
  PbhsTheme.addAction('responsive', 'setNavigationState')
  //  Initialize Superfish
  PbhsTheme.nav.superfish(PbhsTheme.sfSettings)
  //  Force .sfHover class for menu items without submenues
  PbhsTheme.nav.find('a:not(.sf-with-ul)').hover(
    function () { if (PbhsTheme.sfActive) { $(this).parent().superfish('show') } },
    function () { if (PbhsTheme.sfActive) { $(this).parent().superfish('hide') } }
  )
  // End: Main Navigation Controls

  // Start: Assign Font Loaders
  // Menu fit not necessary with table/flex nav css
  /*
  PbhsTheme.menuFit = function() {
      PbhsTheme.navParent.menuFit();
  };
  PbhsTheme.addAction('fontLoad', 'menuFit');
  */
  PbhsTheme.scaleFonts = function () {
    $('#practice').scaleFont({min: 20})
  }
  PbhsTheme.addAction('fontLoad', 'scaleFonts')
  //  End: Assign Font Loaders

  //  Start: Logo Sibling Offset
  PbhsTheme.logo = $('#client-logo')
  if (PbhsTheme.logo.length) {
    PbhsTheme.logoOffsets = PbhsTheme.logo.siblings('.offset-client-logo')
    if (PbhsTheme.logoOffsets.length) {
      PbhsTheme.doLogoOffsets = function () {
        this.logoOffsets.css('margin-left', '')

        if (this.viewPort.width > 767) {
          this.logoOffsets.css('margin-left', this.logo.outerWidth(true))
          var fontScalers = $('.sf-scaled', this.logoOffsets)
          fontScalers.each(function () { $(this).data('scaleFont').scale() })
        }
      }
      PbhsTheme.addAction('responsive', 'doLogoOffsets')
    }
  }
  //  End: Logo Sibling Offset

  //  Start: Hardcode Height
  PbhsTheme.hardHeights = $('.hard-height')
  if (PbhsTheme.hardHeights.length) {
    PbhsTheme.hardCodeHeight = function () {
      this.hardHeights.css('height', '')

      if (this.viewPort.width > 767) {
        this.hardHeights.each(function () { $(this).css('height', $(this).outerHeight()) })
      }
    }
    PbhsTheme.addAction('responsive', 'hardCodeHeight')
  }
  /**
   *  @_css/theme.css :
   .hard-height > [class*='col-'] {
                    min-height: 100%;
                }
   */
  //  End: Hardcode Height

  //  Start: Scroll Top Button
  PbhsTheme.scrollTopButton = $('#scrollup')
  if (PbhsTheme.scrollTopButton.length) {
    PbhsTheme.scrollTopButtonState = false
    PbhsTheme.manageScrollTopButton = function () {
      if (this.scrollTop > 100 && !this.scrollTopButtonState) {
        this.scrollTopButtonState = true
        this.scrollTopButton.stop().fadeIn()
      } else if (this.scrollTop <= 100 && this.scrollTopButtonState) {
        this.scrollTopButtonState = false
        this.scrollTopButton.stop().fadeOut()
      }
    }
    PbhsTheme.addAction('scroll', 'manageScrollTopButton')
    PbhsTheme.scrollTopButton.click(function (e) {
      e.preventDefault()
      $('html, body').animate({scrollTop: 0}, 600)
    })
  }
  //  End: Scroll Top Button

  PbhsTheme.body.on('click', '[data-modal]', function () {
    var modalElement = $('#' + $(this).data('modal'))
    modalElement.modal('show')
  })

  PbhsTheme.loadScript = function (src, callback) {
    var js = document.createElement('script')
    js.src = src
    js.onload = function () {
      if (callback) {
        callback()
      }
    }
    js.onerror = function () {
      console.error('failed to load script')
    }
    document.head.appendChild(js)
  }



})(jQuery, window.PbhsTheme)
/* --- DO NOT ADD SCRIPT BELOW THIS POINT --- */
