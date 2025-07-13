(function injectT4ToolbarIcons() {
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

    // Button config: [href, id, icon class, title, aria-label]
    const buttons = [
      ['group', 'group-management', 'fa fa-users', 'Group Management', 'Go to Group Management'],
      ['user', 'user-management', 'fa fa-user', 'User Management', 'Go to User Management'],
      ['mediaconfig#types', 'mediaconfig', 'fa fa-gear', 'Media Configuration', 'Go to the Media Configuration'],
      ['media', 'media-library', 'fa fa-image', 'Media Library', 'Go to the Media Library'],
    ];

    for (const [href, id, iconClass, title, aria] of buttons) {
      const li = document.createElement('li');
      li.classList.add('js-sta-inject');

      const a = document.createElement('a');
      a.href = href;
      a.id = id;
      a.className = 'ace-tooltip';
      a.setAttribute('title', title);
      a.setAttribute('aria-label', aria);

      const icon = document.createElement('i');
      icon.className = `ace-icon ${iconClass}`;

      a.appendChild(icon);
      li.appendChild(a);
      siteStructureLI.parentNode.insertBefore(li, siteStructureLI.nextSibling);
    }

    console.log("✅ Toolbar icons successfully auto-injected.");
  };

  tryInject();
})();
