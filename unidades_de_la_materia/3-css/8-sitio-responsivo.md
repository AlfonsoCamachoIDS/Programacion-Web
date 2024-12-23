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

    /* Variables para Responsive Design */
    --container-max-width: 1200px;
    --grid-gap: 20px;
}

@media (max-width: 1200px) {
    :root {
        --header-padding: 15px 0;
        --nav-padding: 12px 15px;
        --content-padding: 15px;
        --button-padding: 8px 15px;
        --border-radius: 6px;
        --container-max-width: 1000px;
    }
}

@media (max-width: 768px) {
    :root {
        --header-padding: 10px 0;
        --nav-padding: 10px 12px;
        --content-padding: 10px;
        --button-padding: 7px 12px;
        --border-radius: 5px;
        --container-max-width: 100%;
    }

    nav ul {
        flex-direction: column;
        align-items: flex-start;
    }

    .vertical-menu {
        width: 100%;
    }
}

@media (max-width: 480px) {
    :root {
        --header-padding: 8px 0;
        --nav-padding: 8px 10px;
        --content-padding: 8px;
        --button-padding: 6px 10px;
        --border-radius: 4px;
        --container-max-width: 100%;
        --grid-gap: 10px;
    }

    .grid-container {
        grid-template-columns: 1fr;
    }

    nav ul {
        flex-direction: column;
        align-items: flex-start;
    }

    .vertical-menu {
        width: 100%;
    }
}

/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
}

/* Estilo del cuerpo principal para compensar la altura del header y nav */
body {
    padding-top: 170px; /* Ajustar este valor según la altura combinada de tu header y nav */
}

/* Header and Navigation Styles */
header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--primary-color);
    color: var(--white-color);
    text-align: center;
    padding: var(--header-padding);
    box-shadow: var(--header-box-shadow);
    z-index: 1000; /* Aseguramos que el header esté encima de otros elementos */
}

nav {
    position: fixed;
    top: 119px; /* Ajustar este valor según la altura de tu header */
    width: 100%;
    background-color: var(--secondary-color);
    z-index: 999; /* Aseguramos que el nav esté justo debajo del header */
    margin: auto;
}

@media (max-width: 1200px) {
    nav {
        top: 109px; /* Ajustar este valor según la altura de tu header */
    }
}

@media (max-width: 768px) {
    nav {
        top: 99px; /* Ajustar este valor según la altura de tu header */
    }
}

@media (max-width: 480px) { 
    nav {
        top: 95px; /* Ajustar este valor según la altura de tu header */
    }
}

nav a {
    color: var(--white-color);
    text-align: center;
    padding: var(--nav-padding);
    text-decoration: none;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: var(--highlight-color);
    color: var(--text-color);
}

.horizontal-menu {
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 0;
}

.horizontal-menu > li > a {
    display: block;
    padding: var(--nav-padding);
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


/* Menu Toggle Styles */
.menu-toggle {
    display: none;
    cursor: pointer;
}

.menu-icon {
    width: 25px;
    height: 3px;
    background-color: var(--white-color);
    margin: 4px 0;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .horizontal-menu {
        display: none;
        flex-direction: column;
    }

    .horizontal-menu.open {
        display: flex;
    }

    .horizontal-menu li {
        width: 100%;
    }
}

/* Main Container */
.container {
    padding: var(--content-padding);
    max-width: var(--container-max-width);
    margin: 0 auto;
}

/* Content Sections */
.content {
    background-color: var(--white-color);
    margin-bottom: 20px;
    padding: var(--content-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s;
}

.content:hover {
    transform: scale(1.02);
}

/* Typography */
h1 {
    color: var(--white-color);
}

h2, h3, h4, h5, h6 {
    color: var(--primary-color);
}

p, li {
    font-size: 16px;
    line-height: 1.6;
}

blockquote {
    font-style: italic;
    color: #555;
    border-left: 4px solid var(--primary-color);
    padding-left: 10px;
    margin: 20px 0;
}

i {
    color: var(--footer-text-color);
}

/* Forms */
form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="email"],
textarea,
select {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
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

button:hover {
    background-color: var(--highlight-color);
}

/* Tables */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 15px;
    text-align: left;
}

th {
    background-color: var(--primary-color);
    color: var(--white-color);
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

/* Video and Image Text Sections */
.video-iframe-docu,
.image-text {
    margin-top: 20px;
}

.video-docu {
    width: 100%;
    height: 315px;
    border: none;
}

.image-text img {
    max-width: 100%;
    border-radius: 5px;
    margin-right: 20px;
}

.image-text div {
    flex: 1;
}

/* Footer */
footer p {
    text-align: right;
    margin-top: 20px;
    color: var(--footer-text-color);
}

footer {
    background-color: var(--primary-color);
    color: var(--white-color);
    text-align: center;
    padding: 10px 0;
}

.hr-footer {
    border: 1px solid #ddd;
    height: 5px;
    background-color: #ddd;
    margin: 20px 0;
}

/* Additional Styles */
.linux-page {
    background-color: var(--background-color);
    width: 100%;
    height: 600px;
    border: none;
}

.video-iframe-docu {
    text-align: center;
}

.video-docu {
    width: 70%;
    height: 550px;
    border: none;
}

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
    background-color: var(--white-color);
    margin: 10px;
    padding: var(--content-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
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
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: var(--button-padding);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.know-more:hover {
    background-color: var(--highlight-color);
}

.cta-distro {
    display: block;
    margin-bottom: 5px;
    color: var(--white-color);
    text-align: center;
    margin-top: 5px;
    text-decoration: none;
    font-size: 20px;
}

/* Grid Layout for Package Topics */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--grid-gap);
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