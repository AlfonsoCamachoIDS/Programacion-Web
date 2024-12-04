
# Enlaces de Seccion

---

Puede vincular directamente a cualquier sección que tenga un encabezado. Para ver el delimitador generado automáticamente en un archivo representado, mantenga el puntero sobre el encabezado de sección para exponer el icono de  y haga clic en el icono para mostrar el delimitador en el explorador.

Si necesita determinar el delimitador de un encabezado en un archivo que está editando, puede usar las siguientes reglas básicas:

- Las letras se convierten a minúsculas.
- Los espacios se reemplazan por guiones (-). Se quitan cualquier otro espacio en blanco o caracteres de puntuación.
- Se quitan los espacios en blanco iniciales y finales.
- Se quita el formato de marcado, dejando solo el contenido (por ejemplo, _italics_ se convierte en italics).
- Si el delimitador generado automáticamente para un encabezado es idéntico a un delimitador anterior en el mismo documento, se genera un identificador único anexando un guión y un entero de incremento automático.
  
Para obtener información más detallada sobre los requisitos de fragmentos del identificador URI, consulte [RFC 3986: Identificador uniforme de recursos (URI): Sintaxis genérica, sección 3.5.](https://www.rfc-editor.org/rfc/rfc3986#section-3.5)

El bloque de código siguiente muestra las reglas básicas que se usan para generar delimitadores a partir de encabezados en contenido representado.

```Markdown
# Example headings

## Sample Section

## This'll be a _Helpful_ Section About the Greek Letter Θ!
A heading containing characters not allowed in fragments, UTF-8 characters, two consecutive spaces between the first and second words, and formatting.

## This heading is not unique in the file

TEXT 1

## This heading is not unique in the file

TEXT 2

# Links to the example headings above

Link to the sample section: [Link Text](#sample-section).

Link to the helpful section: [Link Text](#thisll--be-a-helpful-section-about-the-greek-letter-Θ).

Link to the first non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file).

Link to the second non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file-1).
```

> [!NOTE]
> Si edita un encabezado o cambia el orden de los encabezados con delimitadores "idénticos", también deberá actualizar los vínculos a esos encabezados, ya que los delimitadores cambiarán.

## Delimitadores Personalizados

Puede usar etiquetas de anclaje HTML estándar (`<a name="unique-anchor-name"></a>`) para crear puntos de anclaje de navegación para cualquier ubicación del documento. Para evitar referencias ambiguas, use un esquema de nomenclatura único para etiquetas de anclaje, como agregar un prefijo al valor de atributo `name`.

> [!NOTE]
> Los delimitadores personalizados no se incluirán en el esquema o tabla de contenido del documento.

Puede vincular a un delimitador personalizado mediante el valor de atributo name que proporcionó el delimitador. La sintaxis es exactamente la misma que cuando se vincula a un delimitador que se genera automáticamente para un encabezado.

Por ejemplo:

```Markdown
# Section Heading

Some body text of this section.

<a name="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

(… more content…)

[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> Los delimitadores personalizados no se tienen en cuenta por el comportamiento automático de nomenclatura y numeración de vínculos de encabezado automático.

Extradio de la Documentacionde  GitHub
<https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>
