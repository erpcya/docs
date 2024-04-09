---
title: erpya-3.9.4-001-1.4.9
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.9"
  - "2024-04-09"
article: false
---

**Fecha de Liberación:** 2024-04-09

## Novedades

- Secuencia para Configuración de Accion de Analisis de Calidad
- Referencia de Documentos (Recepcion de Producto, Producción, Movimiento de Inventario, Devolucion de Cliente) en Analisis de Calidad.
- Consulta inteligente para procesar Acciones de Analisis de Calidad
- Estado de Producto en Instancia de Atributos y en Lote

## Contexto

- Se establece atributos de calidad de solo lectura cuando el documento se procesa en estado.

## Detalle Técnico

- Add Sequence and ProductType on Quality Action Settings
- Add Identifier to Quality Action Setting Entity
- Add SortTab on Quality Action Setting Window
- Add References to Quality Analysis and Quality Action
- Add Process Quality Action Browse
- Add Product Status to Attribute Set Instance and Lot

## Enlaces relacionados

- https://github.com/erpcya/Control-NATULAC/issues/22#issuecomment-2044685949

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.4.2
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
- Quality-Analysis-Material: 1.2.4

## Requerimientos

- XML's a aplicar:

  - 06690_Add_Sequence_and_ProductType_on_Quality_Action_Settings.xml
  - 06700_Add_Identifier_to_Quality_Action_Settings.xml
  - 06710_Add_Sort_tab_on_Quality_Action_Setting.xml
  - 06720_Add_Fields_to_Quality_Analysis.xml
  - 06730_Add_Business_Partner_info_to_Quality_Action_Settings.xml
  - 06740_Add_Business_Partner_Info_to_Quality_Action.xml
  - 06750_Add_Locator_and_Attribute_Set_instance_to_Quality_Action.xml
  - 06760_Add_References_to_Quality_Analysis_And_Quality_Action.xml
  - 06770_Rename_Product_Status_Field.xml
  - 06780_Fix_Return_References_on_Quality_Action.xml
  - 06790_Add_Process_Quality_Action_Browse.xml
  - 06800_Add_Quality_Analysis_References_on_Distribution_Order.xml
  - 06810_Add_Product_Reference_on_Quality_Action.xml
  - 06820_Add_Inventory_Movement_Reference.xml
  - 06830_Fix_WhereClause_Generate_Document_Action_Browser.xml
  - 06840_Add_Product_Status_to_Attribute_Instance_And_Lot.xml
