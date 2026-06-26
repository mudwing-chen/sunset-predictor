const Theme = (() => {
  const KEY = 'siteTheme';
  function apply(dark) {
    if (dark) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); }
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }
  return {
    init() {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light') apply(false);
      else if (saved === 'dark') apply(true);
      else if (window.matchMedia('(prefers-color-scheme:dark)').matches) apply(true);
      else apply(false);
    },
    toggle() {
      const dark = document.documentElement.classList.toggle('dark');
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
      const btn = document.getElementById('themeBtn');
      if (btn) btn.textContent = dark ? '☀️' : '🌙';
    }
  };
})();
