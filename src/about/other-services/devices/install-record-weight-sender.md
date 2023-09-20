---
title: Instalar Cliente de Lectura de Peso
category: Otros Servicios
star: 9
sticky: 9
tag:
  - Nosotros
  - Servicios

article: false
---

Esta aplicación captura la Lectura de peso proveniente de una balanza conectada a un equipo por medio de una interfaz RS-232.

## Requisitos

- Sistema operativo Windows 10
- [Dotnet SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) (Instalar la versión que corresponda a la arquitectura del Sistema operativo x86 o x64)
- Instalador [Record-Weight-Sender-DotNet-x86](https://erpya.ams3.digitaloceanspaces.com/public/Record-Weight-Sender-DotNet-x86-rs-1.8.exe) ó [Record-Weight-Sender-DotNet-x64](https://erpya.ams3.digitaloceanspaces.com/public/Record-Weight-Sender-DotNet-x64-rs-1.8.exe)

Versiones anteriores a la versión rs-1.8 requieren tener instalado [Dotnet SDK 3.1](https://dotnet.microsoft.com/en-us/download/dotnet/3.1) en su versión x86

## Instalación

Para efectos demostrativos se instala la versión de Record-Weight-Sender-DotNet-x64-rs-1.8, para las versiónes posteriores se deben seguir los mismos pasos.

Ejecutar el instalador como Administrador.

1. Ejecutar Instalador

![0](/assets/img/about/other-services/devices/weight-sender-start-installer.png)

Permisos de Instalación

![0](/assets/img/about/other-services/devices/weight-sender-permisions.png)

Ventana de Bienvenida

![0](/assets/img/about/other-services/devices/weight-sender-welcome.png)

2. Licencia de la aplicación

![0](/assets/img/about/other-services/devices/weight-sender-license.png)

3. Ruta de Instalación

La aplicación se instala por defecto en la siguiente ubicación:

~~~
C:\Users\(Usuario de Windows)\AppData\Local\Record-Weight-Sender-DotNet
~~~

![0](/assets/img/about/other-services/devices/weight-sender-install-path.png)

4. Progreso Instalación

![0](/assets/img/about/other-services/devices/weight-sender-progress-install.png)

5. Finalizar Instalación

![0](/assets/img/about/other-services/devices/weight-sender-install-finish.png)

6. Icono creado en el Escritorio de Windows.

![0](/assets/img/about/other-services/devices/weight-sender-desktop-shortcut.png)

7. Además se creara un Servicio de Windows con el Nombre de **Record Weight EPRCYA**

![0](/assets/img/about/other-services/devices/weight-sender-folder-service.png)

![0](/assets/img/about/other-services/devices/weight-sender-folder-service-properties.png)

## Configurar la aplicación para Lectura de peso

La aplicaión se configura en dos etapas; la primera en el servicio de ADempiere y la segunda comprende actualizar los datos de la apliación instalada, Siendo el orden el que se muestra a continuación:

### Problemas luego de instalar

En caso de que no se cree el icono en el escritorio luego de instalar, se debe verificar si el usuario con el que se realizo la Instalación tiene permisologia de Administrador.

Se deben seguir los siguientes pasos:

1. Verificar que este creada la siguiente Ruta: `C:Users(Usuario de Windows)AppDataLocalRecord-Weight-Sender-DotNet` y a su vez en dicha ubicación existan los siguientes directorios:

![0](/assets/img/about/other-services/devices/weight-sender-folder-structure.png)

Debe existir la carpeta `resources` y una carpeta que en su nombre incluya las siguientes siglas **rs- (Ej. rs-1.8-win-x64)**

2. Verificar lo datos de conexión de la aplicación en el archivo **scale.yaml** en la carpeta **resources**.

3. Si luego de lo anterior el problema persiste, es necesario verificar en el **Visor de Eventos en Windows** cual es la falla.

![0](/assets/img/about/other-services/devices/weight-sender-folder-service-start-error.png)

Para el caso del ejemplo la aplicacion se instalo sin permisologia de **Administrador**, y por esa razon durante la instalacion no se creo el archivo de configuracion **config_service.yaml** que usa el servicio para iniciar. En este caso la solucion es copiar el archivo a:

~~~
C:\WINDOWS\system32\
~~~
