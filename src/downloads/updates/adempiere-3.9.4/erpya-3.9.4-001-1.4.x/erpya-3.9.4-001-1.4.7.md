---
title: erpya-3.9.4-001-1.4.7
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.7"
  - "2024-04-04"
article: false
---

**Fecha de Liberación:** 2024-04-04

## Novedades

- En el permiso se agregaron varios campos informativos y de operación como son:

  - Fecha de Regreso: Fecha efectiva de regreso a trabajar
  - Tiempo Restante: en caso de cerrar el permiso antes de tiempo quedará un saldo a favor del empleado
  - Duración del Permiso
  - Duración Hábil del Permiso
  - Duración Completa del Permiso

En el proceso de nómina se puede procesar paralelamente cada empleado. Para que esto funcione debe existir una variable en el configurador del sistema para la compañía con la clave `USE_PAYROLL_PARALLEL_PROCESSING` con el valor Y como se muestra en la imagen

![news](/assets/img/downloads/updates/resources/USE_PAYROLL_PARALLEL_PROCESSING.png)

## Contexto

- Con este cambio ya se puede gestionar las vacaciones en ADempiere como un permiso o licencia.

## Detalle Técnico

- Permission management is incorporated into ADempiere to:

- Vacation
- Rests
- General Permissions
- Added functionality for parallel payroll processing

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.4.1
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.3.3
- Cloud-Service-Management: 3.9.4-1.3.0
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 3.9.4-1.5.7
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.5.8
- Sales-Force-Management: 1.2.8
- Delivery-Management-Service: 1.2.0
- Travel-Agency-Management: 3.9.4-1.1.2
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis:1.1.6
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.5.2
- Kafka-Replicator-Client: 1.0.9
- Kafka-Uti- ADempiereBase: 3.9.3-rs-4.3
- CST-STD: rs-37.6
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
- Cloud-Service-Management: 1.2.9
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 1.5.3
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.5.8
- Sales-Force-Management: 3.9.4-1.3.1
- Delivery-Management-Service: 3.9.4-1.2.1
- Travel-Agency-Management: 1.1.1
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis: 1.1.4
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.5.2
- Kafka-Replicator-Client: 1.0.9
- Kafka-Util: 1.0.2
- Core-Tools: 1.5.0
- Get-Weight:1.2.4
- Record-Weight: 1.0.7
- Raw-Material-Receipt: 3.9.4-1.1.9
- Additional-Reports: 1.2.7
- Material-Management-Improvements: 1.1.8
- Warehouse-Management-System-Improvements: 1.1.6
- Import-Export-Management: 3.9.4-1.0.9
- Update-Management: 1.1.9
- Mini-Retail: 1.1.7
- Print-Queue: 1.1.4
- ERP-Payroll-Definition: 1.0.8
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
- ADempiere-Freight-Improvements: 1.0.3
- Warehouse-Management-System-Improvements: adempiere-3.9.4-1.2.0
- Quality-Analysis-Material: 1.2.3

## Requerimientos

Para que este cambio funcione se debe realizar lo siguiente:

- Ejecutar el setup `Add Payroll Intuitive Validator`
- Habilitar en la información de la compañía la bandera `Permisos Habilitados`.

![Imagen 2](/assets/img/downloads/updates/resources/permisos-habilitados.png)

- Reiniciar el servicio de ADempiere
- Configurar las vacaciones tal como se ve en el siguiente adjunto (Note que se asocia el tipo de permiso por tipo de empleado)

![Imagen 3](/assets/img/downloads/updates/resources/imagen3.png)

- Después, se debe asignar el tipo de empleado al empleado para pruebas

![Imagen 4](/assets/img/downloads/updates/resources/img4.png)

- Luego en la pestaña Permisos Asignados se creará automáticamente el permiso

![Imagen 5](/assets/img/downloads/updates/resources/imagen5.png)

- XML's a aplicar:
