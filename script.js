document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'var(--accent-color)';
        link.style.color = 'var(--text-color)';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'var(--primary-color)';
        link.style.color = 'var(--text-light)';
      });
    });
  
    const ctas = document.querySelectorAll('.cta');
    ctas.forEach(cta => {
      cta.addEventListener('mouseover', () => {
        cta.style.transform = 'scale(1.1)';
      });
  
      cta.addEventListener('mouseout', () => {
        cta.style.transform = 'scale(1)';
      });
    });
  
    const cards = document.querySelectorAll('.about-card, .skill-card, .project-card, .education-card');
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
      });
  
      card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
      });
    });
  });
  