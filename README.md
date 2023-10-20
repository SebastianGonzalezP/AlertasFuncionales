# AlertasFuncionales

pequeño recurso creado para tener alertas personalizables en varios aspectos, desde los colores y textos hasta la ejecución de funciones específicas luego de oprimir cierto botón

## Archivo JavaScript Principal

El archivo JavaScript principal para este proyecto es `functions.js`. En él, encontrarás la lógica que te permite definir y mostrar alertas personalizadas. Puedes configurar las siguientes propiedades:

- `Alert_Has_Alert`: Activa o desactiva la visualización de alertas.
- `Alert_Show_On_Load`: Decide si mostrar una alerta al cargar la página.
- `Alert_type`: Define el tipo de alerta (Error, Success, Advice, Loading).
- `Alert_Title`: Título de la alerta.
- `Alert_Text`: Texto de la alerta.
- `Alert_Has_Ok`, `Alert_Has_Cancel`, `Alert_Has_Other`: Controla la visibilidad de los botones en la alerta.
- `Alert_Ok_Button_text`, `Alert_Cancel_Button_text`, `Alert_Other_Button_text`: Texto de los botones.
- `Alert_Other_function`: Función a ejecutar cuando se pulsa el botón "Other".
- `Alert_Has_Time_Up`: Activa una temporización para que la alerta se cierre automáticamente.
- `Alert_Time_Up`: Duración de la temporización (en milisegundos).

## Personalización de Estilos

Puedes personalizar la apariencia de las alertas ajustando las variables CSS definidas en el archivo `alert.css`. Aquí tienes algunas de las variables CSS personalizables:

````css
:root {
    --alert-container-background-color: rgba(0,0,0,0.5);
    --color-primary: #fff;
    --color-secondary: #000000;
    --color-tertiary: #428d92;
    --font-primary-color: #eb4f11;
    --font-secondary-color: #410707;
    --font-tertiary-color: #ffffff;
    --alert-body-border-radius: 1rem;
    --alert-title-font-size: 25px;
    --alert-text-font-size: 15px;
    --alert--buttons-border-radius: 1rem;
    --alert--button-ok-background-color: rgb(123, 168, 40);
    --alert--button-cancel-background-color: rgb(199, 40, 40);
    --alert--button-other-background-color: rgb(62, 128, 172);
    --alert--button-ok-hover-background-color: rgb(82, 110, 28);
    --alert--button-cancel-hover-background-color: rgb(110, 29, 29);
    --alert--button-other-hover-background-color: rgb(40, 78, 104);
}

## Cómo Utilizar

Puedes integrar las alertas personalizables en tu proyecto de la siguiente manera:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Prueba De Alerts</title>
</head>
<body>
    <script>
        const CustomAlert = {
            Alert_Has_Alert: true,
            Alert_Show_On_Load: true,
            Alert_type: 'Loading',
            Alert_Title: "Alert De Inico",
            Alert_Text: "Este es el alert que se ejecuta cada vez que e inicia la vista",
            Alert_Has_Ok: true,
            Alert_Ok_Button_text: "Continuar",
            Alert_Has_Cancel: true,
            Alert_Cancel_Button_text: "Cancelar",
            Alert_Has_Other: true,
            Alert_Other_Button_text: "Funcion",
            Alert_Other_function: `SetCustomAlert({
                Alert_Has_Alert: true,
                Alert_Show_On_Load: false,
                Alert_type: 'Advice',
                Alert_Title: 'Advice',
                Alert_Text: 'Prueba De Alerta Desde Other Button',
                Alert_Has_Ok: false,
                Alert_Has_Cancel: true,
                Alert_Cancel_Button_text:'Salir',
                Alert_Has_Other: false,
                Alert_Other_function_Name: 'NaN',
                Alert_Has_Time_Up: false,
                Alert_Time_Up: 0,
            })`,
            Alert_Has_Time_Up: false,
            Alert_Time_Up: 50000,
        }
    </script>
    <script src="./alerts/js/functions.js"></script>
</body>
</html>
````

##Ejemplo de Configuración
En el ejemplo proporcionado en el archivo HTML, se muestra cómo puedes configurar las alertas personalizables. Puedes definir propiedades como el tipo de alerta, el título, el texto y la función a ejecutar cuando se pulsa el botón "Other". Además, puedes decidir si la alerta se muestra al cargar la página.

recuerda que la direccion del recurso debe ser en la carpeta raiz guardago en una subcarpeta con nombre alerts

Raiz/alerts/img,css,js

##Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacerlo. Puedes enviar problemas, solicitudes de extracción y mejoras para ayudar a hacer que las alertas sean aún más personalizables y versátiles.

¡Esperamos que este proyecto de alertas personalizables sea útil para tus necesidades de desarrollo web!
