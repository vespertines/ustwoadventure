const lzy = (offset = 500) => {
    const images = document.querySelectorAll("[data-src]");
    const observer = new IntersectionObserver(onIntersection, {
        rootMargin: `${offset}px ${offset}px`,
        threshold: 0.01
    });
    const loadImage = imageEl => {
        imageEl.setAttribute("src", imageEl.getAttribute("data-src"));
        imageEl.removeAttribute("data-src");
    };
    images.forEach(image => observer.observe(image));
    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                loadImage(entry.target);
            }
        });
    }
};

const kebabCase = string => {
    return string.replace(/([a-z])([A-Z])/g, "$1-$2")
                 .replace(/[\s_]+/g, "-")
                 .replace(/&/g, "and")
                 .toLowerCase();
};

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};
