
# Tarjeta

---

## Tarea

Utilizando lo aprendido en clase, haz una tarjeta que contenga una imagen, una descripción de la imagen y un botón. Deberás aplicar estilos utilizando propiedades básicas de CSS. El tema de la tarjeta puede ser el que gustes, incluso alguno de los que elegiste para tus sitios anteriores.

1. Estructura HTML
    - Crear un contenedor principal para la tarjeta.
    - Dentro del contenedor, agregar una imagen, un texto descriptivo y un botón.
2. Estilos CSS
    - Definir el tamaño y el diseño de la tarjeta.
    - Ajustar la imagen para que se ajuste al ancho de la tarjeta.
    - Seleccionar una fuente legible y que vaya con el diseño seleccionado.
    - Estilizar la descripción para que sea legible y esté bien posicionada.
    - Diseñar el botón para que sea visible y funcional.

## Desarrollo

Resultado:

![Resultado de las tarjetas](/imgs/unidad-3-ejercicio-2-tarjetas/tarjetas.png)

Detalles en la alineacion que olvide como arreglarlo.

Estructura HTML

```HTML
<div class="distros-container">
    <div class="distro-card">
        <div class="distro-image">
            <img src="https://logos-download.com/wp-content/uploads/2016/02/Ubuntu-700x700.png" alt="Ubuntu">
        </div>
        <div class="distro-info">
            <h3>Ubuntu</h3>
            <p>Ubuntu es una distribución de Linux basada en Debian, que fue diseñada para ser sencilla de usar y administrada.</p>
        </div>
        <div class="know-more">
            <a class="cta-distro" href="https://ubuntu.com" target="_blank" rel="noopener">Más información</a>
        </div>
    </div>
    <div class="distro-card">
        <div class="distro-image">
            <img src="https://th.bing.com/th/id/R.909e224d08d86b059330e9a81aadc524?rik=OiChvJvQmdQcxA&pid=ImgRaw&r=0" target="_blank" alt="Fedora">
        </div>
        <div class="distro-info">
            <h3>Fedora</h3>
            <p>Fedora es una distribución de Linux patrocinada por Red Hat, que se enfoca en la innovación y la adopción temprana de nuevas tecnologías.</p>
        </div>
        <div class="know-more">
            <a class="cta-distro" href="https://getfedora.org" target="_blank" rel="noopener">Más información</a>
        </div>
    </div>
    <div class="distro-card">
        <div class="distro-image">
            <img src="https://seekicon.com/free-icon-download/arch-linux_1.png" alt="Arch Linux">
        </div>
        <div class="distro-info">
            <h3>Arch Linux</h3>
            <p>Arch Linux es una distribución de Linux que se basa en el sistema de archivos AUR (Arch User Repository), que permite a los usuarios compartir y descargar paquetes personalizados.</p>
        </div>
        <div class="know-more">
            <a class="cta-distro" href="https://archlinux.org" target="_blank" rel="noopener">Más información</a>
        </div>
    </div>
    <div class="distro-card">
        <div class="distro-image">
            <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/debian-1024.png" alt="Debian">
        </div>
        <div class="distro-info">
            <h3>Debian</h3>
            <p>Debian es una distribución de Linux que se enfoca en la estabilidad y la libertad de software. Es la base de muchas otras distribuciones populares, como Ubuntu y Linux Mint.</p>
        </div>
        <div class="know-more">
            <a class="cta-distro" href="https://debian.org" target="_blank" rel="noopener">Más información</a>
        </div>
    </div>
    <div class="distro-card">
        <div class="distro-image">
            <img src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/08/kali-linux-dragon-logo.png" alt="Kali Linux">
        </div>
        <div class="distro-info">
            <h3>Kali Linux</h3>
            <p>Kali Linux es una distribución de Linux diseñada para la ciberseguridad y el hacking, que incluye un conjunto de herramientas de seguridad y penetración para asegurar la confidencialidad y la integridad de datos.</p>
        </div>
        <div class="know-more">
            <a class="cta-distro" href="https://kali.org" target="_blank" rel="noopener">Más información</a>
        </div>
    </div>
</div>
```

Estilos CSS

```CSS
/* Cards Section */

.distros-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.distro-card {
    flex-basis: 25%;
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    -o-transition: transform 0.3s;
    /*width: 300px;
     */
    -webkit-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -ms-transition: transform 0.3s;
    transition: transform 0.3s;
}

.distro-card:hover {
    transform: scale(1.02);
}

.distro-card img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.distro-image {
    width: 300px;
    height: 200px;
    border-radius: 5px;
}

.know-more {
    background-color: #1E3A5F;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}   

.know-more:hover {
    background-color: #FF7F50;
}

.cta-distro {
    display: block;
    margin-bottom: 5px;
    /* padding: 10px 0; */
    /* width: 100%; */
    color: #fff;
    text-align: center;
    margin-top: 5px;
    text-decoration: none;
    font-size: 20px;
}
```
