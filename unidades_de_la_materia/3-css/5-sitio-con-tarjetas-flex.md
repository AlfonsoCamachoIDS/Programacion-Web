
# Sitio con tarjetas (Flex)

---

## Tarea

Utilizando flexbox y el sitio previamente diseñado:

- Añade varias filas y columnas con las tarjetas hechas en el Ejercicio #2 - Tarjeta
- Añade un menú desplegable a alguna de las opciones de tu header. (Ve el ejemplo en el repositorio en la carpeta "sitio", coloca el cursor encima del menú de Aspirantes)

## Desarrollo

En el ejercicio 2 yo ya habia realizado las tarjetas con felxbox, no habia llegado a estar tarea ni habia leido las instrucciones. Trabaje en una emnpresa por un año tres meses como especialista en cargador de contenido web donde me encargaba de crear paginas web con flexbox y hacerlas responsivas, eran paginas relativamente sencillas, aunque algunas no tanto, pero contaba con el apoyo del frontend que ya tenia el sitio hecho y los estilos principales.

Me encargue de hacer el dropdown menu.

Resultado:

![Tarjetas Flex y Dropdown Menu](/imgs/unidad-3-ejercicio-5-tarjetas-flex-y-dropdown-menu/dropdown-menu.png)

![Flexbox](/imgs/unidad-3-ejercicio-2-tarjetas/tarjetas.png)

Tarjetas flexbox y Nav con Dropdown Menu

```HTML
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/unidades_de_la_materia/3-css/main/css/styles.css">
    <title>Distribuciones de Linux</title>
</head>

<body>
    <header>
        <h1>Blog sobre Linux</h1>
    </header>

    <nav>
        <ul class="horizontal-menu">
            <li><a href="/unidades_de_la_materia/3-css/main/index.html">Página Principal</a></li>
            <li><a href="/unidades_de_la_materia/3-css/main/pages/about-us.html">Acerca del Creador</a></li>
            <li>
                <a href="/unidades_de_la_materia/3-css/main/pages/linux-distro.html">Distribuciones de Linux</a>
                <ul class="vertical-menu">
                    <li><a href="https://ubuntu.com" target="_blank" rel="noopener">Ubuntu</a></li>
                    <li><a href="https://getfedora.org" target="_blank" rel="noopener">Fedora</a></li>
                    <li><a href="https://archlinux.org" target="_blank" rel="noopener">Arch Linux</a></li>
                    <li><a href="https://debian.org" target="_blank" rel="noopener">Debian</a></li>
                    <li><a href="https://kali.org" target="_blank" rel="noopener">Kali Linux</a></li>
                </ul>
            </li>
            <li><a href="/unidades_de_la_materia/3-css/main/pages/packages-linux.html">Paquetes de Linux</a></li>
        </ul>
        <!-- <a href="/unidades_de_la_materia/3-css/main/index.html">Página Principal</a>
        <a href="/unidades_de_la_materia/3-css/main/pages/about-us.html">Acerca del
            Creador</a>
        <a href="/unidades_de_la_materia/3-css/main/pages/linux-distro.html">Distribuciones
            de
            Linux</a>
        <a href="/unidades_de_la_materia/3-css/main/pages/packages-linux.html">Paquetes
            de Linux</a> -->
    </nav>

    <main>
        <div class="container">
            <div id="distros" class="content">
                <h2>Distribuciones de Linux</h2>
                <p>Linux tiene numerosas distribuciones, cada una adaptada a diferentes necesidades:</p>
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
                <p>Para más información sobre distribuciones, visita <a href="https://distrowatch.com" target="_blank"
                        rel="noopener">DistroWatch</a>.</p>
            </div>
            <hr class="hr-footer" />
            <div class="content">
                <h2>Extras (Footer)</h2>
                <p>Para escribir código, puedes usar etiquetas como <code>&lt;code&gt;</code> y <kbd>&lt;kbd&gt;</kbd>
                    para entradas de teclado.</p>
                <p>Ejemplo de subíndice y superíndice: H<sub>2</sub>O y X<sup>2</sup>.</p>
                <p>
                <pre>Texto preformateado con espacios y saltos de línea.</pre>
                </p>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Alfonso Camacho Mtz. Todos los derechos reservados. Este documento en especifico es creado con
            fines educativos y de ejemplo.</p>
    </footer>
</body>

</html>
```

Estilos CSS

```CSS
nav {
    position: fixed;
    top: 119px; /* Ajustar este valor según la altura de tu header */
    width: 100%;
    background-color: #444;
    /* overflow: hidden; */
    z-index: 999; /* Aseguramos que el nav esté justo debajo del header */

    margin: auto;
}

nav a {
    /* float: left; */
    /* display: block; */
    color: #fff;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: #FF7F50;
    color: #000;
}

.horizontal-menu {
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 0;
}

.horizontal-menu > li > a {
    display: block;
    padding: 15px 20px;
    text-decoration: none;
}

.vertical-menu {
    position: absolute;
    display: none;
    list-style: none;
    padding: 0;
    width: 206px;
    background-color: rgba(0, 0, 0, 0.5);
}

.horizontal-menu li:hover .vertical-menu {
    display: block;
}

.vertical-menu li a {
    display: block;
    padding: 10px;
    text-decoration: none;
}
```
