

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav__toggle');
    const popupMenu = document.querySelector('.nav__popup');
    const closeBtn = document.querySelector('.nav__close');

    toggleBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (!popupMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            popupMenu.style.display = 'none'
        }
    });
});