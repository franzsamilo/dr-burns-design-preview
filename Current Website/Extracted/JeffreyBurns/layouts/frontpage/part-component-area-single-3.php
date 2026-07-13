<!-- ====== Appointment CTA Section ====== -->
<div class="pbhs-website-part part-home part-component-area-single schedule palette_a-1-bg container-fluid part-width-full has-bg-color part-type-component-area" id="part-component-area-single-3" role="region" aria-label="Content area containing: office phone information and popup contact form button #3">
  <div class="row">
    <div class="component-section-bg"></div>
    <div class="relative motion-container">
      <div class="container">
        <div class="row">
          <div class="component-area-main d-flex w-100 flex-md-row flex-sm-column flex-column align-items-center justify-content-around">

            <!-- Phone -->
            <div class="component-slot component-type-officePhone text-center">
              <div class="component-office-phone d-flex flex-column flex-sm-row align-items-center">
                <a class="component-office-phone-link" href="tel:15407408937">
                  <span class="sr-only">Jeffrey S. Burns DDS Office Phone Number</span>
                  <span class="component-office-pre-phone-text">Schedule an Appointment Today! Call</span>
                  <span class="component-office-phone-number">540-740-8937</span>
                </a>
              </div>
            </div>

            <!-- Appointment Button -->
            <div class="component-slot component-type-modalFormButton text-center">
              <a id="componentButton10"
                 class="btn btn-outline text-upper tr-modal__open"
                 href="#"
                 data-modal-target="#surveyModal"
                 aria-haspopup="dialog"
                 rel="nofollow">
                <span class="btn-title-wrap">Request an Appointment</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ====== Modal with Survey Embed ====== -->
<div id="surveyModal" class="tr-modal" role="dialog" aria-modal="true" aria-labelledby="surveyModalTitle" aria-describedby="surveyModalDesc" hidden>
  <div class="tr-modal__overlay" data-modal-close></div>

  <div class="tr-modal__dialog" role="document">
    <header class="tr-modal__header">
      <h2 id="surveyModalTitle" class="tr-modal__title">Request an Appointment</h2>
      <button class="tr-modal__close" type="button" aria-label="Close dialog" data-modal-close>&times;</button>
    </header>

    <div id="surveyModalDesc" class="tr-modal__body tr-modal__body--flush">
      <iframe src="https://schedule.jeffrey-burns.implant-services.com/widget/survey/uOZSrX8gMOfmQJAmCmNu"
              style="border:none;width:100%;height:100%;"
              scrolling="no"
              id="uOZSrX8gMOfmQJAmCmNu"
              title="survey"></iframe>
      <script src="https://schedule.jeffrey-burns.implant-services.com/js/form_embed.js"></script>
    </div>

  </div>
</div>

<script>
(() => {
  const SELECTORS = {
    open: '.tr-modal__open',             // any element that opens a modal
    overlay: '.tr-modal__overlay',       // click to close
    closeAttr: '[data-modal-close]',     // X button / footer close
    dialog: '.tr-modal__dialog'          // focus trap container
  };

  let activeModal = null;
  let lastFocused = null;

  const getFocusable = (root) =>
    root.querySelectorAll(
      'a[href],area[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
    );

  function openModal(modal){
    if(!modal) return;
    lastFocused = document.activeElement;

    // lock background scroll
    document.documentElement.style.overflow = 'hidden';

    // reveal and animate
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('is-open'));
    activeModal = modal;

    // focus first focusable or dialog
    const dialog = modal.querySelector(SELECTORS.dialog) || modal;
    const f = getFocusable(dialog);
    (f[0] || dialog).focus({preventScroll:true});
  }

  function closeModal(){
    if(!activeModal) return;

    activeModal.classList.remove('is-open');
    activeModal.hidden = true;
    activeModal = null;

    // restore scroll & focus
    document.documentElement.style.overflow = '';
    if(lastFocused && lastFocused.focus) lastFocused.focus({preventScroll:true});
  }

  // Delegated open
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest(SELECTORS.open);
    if(!trigger) return;
    e.preventDefault();
    const targetSel = trigger.getAttribute('data-modal-target');
    openModal(document.querySelector(targetSel));
  });

  // Delegated close (X, footer buttons, overlay)
  document.addEventListener('click', (e) => {
    if(!activeModal) return;
    if(e.target.closest(SELECTORS.closeAttr) || e.target.matches(SELECTORS.overlay)){
      e.preventDefault();
      closeModal();
    }
  });

  // ESC + Focus Trap
  document.addEventListener('keydown', (e) => {
    if(!activeModal) return;

    if(e.key === 'Escape'){
      e.preventDefault();
      closeModal();
      return;
    }

    if(e.key === 'Tab'){
      const dialog = activeModal.querySelector(SELECTORS.dialog) || activeModal;
      const focusables = Array.from(getFocusable(dialog))
        .filter(el => !el.hasAttribute('disabled') && el.tabIndex !== -1);

      if(!focusables.length) return;

      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      const current = document.activeElement;

      if(e.shiftKey && current === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && current === last){ e.preventDefault(); first.focus(); }
    }
  });

  // Optional API
  window.TrModal = {
    open: (sel) => openModal(document.querySelector(sel)),
    close: () => closeModal()
  };
})();
</script>

<script>
(function(){
  function sizeSurveyIframe() {
    const modal = document.getElementById('surveyModal');
    if (!modal || modal.hidden) return;

    const dialog = modal.querySelector('.tr-modal__dialog');
    const header = modal.querySelector('.tr-modal__header');
    const footer = modal.querySelector('.tr-modal__footer');
    const iframe = modal.querySelector('iframe');

    if (!dialog || !header || !footer || !iframe) return;

    // remaining space inside dialog for the iframe
    const available = dialog.clientHeight - header.offsetHeight - footer.offsetHeight;
    iframe.style.height = Math.max(360, available) + 'px';
  }

  // When the modal opens (class .is-open gets added in your script)
  const observer = new MutationObserver(sizeSurveyIframe);
  const modal = document.getElementById('surveyModal');
  if (modal) observer.observe(modal, { attributes: true, attributeFilter: ['class', 'hidden'] });

  // Recalculate on viewport resize
  window.addEventListener('resize', sizeSurveyIframe, { passive: true });

  // Also run after fonts load (sizes can change)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sizeSurveyIframe);
  }
})();
</script>
