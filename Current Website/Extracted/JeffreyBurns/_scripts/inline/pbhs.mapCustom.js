/**
 * Register an observer and init map when scrolled into view.
 * this example uses lat and lng to get information but place ids can also be used.
 */
(function (theme, mapInstanceData) {
  window.PbhsMapInstances = window.PbhsMapInstances || []
  theme.intersectionFunctions = theme.intersectionFunctions || {}
  theme.customMap = null

  theme.intersectionFunctions['map'] = function (entry) {
    if (entry.intersectionRatio >= 0.5) {
      window.PbhsMapInstances.push(mapInstanceData)
      entry.target.parentNode.removeChild(entry.target)
    }
  }

  window.addEventListener('load', function () {
    setTimeout(function () {
      PbhsMaps.configure()
    }, 5000)
  })
})(window.PbhsTheme, mapCustomOptions)