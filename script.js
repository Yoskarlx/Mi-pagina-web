function showDetails(device) {
    const detailsContent = document.getElementById('details-content');
    let content = '';

    if (device === 'iPhone 16') {
        content = `
            <h2>iPhone 16</h2>
            <p>El iPhone 16 ofrece un rendimiento impresionante con su chip A17 Bionic. Su pantalla Super Retina XDR y las cámaras de 48MP te permiten capturar todo en alta definición.</p>
            <a href="#" class="btn">Comprar ahora</a>
        `;
    } else if (device === 'Samsung Galaxy S24') {
        content = `
            <h2>Samsung Galaxy S24</h2>
            <p>Con una pantalla Dynamic AMOLED 2X, cámara de 200MP y una batería optimizada, el Galaxy S24 es una opción increíble para quienes buscan innovación.</p>
            <a href="#" class="btn">Comprar ahora</a>
        `;
    } else if (device === 'Xiaomi 14 Ultra') {
        content = `
            <h2>Xiaomi 14 Ultra</h2>
            <p>Potente rendimiento con el procesador Snapdragon 8 Gen 3, cámara Leica y carga rápida de 120W hacen del Xiaomi 14 Ultra un competidor fuerte en el mercado.</p>
            <a href="#" class="btn">Comprar ahora</a>
        `;
    }

    detailsContent.innerHTML = content;
    document.getElementById('device-details').style.display = 'block';
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const menu = item.getAttribute('data-menu');
        const submenuContainer = document.querySelector('.submenu-container');
        const submenus = document.querySelectorAll('.submenu');

        // Ocultar todos los submenús
        submenus.forEach(submenu => submenu.classList.remove('active'));

        // Mostrar el contenedor del submenú
        submenuContainer.classList.add('active');

        // Mostrar el submenú correspondiente
        const activeSubmenu = document.querySelector(`.submenu[data-menu="${menu}"]`);
        if (activeSubmenu) activeSubmenu.classList.add('active');
    });
});

// Ocultar el submenú cuando el mouse sale del contenedor
document.querySelector('.submenu-container').addEventListener('mouseleave', () => {
    const submenuContainer = document.querySelector('.submenu-container');
    submenuContainer.classList.remove('active');
    document.querySelectorAll('.submenu').forEach(submenu => submenu.classList.remove('active'));
});



const menuItems = document.querySelectorAll('.menu-item');
const submenuContainer = document.querySelector('.submenu-container');
const submenus = document.querySelectorAll('.submenu');

// Mostrar submenú al pasar el ratón sobre el menú principal
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const menu = item.getAttribute('data-menu');

        // Ocultar todos los submenús
        submenus.forEach(submenu => submenu.classList.remove('active'));

        // Mostrar el contenedor de submenús
        submenuContainer.classList.add('active');

        // Mostrar el submenú correspondiente
        const activeSubmenu = document.querySelector(`.submenu[data-menu="${menu}"]`);
        if (activeSubmenu) activeSubmenu.classList.add('active');
    });
});

// Ocultar submenú al salir del contenedor principal y del submenú
document.addEventListener('mouseleave', event => {
    if (
        !event.target.closest('.main-menu') && 
        !event.target.closest('.submenu-container')
    ) {
        submenuContainer.classList.remove('active');
        submenus.forEach(submenu => submenu.classList.remove('active'));
    }
});
