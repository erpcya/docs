---
title: erpya-3.9.4-001-1.6.0
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.0"
  - "2024-04-18"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-18

## Novedades

- Para realizar ésta validación se agregó en el `Tipo de Documento` una bandera llamada **Permitir Sobregirar Factura a Asignar** (`LVE_AllowOverdraftReference`) con el valor predeterminado como verdadero para mantener la compatibilidad hacia atrás.

- Con este cambio es posible validar documentos por cobrar para que no permitan ser sobregirados a través de una Nota de Crédito

## Contexto

- Se agrega validación para que no permita sobregirar Facturas de Cuentas por Cobrar si son fiscales a través de notas de crédito
- Se agrega soporte a Acceso a Datos de Rol en Ventana de informacion de Productos.

## Detalle Técnico

- Validation is added so that it does not allow overdrawing Accounts Receivable Invoices if they are fiscal through credit notes
- Added support for Access to Role Data in Product Information Window

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.5.7
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.3.3
- Cloud-Service-Management: 3.9.4-1.3.0
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 3.9.4-1.6.0
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.6.0
- Sales-Force-Management: 1.2.8
- Delivery-Management-Service: 1.2.0
- Travel-Agency-Management: 3.9.4-1.1.2
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis:1.1.7
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.6.0
- Kafka-Replicator-Client: 1.0.9
- Kafka-Uti- ADempiereBase: 3.9.3-rs-4.3
- CST-STD: rs-37.6
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
- Cloud-Service-Management: 1.2.9
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 1.6.0
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.6.0
- Sales-Force-Management: 3.9.4-1.3.1
- Delivery-Management-Service: 3.9.4-1.2.1
- Travel-Agency-Management: 1.1.1
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis: 1.1.4
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.6.0
- Kafka-Replicator-Client: 1.0.9
- Kafka-Util: 1.0.2
- Core-Tools: 1.6.0
- Get-Weight:1.2.4
- Record-Weight: 1.0.7
- Raw-Material-Receipt: 3.9.4-1.1.9
- Additional-Reports: 1.2.7
- Material-Management-Improvements: 1.1.8
- Warehouse-Management-System-Improvements: 1.1.6
- Import-Export-Management: 3.9.4-1.1.4
- Update-Management: 1.1.9
- Mini-Retail: 1.1.7
- Print-Queue: 1.1.4
- ERP-Payroll-Definition: 1.1.2
- Internal-Store: 1.0.4
- Telegram-Notifier: 1.0.5
- Costing-Engine-Improvements: 1.1.1
- Default-Attribute: 1.0.1
- Financial-Report: 1.0.1
- Json-Replicator-Client: 1.0.2
- Kubernetes-Cluster: 1.0.7
- ADempiere-Exporter: 1.0.5
- ADempiere-TelegramBot
- e-Commerce-Queue: 1.1.5
- Vue-StoreFront-API: 1.0.9
- Mercado-Libre-Venezuela-API: 1.0.8
- Common-Functionalities: 1.0.0
- FAP-Venezuela-Location: 3.9.4-1.1.9
- LVE-AdditionalTax: 1.2.3
- Time-Control: 1.0.2
- Payment-Customizations: 1.0.0
- Amount-In-Words: 1.0.6
- Sales-Order-Improvements: 1.0.4
- Additional-Withholding-Tax: 3.9.4-1.2.7
- ADempiere-Freight-Improvements: 1.0.4
- Warehouse-Management-System-Improvements: adempiere-3.9.4-1.2.0
- Quality-Analysis-Material: 1.2.4

## Requerimientos

- Técnico:
  - Utilizar la versión 1.6.0 o superior de ADempiere ERP ZK UI
  
  - Aplicar los XML's: xml/migration/2060_LVE_Se_agrega_validacion_de_sobregiro.xml de la localización Venezuela
  
  - Ejecutar la configuración de funcionalidad llamada Validación de Sobregiro de Factura con Nota de Crédito

- Funcional:
  - Utilizar la versión 1.6.0 o superior de ADempiere ERP ZK UI

  - Ubicar los tipos de documentos del tipo **Nota de Crédito de Cuentas por Cobrar** que se desean validar y desmarcar la bandera **Permitir Sobregirar Factura a Asignar**
  ![Permitir Sobregirar Factura a Asignar](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.0-img1.png)
    - Reiniciar el servicio

### ¿Cómo se ve el mensaje de error?

Cuando hay un error de validación por sobregiro se ve de la siguiente manera:

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.0-video1.mp4" type="video/mp4">
    </video>
</div>

![Mensaje de Error](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.0-img2.png)

- Inglés:

```sh
Invoice Amount: 14,205.87
Invoice Open Amount: 0.00
Amount to Allocate: 4,345.05
Currency: VES
Difference: -4,345.05
```

- Español:

```sh
Monto de Factura: 14.205,87
Saldo Abierto: 0,00
Monto a Asignar: 4.345,05
Moneda: VES
Diferencia: -4.345,05
```
