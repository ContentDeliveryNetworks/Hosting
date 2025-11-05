(function() {
  // ===== MOBILE/TABLET DETECTION =====
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) <= 820;
  const isMobileOrTablet = isMobileUA || hasTouch || isSmallScreen;
  const onScanPage = window.location.pathname.includes('scan.html');

  if (!isMobileOrTablet && !onScanPage) {
    window.location.replace('/scan.html');
  }

  // ===== BACK BUTTON HELPER =====
  window.goBack = function() {
    if (document.referrer) window.history.back();
    else window.location.href = '/';
  };

  // ===== DISABLE CONTEXT MENU =====
  document.addEventListener('contextmenu', e => e.preventDefault());

  // ===== DISABLE KEYBOARD SHORTCUTS =====
  document.addEventListener('keydown', e => {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && ['c','s','u','C','S','U'].includes(e.key)) e.preventDefault();
    if (mod && e.shiftKey && ['I','J','i','j'].includes(e.key)) e.preventDefault();
  });

  // ===== COPY ATTRIBUTION =====
  document.addEventListener('copy', e => {
    const selection = document.getSelection();
    if (!selection) return;
    const text = selection.toString();
    if (!text) return;
    const attribution = "\n\n— Source: Callboys.app — Do not reuse without permission.";
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', text + attribution);
      e.preventDefault();
    }
  });

  // ===== DISABLE IMAGE DRAG =====
  document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  // ===== BLOCK CONSOLE ACCESS =====
  (function() {
    const devtools = /./;
    devtools.toString = function() {
      window.location.replace('/scan.html');
      return '';
    };
    console.log('%c', devtools);
  })();

})();
