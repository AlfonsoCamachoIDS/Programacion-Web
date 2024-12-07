
# CSS Grid

---

## Tarea

Haz un avance del sitio previamente diseñado, utilizando CSS Grid para organizar los elementos que lo conforman. Puedes combinar Grid y Flex dependiendo de lo que se necesite.

## Desarrollo

Resultado

![Paquetes en CSS Grid](/imgs/unidad-3-ejercicio-7-css-grid/css-grid.png)

```HTML
<main>
    <div class="container">
        <div id="packages" class="content">
            <h2>Paquetes de Linux</h2>
            <p>En Linux, puedes instalar software usando paquetes. Aquí hay algunos de los más populares:</p>
            <ul>
                <li><code>sudo apt-get install</code> - para distribuciones basadas en Debian</li>
                <li><code>sudo dnf install</code> - para Fedora</li>
                <li><code>sudo pacman -S</code> - para Arch Linux</li>
            </ul>
        </div>
        <div id="package-grid" class="content">
            <h2>Temas de Paquetes de Linux</h2>
            <div class="grid-container">
                <div class="grid-item">
                    <h3>Snaps</h3>
                    <p>Snaps son paquetes de software universales que funcionan en cualquier distribución de Linux. Son fáciles de instalar y vienen con todas sus dependencias.</p>
                </div>
                <div class="grid-item">
                    <h3>Flatpak</h3>
                    <p>Flatpak es una tecnología de distribución de software que permite instalar y ejecutar aplicaciones en entornos aislados.</p>
                </div>
                <div class="grid-item">
                    <h3>AppImage</h3>
                    <p>AppImage es un formato de paquete universal para distribuir aplicaciones portátiles en Linux sin necesidad de instalación.</p>
                </div>
                <div class="grid-item">
                    <h3>Yum</h3>
                    <p>Yum es un gestor de paquetes para distribuciones basadas en RPM como CentOS y Red Hat. Facilita la instalación y actualización de paquetes.</p>
                </div>
                <div class="grid-item">
                    <h3>Zypper</h3>
                    <p>Zypper es un gestor de paquetes para distribuciones basadas en openSUSE, que permite la instalación y gestión de paquetes y repositorios.</p>
                </div>
                <div class="grid-item">
                    <h3>Pacman</h3>
                    <p>Pacman es el gestor de paquetes de Arch Linux que permite la instalación y actualización sencilla de paquetes con un solo comando.</p>
                </div>
                <div class="grid-item">
                    <h3>DNF</h3>
                    <p>DNF es el sucesor de Yum y se utiliza en distribuciones como Fedora para la gestión de paquetes y actualizaciones.</p>
                </div>
                <div class="grid-item">
                    <h3>APT</h3>
                    <p>APT es el gestor de paquetes de Debian y sus derivadas, que facilita la instalación, actualización y gestión de software.</p>
                </div>
            </div>
        </div>
        <hr class="hr-footer" />
        <div class="content">
            <h2>Extras (Footer)</h2>
            <p>Para escribir código, puedes usar etiquetas como <code>&lt;code&gt;</code> y <kbd>&lt;kbd&gt;</kbd> para entradas de teclado.</p>
            <p>Ejemplo de subíndice y superíndice: H<sub>2</sub>O y X<sup>2</sup>.</p>
            <p>
            <pre>Texto preformateado con espacios y saltos de línea.</pre>
            </p>
        </div>
    </div>
</main>
```

```css
/* Grid Layout for Package Topics */

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.grid-item {
    background-color: var(--white-color);
    padding: var(--content-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s;
}

.grid-item:hover {
    transform: scale(1.05);
}
```
