---
title: erpya-3.9.4-001-1.4.2
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - Actualizaciones
  - Versiones
  - erpya-3.9.4-001-1.4.2
  - 2024-03-23
article: false
---

**Fecha de Liberación:** 2024-03-23

## Novedades

- Se agrega validación en el empleado para que no pueda ser registrado un contrato si no tiene el Estado de Empleado y la Definición de Nómina.
- Se agrega validación en el proceso de nómina para que no pueda ser procesada si la Definición de Nómina a la que pertenece maneja control de período y el proceso de nómina que se está procesando no tiene Período Asignado.
- Se agrega manejo de permisos para el control operativo de vacaciones con las siguientes características:
  - Cálculo de Fecha final del Permiso (Licencia) en función de los días que le corresponden al empleado.
  - Cálculo de los días de vacaciones en función de la fecha de inicio del contrato actual del empleado.
  - Mínimo de antigüedad requerida para incremento de días de vacaciones.
  - Máximo de días de disfrute de vacaciones.
- Se agrega manejo de revocación o suspensión de permisos con otros:
  - Esto aplica para la suspensión de vacaciones por enfermedad, reposo u otro tipo.
  - Con esta característica ya se puede controlar la suspensión de las vacaciones de manera automática cuando existe un reposo en medio; de igual manera, se reinician las vacaciones al terminar el permiso con los días que le quedaban por disfrutar.
- Se agregan permisos recurrentes de manera automática al empleado cuando se selecciona el tipo de empleado: esto es muy útil para los permisos como vacaciones o condiciones especiales.

## Contexto

- Se agrega funcionalidad para manejo de permisos de manera operativa

## Detalle Técnico

- Functionality is added to manage permissions operationally

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.0.5
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
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

- XML's a aplicar:
  - 09910_ECA31_Add_Intuitive_Payroll.xml
  - 09920_ECA31_Add_Contract_Flag.xml
  - 09930_ECA31_Add_Default_Currency.xml
  - 09940_ECA31_Add_Contract_Default_Currency.xml
  - 09950_ECA31_Add_Leave_Columns.xml
  - 09960_ECA31_Add_Revoke_Leave_Column.xml
  - 09970_ECA31_Add_Source_Leave_Reference.xml
  - 09980_ECA31_Add_Business_Days_for_Leave_Type.xml
  - 09990_ECA31_Add_Leave_Duration_Time_to_Leave.xml
  - 10000_ECA31_Add_Vacation_Flag.xml
  - 10010_ECA31_Add_Vacation_Rules.xml
  - 10020_ECA31_Add_Minimum_Increment_Column.xml
  - 10030_ECA31_Add_Mandatory_Values.xml
