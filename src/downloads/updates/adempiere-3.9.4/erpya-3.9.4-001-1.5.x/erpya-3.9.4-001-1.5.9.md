---
title: erpya-3.9.4-001-1.5.9
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.9"
  - "2024-04-17"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-17

## Novedades

- Ahora al agregar un bloqueo por acceso a datos de rol en un almacen al ingresar en ADempiere en la ventana de login va a filtrar por los almacenes que el rol o el usuario tienen permiso.

- Fórmula Alemana para cálculo de prestamos al Completar un prestamo o en el simulador de prestamos

### ¿Dónde se encuentra la validación?

- En la ventana del login si existe permiso a datos de rol por almacen configurados
- Al completar un prestamo.
- Al simular un prestamo.

## Enlaces Relacionados

- [Soporte a Bloqueo de Almacén #35](https://github.com/erpcya/Control-NATULAC/issues/35)

- [Revalorización de Pagaré #17](https://github.com/erpcya/Control-NATULAC/issues/17)

## Contexto

- Se Agrega soporte a Filtro de Acceso a Datos de Rol en la Seleccion de Almacen al hacer login
- Se Agrega soporte a calculo de prestamo con el Metodo Aleman

## Detalle Técnico

- Added support for Role Data Access Filter in Warehouse Selection when logging in
- Added support for loan calculation with the German Method

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.5.6
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.3.3
- Cloud-Service-Management: 3.9.4-1.3.0
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 3.9.4-1.5.9
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.5.9
- Sales-Force-Management: 1.2.8
- Delivery-Management-Service: 1.2.0
- Travel-Agency-Management: 3.9.4-1.1.2
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis:1.1.7
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.5.9
- Kafka-Replicator-Client: 1.0.9
- Kafka-Uti- ADempiereBase: 3.9.3-rs-4.3
- CST-STD: rs-37.6
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
- Cloud-Service-Management: 1.2.9
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 1.5.9
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.5.9
- Sales-Force-Management: 3.9.4-1.3.1
- Delivery-Management-Service: 3.9.4-1.2.1
- Travel-Agency-Management: 1.1.1
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis: 1.1.4
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.5.9
- Kafka-Replicator-Client: 1.0.9
- Kafka-Util: 1.0.2
- Core-Tools: 1.5.9
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

- Crear una aplicacion de funcionalidad en la categoria de producto financiero con el tipo de evento Acción de Tabla y una configuración de funcionalidad que apunte a la clase `org.spin.investment.loan.util.GermanLoanAmortization`
- Crear una aplicacion de funcionalidad en la categoria de producto financiero con el tipo de evento Simulación y una configuración de funcionalidad que apunte a la clase `org.spin.investment.loan.util.GermanLoanMethodSimulator`
