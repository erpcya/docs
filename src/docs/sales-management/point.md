---
title: Punto de Venta
category: Documentation
star: 9
sticky: 9
article: true
---


## ¿Qué es un Punto de Venta?

Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ADempiere para tiendas es tu herramienta inteligente y agil para conectar todas las transacciones de ventas que mantienen a tu negocio.
![POS (1)](https://github.com/erpcya/docs/assets/9578152/7861fef2-2a3d-4c3e-a8e1-706aadca2411)

## ¿Qué Beneficio Traerá a Tu Empresa?

- Operación agil y eficiente
- Rapidez y seguridad
- Gestión multimonedas
- Gestión Tributaria
- Reportes Variados de Cierres
- Ofrecer más opciones de pago
- Obtener datos precisos de tus ventas
- Mejorar la experiencia del cliente

## ¿Qué ofrece ADempiere?

ADempiere ofrece una herramienta con la que tendrás acceso a tu tienda desde cualquier lugar.

- Controla las ventas de tus empleados.
- Además de informes en tiempo real, consulta informes diarios, semanales o mensuales.
- Consulta tus pedidos recibidos y por recibir.
- ¿Quieres ver cómo va tu negocio? ¡Hazlo desde cualquier lugar!
- Generar una factura de forma directa en cualquier moneda.
- Cobrar en diferentes metodos de pagos.
- Generación de IGTF.
- Carga de Comprobante de IVA.
- Devoluciones Totales y Parciales.
- Arqueo de Cajas.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una venta en ADempiere mediante su punto de venta, en su versión 3.9.4 para la localización Venezuela.

## ¿Qué Consideraciones Debe Tomar en Cuenta?

- El asesor debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- El Cajero debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- La tasa de cambio del día debe ser creada con antelación.
- El arqueo de caja del día anterior debe haberlo completado.
- El Cajero debe aperturar la caja con el dinero asignado como fondo de caja.


## Gestión de Asesor
La gestión del asesor se basa en brindar asesoramiento y asistencia a los clientes para maximizar la probabilidad de una venta. En el punto de venta será responsable de diferentes tareas relacionadas con la fuerza de ventas y con esto crea un entorno atractivo para los clientes.

Un asesor de ventas debe poder registrar un cliente, actualizar datos, cotizar, tomar un pedido y finalmente liberarlo para ser facturado en una caja asignada.

![asesorvpos](https://github.com/erpcya/docs/assets/9578152/21daab7f-b799-4af9-81e8-5c64baa3f345)

### Selección de Terminal Asignado
El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:

1. Ingrese de manera habitual a la aplicación.

   ![image](https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760)

2. Una vez dentro seleccione la opción **Punto de Venta**, ubicado en gestión de ventas.
 
   ![image](https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e)

3. Estando en el Punto de venta vaya a la opción punto de venta.
 
  ![image](https://github.com/erpcya/docs/assets/9578152/018eb774-5f2c-4b2c-b1a2-b78e5446072a)

4. Seleccione el terminal con el que desea trabajar. 

  ![image](https://github.com/erpcya/docs/assets/9578152/556d9488-09e8-4d02-a56c-5e64e0671518)

5.  Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.

### Gestionar Clientes
El Asesor puede gestionar la información de sus clientes, en este sentido, podrá crear o actualizar la información de sus clientes.

#### Crear Nuevo Cliente
Si usted desea crear un nuevo cliente en el Punto de Venta deberá realizar la siguiente operación:
1. Vaya la opción **Socio de Negocio** del Punto de Venta

  ![image](https://github.com/erpcya/docs/assets/9578152/2cc6a2bf-3abb-4ef8-af84-262f8f96c88d)

2. Seleccione la opción Nuevo **Socio de Negocio**

  ![image](https://github.com/erpcya/docs/assets/9578152/b5119a45-ec7c-45b1-bc7c-50c683088774)

3. Se desplegará el siguiente formulario
 
  ![image](https://github.com/erpcya/docs/assets/9578152/0dfb0a2d-1996-4207-8bbb-2ab2565cfc0d)

4. A continuación indique el código del cliente (Cédula/RIF) en el campo **Código**.
 
  ![image](https://github.com/erpcya/docs/assets/9578152/5df9e4bd-6dcd-4007-8f3a-a8b84cd2c703)

::: info Nota

ADempiere actualiza de modo automático el campo **Número Identificación**, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).

:::

5. A continuación indique el nombre o razón social del cliente en el campo **Nombre**.

  ![image](https://github.com/erpcya/docs/assets/9578152/9b6e832a-f525-46d3-9751-e0552b484838)

6. Si es persona jurídica seleccione si es contribuyente en el campo **Contribuyente**

  ![image](https://github.com/erpcya/docs/assets/9578152/499f3eb4-a1dd-4806-8fa9-8332da92b63e)

7. Si es persona jurídica seleccione el tipo de contribuyente
 
  ![image](https://github.com/erpcya/docs/assets/9578152/cf095e9a-cfba-483f-b0a6-1f1156e571e7)

8. Registre su correo electrónico en el campo **E-mail**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/382a0b73-85dd-412f-bd43-64ed54e14bef)

9. Registre su teléfono en el campo **Teléfono**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/5dd10b95-86d3-4e63-9cc0-0993c143f96c)

10.Registre el detalle de la dirección:
  1. Registre la referencia de la dirección en el campo **Referencia**
  2. Registre la país de la dirección en el campo **País**
  3. Registre la región de la dirección en el campo **Región**
  4. Registre la ciudad de la dirección en el campo **Ciudad**
  5. Registre el detalle de la dirección en el campo **Dirección 1**
 
  ![image](https://github.com/erpcya/docs/assets/9578152/a213662d-5198-480a-bcd1-a4aa9acf1332)

11. Seleccione la opción ok, y ya su cliente estará registrado y listo para ser usado.



#### Actualizar Cliente

1. Busqué el cliente en el campo socio del negocio, escribiendo su cédula o su nombre.

    ![image](https://github.com/erpcya/docs/assets/9578152/69d2c7da-d4db-47e2-bb2f-ba122e4141cd)

2. Seleccione la opción Actualiza Socio del Negocio.

    ![image](https://github.com/erpcya/docs/assets/9578152/1e899ae9-2bd9-4bdb-a7a8-50a70e1741ee)

3. Edite el dato que desea modificar.

  ![image](https://github.com/erpcya/docs/assets/9578152/d4f22f66-fccb-4c4c-adff-e110b92d4008)
 
4. Guarde en la opción ok.
   
### Registro de Nuevo Pedido
El pedido del punto de venta es un documento que se genera como compromiso de venta, seleccionando los items y luego es liberado para su posterior facturación, en esta herramienta un pedido puede ser de los siguientes tipos:

#### Documento por Cobrar

1. **Pedido Fiscal:** Genera una factura fiscal al cobrarlo, esta es impresa en impresora fiscal o forma libre, la misma tiene implicaciones fiscales.
2. **Pedido Nota de Entrega:** Genera una nota de entrega al cobrarlo, esto quiere decir que el documento no es fiscal, hasta que el usuario decida facturarlo.
3. **Pedido no Facturado:** No genera factura o nota de entrega al cobrarlo, lo que quiere decir que es un pedido cobrado como anticipo.
   
#### Entregas de Mercancia
1. **Pedido no entregado:** No genera entrega inmediatamente luego de cobrarlo, ideal para tiendas donde manejan un área de logistica y despacho de mercancía.
2. **Pedido Entregado:** Genera la salida de inventario autómaticamente luego de cobrar el pedido, ideal para tiendas tipo supermercados e hipermercados.

### Presupuestos
1. **Cotizaciones o Presupuestos:** Son documentos solicitados por el cliente, este documento genera un formato para el cliente con un presuesto, este no reserva mercancia y puede ser convertido a una factura luego.


Ahora bien para este ejemplo vamos a tomar un pedido fiscal, sabiendo que el procedimiento es exactamente igual para todos los casos, los tipos de documentos y su comportamiento dependerán del paquete que sea instalado en su empresa, por lo que por cada documento varía el resultado. Ahora bien, para el ejemplo en cuestión porceda de la siguiente forma:



1. Seleccione la opción nueva orden.
   
   ![image](https://github.com/erpcya/docs/assets/9578152/13f510d7-0ed6-448b-ba78-11624f5b3bbe)

2. Seleccione el cliente.

   ![image](https://github.com/erpcya/docs/assets/9578152/8e30090e-9fd3-402d-bb9c-db8175dccf8d)

3. Seleccione los Items en productos.
![image](https://github.com/erpcya/docs/assets/9578152/f8caa3be-88d4-4198-9039-1e93a5355deb)

4. Al seleccionar el producto, el item se agrega al panel de items

![image](https://github.com/erpcya/docs/assets/9578152/bee7d5f9-cb89-46b8-8919-bd8f9eda993f)

  A continuación se detalla los campos que se presenta en el panel de items:
  1. **Producto:** Muestra la descripción del producto o servicio a facturar, no es editable.
  2. **Precio:** Muestra el precio del producto en la moneda con la que se gestiona el terminal, puede ser modificable,siempre y cuando el usuario tenga acceso, en caso contrario, **solicitará el PIN de un supervisor para autorizar la operación (Ver Gestión de Supervisor de Turno)**.
  3. **Cantidad:** Muestra la cantidad, inicialmente al cargar el producto es uno, puede ser modificada por el usuario, o eliminar el item.
  4. **Unidad de Medida(UM):** Muestra la unidad de medida con la que compra el producto, si el producto tiene unidad mínima de venta tomará esta unidad de medida, caso contrario tomará la del producto, no es editable.
  5. **% Impuesto:** Muestra la tasa de impuesto que aplica al producto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  6. **Impuesto:** Muestra el monto del impuesto que aplica al producto dependiendo de la tasa de impuesto, sabiendo que esto dependerá de la legislación del país donde tiene la instalación, además de esto, si el documento que gestiona es del tipo **Pedido Nota de Entrega:**, será exento de forma autómatica, no es editable.
  7. 
8. 
9. 

  1.

   
7. Modifique las cantidades
8. 

## Consulta de Producto

# Gestión de Cajero
La gestión del cajero es administrar todas las transacciones con los clientes de manera eficiente. Entre las responsabilidades de un cajero se incluyen abrir su caja, recibir pagos y emitir facturas o recibos, entregar los productos y realizar un seguimiento de todas las transacciones de efectivo y crédito hasta llegar a su arqueo de caja.

![CajeroPOS ](https://github.com/erpcya/docs/assets/9578152/15088f61-4d32-477f-b236-f2e2aa9dc1c3)


## Selección de Terminal Asignado
El primer paso para gestionar el terminal y comenzar a tomar pedidos es seleccionar el terminal que desea operar, para esto proceda de la siguiente manera:

1. Ingrese de manera habitual a la aplicación.
   ![image](https://github.com/erpcya/docs/assets/9578152/a3df6e68-4ced-4bcb-965a-fc3803300760)

2. Una vez dentro seleccione la opción **Punto de Venta**, ubicado en gestión de ventas.
   ![image](https://github.com/erpcya/docs/assets/9578152/55ad8715-7388-4af0-9f0e-e5c7a6e29f5e)

3. Estando en el Punto de venta vaya a la opción punto de venta.
  ![image](https://github.com/erpcya/docs/assets/9578152/7a615600-37f7-4cd7-92c0-969f89db1e91)

4. Seleccione el terminal con el que desea trabajar.
  ![image](https://github.com/erpcya/docs/assets/9578152/85c0507c-554d-4a11-9c6e-224eaacee627)

5. Una vez seleccionada la opción, la aplicación recargará las opciones de acuerdo a su permisología.

## Apertura de Caja
### Apertura Desde un Fondo de Caja
### Crear Fondo de Caja
## Selección de Pedido 
## Cambios de Atributos
## Cobranza
### Efectivo
### Transferencia
### Tarjeta de Crédito
### Tarjeta de Débito
### Pago Móvil
### Tarjeta de Crédito
### Zelle
### Crédito
## Generación de IGTF
## Carga de Comprobante de IVA
## Consultas de Ventas
### Por Facturar
### Ventas de Pasillo
### A Crédito
### Por Entregar
### Solo Completas
### Propuestas
### Anuladas
### Cerradas
### Devoluciones
## Devoluciones
### Devolución Total
### Devolución Parcial
## Entrega de Producto
### Entrega Total
### Entrega Parcial
## Cierre de Caja
### Cierre Resumen
### Cierre Detalle

# Gestión de Supervisor de Turno
## Descuentos
### Descuentos en Lineas
### Descuentos en Monto General
## Asignar Vendedor
## Desasignar Vendedor
## Retiro de Caja
## Ingreso de Caja
## Ajustes de Facturas

# Reportes de Gestión de Ventas







Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Orden de Ventas**, por último seleccione la ventana **Punto de Venta**.

![Campo](/assets/img/docs/sales-management/sam-sales-image304.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Punto de Venta** en ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image305.png)

Imagen 2. Ventana Punto de Venta

Seleccione el icono **Nueva Orden**, ubicado en la barra de herramientas superior derecha.

![Campo](/assets/img/docs/sales-management/sam-sales-image306.png)

Imagen 3. Icono Registro Nueva Orden

Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:

Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image307.png)

Imagen 4. Búsqueda de Cliente

Para seleccionar cliente existente, proceda a tipear el nombre, RIF o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image308.png)

Imagen 4. Nuevo Cliente

Seleccione la opción **Crear Nuevo Socio de Negocio**.

![Campo](/assets/img/docs/sales-management/sam-sales-image309.png)

Imagen 5. Opción Nuevo Cliente

A continuación Seleccione la opción **Crear Nuevo Socio de Negocio**, y se desplegará la siguiente ventana.

![Campo](/assets/img/docs/sales-management/sam-sales-image310.png)

Imagen 6. Ventana Crear Socio de Negocio

