
# Header Sticky

---

## Ejercicio

Desarrolla el header del sitio que diseñaste en la Unidad 1. Deberá funcionar con el position sticky. Respetar el contraste de colores y utilizar la tipografía elegida.

Puedes tomar como ejemplo el del repositorio: <https://github.com/Blara22/programacion-web-2024/tree/main/sitio>

Recuerda que para la entrega se coloca tanto el enlace al repositorio como a la página.

OJO: Ejemplo, no copiar, pegar y cambiar colores.

## Desarrollo

La verdad estaba batallando mucho para usar el sticky ya que tenia el header y el nav por separado y solamente podia hacer sticky a uno al parecer, por temas de tiempo replique el efecto pero con `position: fixed`, igual `top: 0`, excepto con el `<nav>`, le modifiqe el `top: 119pc`, y ajuste el `<body>` un `padding-top: 170px`, esto para ajustar la altura del header y el nav.

Resultado
Final de pagina:
![Header Sticky](/imgs/unidad-3-ejercicio-3-header-sticky/header-sticky.png)

```CSS
/* Estilo del cuerpo principal para compensar la altura del header y nav */
body {
    padding-top: 170px; /* Ajustar este valor según la altura combinada de tu header y nav */
}

/* Header and Navigation Styles */
header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1E3A5F;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Aseguramos que el header esté encima de otros elementos */
}

nav {
    position: fixed;
    top: 119px; /* Ajustar este valor según la altura de tu header */
    width: 100%;
    background-color: #444;
    overflow: hidden;
    z-index: 999; /* Aseguramos que el nav esté justo debajo del header */
}
```
