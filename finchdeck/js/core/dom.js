export const createElement = (tag, classNames = [], children = [], attributes = {}, eventListeners = {}) => {
    const element = document.createElement(tag);
    if (classNames.length) element.className = classNames.join(' ');
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    children.forEach(child => {
        if (child === null) return;
        if (typeof child === 'string') {
            element.innerHTML += child;
        } else {
            element.appendChild(child);
        }
    });
    for (const event in eventListeners) {
        element.addEventListener(event, eventListeners[event]);
    }
    return element;
};
