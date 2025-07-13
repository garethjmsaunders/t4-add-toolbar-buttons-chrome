(function injectMediaLibraryIcon() {
  const tryInject = () => {
    const siteStructureLink = document.querySelector('a#site-structure');
    if (!siteStructureLink) {
      requestAnimationFrame(tryInject);
      return;
    }

    const siteStructureLI = siteStructureLink.closest('li');
    if (!siteStructureLI || siteStructureLI.nextElementSibling?.classList.contains('js-sta-inject')) {
      return;
    }

    const newLI = document.createElement('li');
    newLI.classList.add('js-sta-inject');

    const newA = document.createElement('a');
    newA.href = 'media';
    newA.id = 'media-library';
    newA.className = 'ace-tooltip';
    newA.setAttribute('title', 'Media Library');
    newA.setAttribute('aria-label', 'Go to the Media Library');

    const newIcon = document.createElement('i');
    newIcon.className = 'ace-icon fa fa-image';

    newA.appendChild(newIcon);
    newLI.appendChild(newA);

    siteStructureLI.parentNode.insertBefore(newLI, siteStructureLI.nextSibling);
    console.log("✅ Media Library icon successfully auto-injected.");
  };

  tryInject();
})();
