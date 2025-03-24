// Translation dictionary
const translations = {
    english: {
      pageTitle: "ID Kurd AI - Login",
      loginTab: "Login",
      registerTab: "Register",
      emailLabelLogin: "Email",
      emailPlaceholderLogin: "Enter your email",
      passwordLabelLogin: "Password",
      passwordPlaceholderLogin: "Enter your password",
      loginButton: "Log In to ID Kurd AI",
      forgotPassword: "Forgot your password?",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      emailLabelRegister: "Email",
      emailPlaceholderRegister: "Enter your email",
      passwordLabelRegister: "Password",
      passwordPlaceholderRegister: "Create a password",
      confirmPasswordLabel: "Confirm Password",
      confirmPasswordPlaceholder: "Re-enter your password",
      registerButton: "Join ID Kurd AI",
      logoText: "ID Kurd AI"
    },
    kurdish: {
      pageTitle: "ID Kurd AI - چوونەژوورەوە",
      loginTab: "چوونەژوورەوە",
      registerTab: "تۆمارکردن",
      emailLabelLogin: "ئیمەیڵ",
      emailPlaceholderLogin: "ئیمەیڵەکەت بنووسە",
      passwordLabelLogin: "وشەی نهێنی",
      passwordPlaceholderLogin: "وشەی نهێنی خۆت بنووسە",
      loginButton: "چوونەژوورەوە بۆ ID Kurd AI",
      forgotPassword: "وشەی نهێنیت لەبیرچووە؟",
      fullNameLabel: "ناوی تەواو",
      fullNamePlaceholder: "ناوی تەواوی خۆت بنووسە",
      emailLabelRegister: "ئیمەیڵ",
      emailPlaceholderRegister: "ئیمەیڵەکەت بنووسە",
      passwordLabelRegister: "وشەی نهێنی",
      passwordPlaceholderRegister: "وشەی نهێنی دروست بکە",
      confirmPasswordLabel: "دووبارەکردنەوەی وشەی نهێنی",
      confirmPasswordPlaceholder: "وشەی نهێنی دووبارە بکەوە",
      registerButton: "بەشداربوون لە ID Kurd AI",
      logoText: "ID Kurd AI"
    }
  };

  // Update language function
  function updateLanguage(lang) {
    document.title = translations[lang].pageTitle;
    document.querySelectorAll('[data-key]').forEach(el => {
      if(el.tagName === 'INPUT'){
        el.placeholder = translations[lang][el.getAttribute('data-key')];
      } else {
        el.textContent = translations[lang][el.getAttribute('data-key')];
      }
    });
  }

  // Switch between login and register tabs
  function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabIndicator = document.querySelector('.tab-indicator');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    if (tabId === 'register') {
      tabs[1].classList.add('active');
      tabContents[1].classList.add('active');
      tabIndicator.style.left = '50%';
    } else {
      tabs[0].classList.add('active');
      tabContents[0].classList.add('active');
      tabIndicator.style.left = '0';
    }
  }

  // Create floating particles
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 25 : 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }

  // Create AI data streams
  function createDataStreams() {
    const streamsContainer = document.getElementById('data-streams');
    const isMobile = window.innerWidth <= 768;
    const streamCount = isMobile ? 10 : 20;

    for (let i = 0; i < streamCount; i++) {
      const stream = document.createElement('div');
      stream.classList.add('data-stream');
      stream.style.left = `${Math.random() * 100}%`;
      stream.style.top = `${Math.random() * 100}%`;
      const rotation = Math.random() * 360;
      stream.style.transform = `rotate(${rotation}deg)`;
      stream.style.animationDelay = `${Math.random() * 3}s`;
      streamsContainer.appendChild(stream);
    }
  }

  // Handle window resize for particles and streams
  function handleResize() {
    document.getElementById('particles').innerHTML = '';
    document.getElementById('data-streams').innerHTML = '';
    createParticles();
    createDataStreams();
  }

  window.onload = function() {
    createParticles();
    createDataStreams();
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 250);
    });
  };