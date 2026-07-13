(function () {
    window['PbhsUtilityScrollTriggersData'] = {
        'inView': function (entry) {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('in-view')
            }
        },
        'testimonialsInView': function (entry) {
            if (entry.intersectionRatio > 0) {

            }
        },
      'apartItemsInView': function (entry) {
        if (entry.intersectionRatio > 0) {


        }
      }
    }
    window['PbhsUtilityScrollTriggersOptions'] = {
        triggers: window['PbhsUtilityScrollTriggersData'],
        triggerAttribute: 'data-scroll-trigger',
        options: {
            threshold: [0, 0.5],
            rootMargin: '150px 0px'
        }
    }
})()