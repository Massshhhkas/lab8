// Простой скрипт для сайта

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Подсветка активной ссылки в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Обработка формы контактов (если есть)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // В реальном проекте здесь был бы AJAX-запрос
            alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
            this.reset();
        });
    }
    
    // Анимация появления карточек
    const animateCards = () => {
        const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s, transform 0.5s';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    };
    
    // Вызываем анимацию при загрузке
    setTimeout(animateCards, 300);
    
    // Обновление года в футере
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement && yearElement.textContent.includes('2024')) {
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
    
    console.log('Сайт портфолио загружен!');
});