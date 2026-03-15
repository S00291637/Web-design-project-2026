/**
 * Tipa shkola — Логика интерфейса
    * Автор: [Vladislav]
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Плавная прокрутка для навигационных ссылок
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Обработка кнопок (заглушки для действий)
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Кнопка нажата: переход к регистрации или форме обратной связи');
            // Здесь можно добавить открытие модального окна или переход на страницу контактов
        });
    });

    // 3. Анимация появления элементов при прокрутке (простой Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Применяем к карточкам в инфо-секции, если они есть
    document.querySelectorAll('.info-item, .price-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});