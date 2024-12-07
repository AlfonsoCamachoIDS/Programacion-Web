
# Variebles y funciones

---

## Tarea

A partir del Ejercicio 5, modifica tu CSS y aplica variables y funciones. Puedes usarlas para los colores, márgenes, padding, fondos, etc.

Utiliza también algunas funciones en los apartados que se puedan aplicar.

## Desarrollo

Creacion del selector raiz `:root` para la definicion de variables a ser usadas en todo el documento y establecer estilos globales que faciliten la modificación de los estilos en todo el sitio.

```CSS
:root {
    /* Variables de Colores */
    --primary-color: #1E3A5F;
    --secondary-color: #444;
    --highlight-color: #FF7F50;
    --text-color: #333;
    --background-color: #f4f4f4;
    --footer-text-color: #999;
    --white-color: #fff;
    
    /* Variables de Márgenes y Padding */
    --header-padding: 20px 0;
    --nav-padding: 14px 20px;
    --content-padding: 20px;
    --button-padding: 10px 20px;
    
    /* Variables de Bordes y Sombra */
    --border-radius: 8px;
    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    --header-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

Algunos ejemplos de uso

```CSS
/* Content Sections */
.content {
    background-color: var(--white-color);
    margin-bottom: 20px;
    padding: var(--content-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s;
}

button {
    padding: var(--button-padding);
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.distro-card {
    flex-basis: 25%;
    background-color: var(--white-color);
    margin: 10px;
    padding: var(--content-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s;
}
```