---
title: Manual de Instalación de Cliente de Impresión
category: Documentación
star: 9
sticky: 9
article: true
icon: customize
tag:
  - Servicios
  - Impresoras
---

## Requerimientos

Para instalar el cliente de impresión se debe tener como mínimo lo siguiente:

- Windows 10 64 bits o superior
- Instalador de [cliente de impresión](../../../downloads/updates/devices/printers)

## Pasos de Instalación

### Descarga del Instalador

Para descargar el **Archivo** a instalar, puedes usar el siguiente [link](../../../downloads/updates/devices/printers)

![Página de Descarga](/assets/img/docs/fiscal-printer/download-page.png)

Una vez descargado dicho **Archivo** procedemos a la **Instalación**

Ubica el archivo previamente descargado

![Archivo](/assets/img/docs/fiscal-printer/previously-downloaded-file.png)

### Ejecutando el Instalador

Al intentar ejecutar el instalador te solicitará la ejecución en modo administrador, debes aceptar para continuar la instalación.

![Instalación](/assets/img/docs/fiscal-printer/setup.png)

### Seleccionando el Idioma

Seleccione el idioma con el cual desea continuar la instalación.

::: info Nota

El idioma seleccionado determinará el nombre del servicio a instalar.

- Si selecciona Español el servicio se llamará "Servicio de Impresión ERP"
- Si selecciona Inglés el servicio se llamará "ERP Printing Service"

:::

![Selección de Lenguaje](/assets/img/docs/fiscal-printer/select-language.png)

Luego de seleccionar el idioma de instalación se presiona **Siguiente** para ir al siguiente formulario.

![Formulario](/assets/img/docs/fiscal-printer/setup-2.png)

### Aceptando los Términos y Condiciones

Es importante que lea bien los términos y condiciones del contrato de instalación, al aceptarlo estará de acuerdo con todo lo que establece nuestro contrato de instalación.

![Acuerdo de Licencia](/assets/img/docs/fiscal-printer/terms-and-conditions.png)

### Seleccionando la Ruta de Instalación

La ruta de instalación es el lugar donde estarán los archivos necesarios para que la aplicación funcione correctamente, de igual manera se usará en adelante para aplicar las actualizaciones o desinstalar la aplicación.

Trate de usar una ruta que no contenga caracteres especiales como `()*#$+`

![Ruta](/assets/img/docs/fiscal-printer/path.png)

Para efectos de este ejemplo usaremos la ruta `C:\Users\ERP-Printing-Service`

![Ruta](/assets/img/docs/fiscal-printer/path-2.png)

![Ruta](/assets/img/docs/fiscal-printer/path-3.png)

![Ruta](/assets/img/docs/fiscal-printer/path-4.png)

Al seleccionar la ruta presionamos el botón **Instalar** para que se inicie el proceso de instalación

![Instalar](/assets/img/docs/fiscal-printer/install.png)

### Configurando la Impresora

Al terminar la instalación aparecerá un diálogo preguntando si desea configurar la impresora. Presione la opción **Si** para configurarla.

::: info Nota

La opción para configurar impresora puede ser ignorada si ya se encuentra instalado y configurado y únicamente está actualizando la aplicación

:::

![Instalar](/assets/img/docs/fiscal-printer/installation.png)

![Instalar](/assets/img/docs/fiscal-printer/question.png)

---

Configure los datos necesarios para que la impresora pueda ser administrada desde las aplicaciones de [E.R.P. Consultores y Asociados, C.A.](http://erpya.com). Si tiene alguna duda con respecto a este punto puede solicitar los datos a nuestro servicio de atención al cliente.

- **Servidor**: Coloque aquí la dirección del servidor de colas de impresión donde se conectará su dispositivo, tome en cuenta que la dirección puede variar si su instalación es cloud o es On Premise
- **Puerto**: Defina el puerto de conexión para el servicio de colas de impresión
- **Tiempo de Espera**: Este valor se puede dejar por defecto y únicamente deberá ser cambiado si algún técnico de atención al cliente lo solicita
- **Nombre de Impresora**: Coloque el nombre de la impresora. Este nombre debe ser único y debe coincidir con el nombre configurado en la aplicación desde la que se intenta enviar documentos a su iompresora
- **Modo de Inicio**: Este campo lo puede dejar vacio a menos que un técnico de atención al cliente le solicite cambiarlo

![Configuración](/assets/img/docs/fiscal-printer/print-config.png)

![Configuración](/assets/img/docs/fiscal-printer/print-config-2.png)

Al finalizar con la carga de datos presione el botón **Siguiente**, al hacerlo aparecerá un diálogo con los datos que previamente configuró. Simplemente presione aceptar para ir al siguiente formulario.

![Configuración](/assets/img/docs/fiscal-printer/print-config-3.png)

Después de configurar los datos de la impresora y conexión al servicio de colas de impresión aparecerá un diálogo preguntando si desea reiniciar el equipo.

::: info Nota

Es importante que acepte para que se reinicie el equipo y todo funcione correctamente.

:::

![Reiniciar](/assets/img/docs/fiscal-printer/restart.png)