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

Para descargar el Archivo a instalar, puedes usar el siguiente [link](../../../downloads/updates/devices/printers)

![image](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/0887dda2-73a2-42fc-aeb4-1400bcacedb0)

Una vez descargado dicho Archivo procedemos a la Instalación

Ubica el archivo previamente descargado

![image1](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/998922c5-445c-4714-8a37-8d7dbf0d170d)

### Ejecutando el Instalador

Al intentar ejecutar el instalador te solicitará la ejecución en modo administrador, debes aceptar para continuar la instalación.

![image2](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/8e56c29f-1cb4-43e4-8f2d-b68b174d93a3)

### Seleccionando el Idioma

Seleccione el idioma con el cual desea continuar la instalación.

::: info Nota

El idioma seleccionado determinará el nombre del servicio a instalar.
Si selecciona Español el servicio se llamará "Servicio de Impresión ERP"
Si selecciona Inglés el servicio se llamará "ERP Printing Service"

:::

![image3](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/f43dbf17-136d-4fff-aabe-e552649364f8)


Luego de seleccionar el idioma de instalación se presiona **Siguiente** para ir al siguiente formulario.

![image4](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/9bcdc938-9597-45c6-827a-77cdda0ef725)


### Aceptando los Términos y Condiciones

Es importante que lea bien los términos y condiciones del contrato de instalación, al aceptarlo estará de acuerdo con todo lo que establece nuestro contrato de instalación.

![image5](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/18df89b4-88a0-4253-945a-2d17ba9ef883)


### Seleccionando la Ruta de Instalación

La ruta de instalación es el lugar donde estarán los archivos necesarios para que la aplicación funcione correctamente, de igual manera se usará en adelante para aplicar las actualizaciones o desinstalar la aplicación.

Trate de usar una ruta que no contenga caracteres especiales como `()*#$+`

![image6](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/ee15799d-77b9-4363-9e81-23a164ff4f19)

Para efectos de este ejemplo usaremos la ruta `C:\Users\ERP-Printing-Service`

![image7](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/df66bf54-64d3-4cdf-a39e-83c6896921b4)


![image8](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/45358c80-2602-4385-b9f2-e37d7009a12b)


![image9](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/9724512d-80cb-4ab6-8bc5-85ebfac04cdc)

Al seleccionar la ruta presionamos el botón **Instalar** para que se inicie el proceso de instalación

![image10](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/5691ab7d-a358-46f9-b0c2-02c8ab19e4a8)

### Configurando la Impresora

Al terminar la instalación aparecerá un diálogo preguntando si desea configurar la impresora. Presione la opción **Si** para configurarla.

::: info Nota

La opción para configurar impresora puede ignorada si ya se encuentra todo instalado y configurado y únicamente está actualizando la aplicación

:::

![image11](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/de0cdbc4-94d2-447d-92ca-e5205576a16d)


![image12](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/51ab930d-b429-4348-8573-63db57fedc6c)

Configure los datos necesarios para que la impresora pueda ser administrada desde las aplicaciones de [E.R.P. Consultores y Asociados, C.A.](http://erpya.com). Si tiene alguna duda con respecto a este punto puede solicitar los datos a nuestro servicio de atención al cliente.

- **Servidor**: Coloque aquí la dirección del servidor de colas de impresión donde se conectará su dispositivo, tome en cuenta que la dirección puede variar si su instalación es cloud o es On Premise
- **Puerto**: Defina el puerto de conexión para el servicio de colas de impresión
- **Tiempo de Espera**: Este valor se puede dejar por defecto y únicamente deberá ser cambiado si algún técnico de atención al cliente lo solicita
- **Nombre de Impresora**: Coloque el nombre de la impresora. Este nombre debe ser único y debe coincidir con el nombre configurado en la aplicación desde la que se intenta enviar documentos a su iompresora
- **Modo de Inicio**: Este campo lo puede dejar vacio a menos que un técnico de atención al cliente le solicite cambiarlo

![image13](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/13a95f63-c712-4550-9709-99d27beafa85)


![image14](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/56b151af-17f8-40e1-a621-69c507cedbd7)

Al finalizar con la carga de datos presione el botón **Siguiente**, al hacerlo aparecerá un diálogo con los datos que previamente configuró. Simplemente presione aceptar para ir al siguiente formulario.

![image15](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/ce403528-baac-4a1d-b6d8-8cac88516657)


Después de configurar los datos de la impresora y conexión al servicio de colas de impresión aparecerá un diálogo preguntando si desea reiniciar el equipo.

::: info Nota

Es importante que acepte para que se reinicie el equipo y todo funcione correctamente.

:::

![image16](https://github.com/Soporte-FuncionalERP/docs/assets/168581711/373edd18-7e0c-4de9-8b42-f2e9051cb241)

