document.addEventListener('wheel', function (e) {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (
      e.key === '+' || e.key === '-' || e.key === '=' || 
      e.code === 'NumpadAdd' || e.code === 'NumpadSubtract')) {
    e.preventDefault();
  }
});