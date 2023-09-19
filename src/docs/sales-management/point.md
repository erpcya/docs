---
title: Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---
# ¿Qué es un Punto de Venta?

Presupuestos, facturación, cobranza, retenciones, devoluciones parciales, el inventario y una venta electrónica son solo un inicio. El Punto de venta de ADempiere para tiendas es tu herramienta inteligente y agil para conectar todas las transacciones de ventas que mantienen a tu negocio.
![POS (1)](https://github.com/erpcya/docs/assets/9578152/7861fef2-2a3d-4c3e-a8e1-706aadca2411)

# ¿Qué Beneficio Traerá a Tu Empresa?

- Operación agil y eficiente
- Rapidez y seguridad
- Gestión multimonedas
- Gestión Tributaria
- Reportes Variados de Cierres
- Ofrecer más opciones de pago
- Obtener datos precisos de tus ventas
- Mejorar la experiencia del cliente

# ¿Qué ofrece ADempiere?

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

# ¿Qué Consideraciones Debe Tomar en Cuenta?

- El asesor debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- El Cajero debe estar configurado en el terminal.
  - Debe tener acceso a la organización.
  - Debe tener acceso al terminal.
- La tasa del día debe ser creada con antelación.
- El arqueo de caja del día anterior debe haberlo completado.
- El Cajero debe aperturar la caja con el dinero asignado como fondo de caja.


# Gestión de Asesor
## Selección de Terminal Asignado
## Crear Cliente
## Registro de Nuevo Pedido
## Consulta de Producto

# Gestión de Cajero
## Selección de Terminal Asignado
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

A continuación indique el código del cliente (Cédula/RIF) en el campo **Código**.

![Campo](/assets/img/docs/sales-management/sam-sales-image311.png)

Imagen 7. Código Socio de Negocio

Warning

ADempiere actualiza de modo automático el campo **Número Identificación**, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).

A continuación indique el nombre o razón social del cliente en el campo **Nombre**.

|Nombre Cliente|

![Campo](/assets/img/docs/sales-management/sam-sales-image312.png)

Imagen 7. Nombre Socio de Negocio
