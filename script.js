const themeToggleBtn = document.getElementById('theme-toggle');

// 1. التحقق من التفضيل المحفوظ سابقاً أو تفضيل النظام
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} else if (systemPrefersDark) {
  document.documentElement.setAttribute('data-theme', dark);
} else {
  document.documentElement.setAttribute('data-theme', 'dark'); // Default to dark for this identity
}

// 2. دالة التبديل عند الضغط
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = 'light';

  if (currentTheme === 'light') {
    newTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});