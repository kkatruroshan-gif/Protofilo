const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
});

const phrases = ['digital experiences', 'useful products', 'creative solutions', 'new possibilities'];
const typed = document.getElementById('typed');
let phraseIndex = 0, charIndex = phrases[0].length, deleting = false;
function typeLoop() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    charIndex++;
    typed.textContent = current.slice(0, charIndex);
    if (charIndex >= current.length) { deleting = true; setTimeout(typeLoop, 1500); return; }
  } else {
    charIndex--;
    typed.textContent = current.slice(0, charIndex);
    if (charIndex <= 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
  }
  setTimeout(typeLoop, deleting ? 45 : 75);
}
setTimeout(typeLoop, 1700);

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
