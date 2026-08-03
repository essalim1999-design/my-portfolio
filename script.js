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
// التحكم في قائمة الجوال (Hamburger Menu)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // تغيير الأيقونة بين الثلاث أسطر و X
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}

// إغلاق القائمة تلقائياً عند الضغط على أي رابط
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
});