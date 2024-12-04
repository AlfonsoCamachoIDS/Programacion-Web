
# Diseño Web: Colores y Tipografia

## Imagina  un sitio web con un tema especifico

Ejemplos:

- Tienda en linea
- Foro de discución
- Red social
- Landing page para un producto

El sitio no debe existir aun, tu lo vas a diseñar.

### Establece la identidad visual de tu sitio web a traves de la elección adecuada de colores y tipografia

- Elige colores que reflegen el proposito y tono del sitio que estas diseñando.
- Crea una paleta de colores y coherente. Asegurate de que haya un buen contraste entre los colores para garantizar la accesibilidad.

### Investiga diferentes familias tipograficas que sean legibles y que se alineen con la imagen que deseas proyectar

- Elige una tipografia para los encabezados y otra para el cuerpo del texto. Asegurate de que se complementen entre si.
- Utiliza herramientas como Google Fonts para probar combinaciones y ver ejemplos de como lucen en un contexto web.

### En un archivo de texto, plasma la paleta de colores que elegiste (como imagen) y coloca el texto que utilice la tipografia que elegiste utilizando los distintos colores y tamaños en encabezados y cuerpo del texto

 ---

## Desarrollo

### Tipo

 1. [x] Landing Page de marca personal "ACMD" para ofrecer servicios informaticos.

### Identidad Visual

<!-- <table>
    <thead>
        <tr>
            <th>Forma</th>
            <th>Primarios</th>
            <th>Secundarios</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">Previsualización</td>
            <td align="center">
                <div>Imagen1</div>
                <div>Imagen2</div>
                <div>Imagen3</div>
            </td>
            <td align="center">
                <div>Imagen4</div>
                <div>Imagen5</div>
            </td>
        </tr>
        <tr>
            <td align="center">Hexadecimal</td>
            <td align="center">
                <div>#1E3A5F</div>
                <div>#FFFFFF</div>
                <div>#FF7F50</div>
            </td>
            <td align="center">
                <div>#F5F5F5</div>
                <div>#000000</div>
            </td>
        </tr>
    </tbody>
</table> -->

| Forma               | Primarios                       | Secundarios                 |
|---------------------|---------------------------------|-----------------------------|
| Previsualización    | ![Azul Matino](/imgs/unidad-1-ejercicio-4-landing-page/1E3A5F.png) ![Azul Matino](/imgs/unidad-1-ejercicio-4-landing-page/ffffff.png) ![Azul Matino](/imgs/unidad-1-ejercicio-4-landing-page/ff7f50.png)  | ![Azul Matino](/imgs/unidad-1-ejercicio-4-landing-page/f5f5f5.png) ![Azul Matino](/imgs/unidad-1-ejercicio-4-landing-page/000000.png)          |
| Hexadecimal         | #1E3A5F, #FFFFFF, #FF7F50   | #F5F5F5, #000000          |

### Tipografias

1. Encabzados
   - **Roboto Slab:** Añade un toque de sofisticacion. Roboto Slab <https://fonts.google.com/specimen/Roboto+Slab?form=MG0AV3>
2. Cuerpo del Texto
   - **Open Sans:** Es una Tipografia sans-serif que es bien legible y profesional. Open Sans <https://fonts.google.com/specimen/Open+Sans?form=MG0AV3>

Se busca que estas tipografias sean claras, modernas y faciles de leer, tanto en dispositivos moviles como en escritorio.

### Datos Adicionales

> [!NOTE]
> Esta informacion es adicional es añadida por cuenta propia asi como el archivo index.html en este directorio.

#### Ejemplo de encabezados

_Encabezado Principal:_

```CSS
h1 {
  font-family: 'Roboto Slab', serif;
  color: #1E3A5F;
}
```

_Cuerpo del Texto:_

```CSS
body {
  font-family: 'Open Sans', sans-serif;
  color: #000000;
}
```

_Botones y Elementos destacados:_

```CSS
.button {
  background-color: #FF7F50;
  color: #FFFFFF;
}
```

_**Consideraciones de accesibilidad:**_

- Debe haber suficiente contraste entre colores del texto y los fondos
- Los tamaños de la fuente deben ser legibles para todo tipo de usuarios
- Se debe siempre añadir descripciones y etiquetas alternativas para las imagenes

_**Elementos de la Landing Page:**_

- El encabezado debe llevar el nombre de la _Brand_ y el logo de ACMD
- Debera incluir una breve descripcion de los servicios que se ofrecen (informaticos, programacion, instalaciones y sistemas)
- Si los hay, incluir testimonios de clientes satisfechos
- Debera llevar un formulaio de contacto para que los clientes puedan solicitar informacion
