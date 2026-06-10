"use strict";

/**
 * Muestra la notificación toast en pantalla.
 * Obtiene el elemento con ID "toast-interactive" y agrega
 * la clase "md:block" para hacerlo visible.
 * @function
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Agrega un evento click al elemento con ID "demo".
 * Al hacer click, abre el video de YouTube en una nueva pestaña.
 * @function
 * @returns {void}
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo){
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        })
    }
};

(() => {
    showToast();
    showVideo();
})();

