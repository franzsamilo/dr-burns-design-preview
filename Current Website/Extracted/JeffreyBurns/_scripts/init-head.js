// Add ie10 class to html tag for IE 10 browsers
if (Function('/*@cc_on return document.documentMode===10@*/')()) {document.documentElement.className += ' ie10'} //Detects IE10 and adds class

var googleFonts = 'Amiri:400,700,700i|Montserrat:400,400i,500,500i,600';

if (typeof(googleFonts) != 'undefined') {
  //Load Google Fonts
  var fonts = googleFonts.indexOf('|') != -1 ? googleFonts.split('|') : [googleFonts]
  WebFontConfig = {
    google: {
      families: fonts
    },
    active: function () {
    }
  };
  (function () {
    var wf = document.createElement('script')
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
    wf.type = 'text/javascript'
    wf.async = 'true'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(wf, s)
  })()
}