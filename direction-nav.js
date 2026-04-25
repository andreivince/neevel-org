window.addEventListener('DOMContentLoaded', () => {
    const options = [
        '/version1/',
        '/version2/',
        '/version3/',
        '/version4/',
        '/version5/',
        '/best/',
        '/style1/',
        '/style2/',
        '/style3/'
    ];

    const currentPath = window.location.pathname.endsWith('/')
        ? window.location.pathname
        : `${window.location.pathname}/`;
    const activeIndex = Math.max(0, options.indexOf(currentPath));

    const go = offset => {
        window.location.href = options[(activeIndex + offset + options.length) % options.length];
    };

    window.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') go(1);
        if (event.key === 'ArrowLeft') go(-1);
    });

    let touchStartX = 0;
    let touchStartY = 0;
    window.addEventListener('touchstart', event => {
        const touch = event.changedTouches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    }, { passive: true });

    window.addEventListener('touchend', event => {
        const touch = event.changedTouches[0];
        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;
        if (Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy) * 1.4) {
            go(dx < 0 ? 1 : -1);
        }
    }, { passive: true });
});
