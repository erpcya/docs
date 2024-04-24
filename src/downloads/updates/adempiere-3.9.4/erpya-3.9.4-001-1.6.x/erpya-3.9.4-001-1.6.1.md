---
title: erpya-3.9.4-001-1.6.1
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.1"
  - "2024-04-25"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-25

## Novedades

- Con este cambio ya es posible personalizar la firma de correos enviados desde ADempiere.

## Uso

Después de aplicar los cambios y las configuraciones necesarias, por defecto se enviará una firma como la que se ve a continuación

![adempiere-patch-zk-1.6.1-img1](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img1.png)

Como opciones válidas se puede configurar la firma personalizada en la información de compañía y se sobrescribe con la información de la organización

En orden de prioridades, la firma será tomada de la siguiente manera:

### Por Usuario

Toma la firma del usuario si la tiene configurada

![adempiere-patch-zk-1.6.1-img2](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img2.png)

### Por Organización

Toma la firma de la organización si la tiene configurada

![adempiere-patch-zk-1.6.1-img3](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img3.png)

### Por Compañía

Toma la firma de la compañía si la tiene configurada

![adempiere-patch-zk-1.6.1-img4](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img4.png)

---

Si no tiene configurada ninguna firma configurada tomará por defecto el siguiente mensaje:

En Inglés:

```
Sent by @AD_Client.Name@ using <a href=\"https://www.erpya.com\">ADempiere ERP</a>
```

En Español:

```
Sent by @AD_Client.Name@ using <a href=\"https://www.erpya.com\">ADempiere ERP</a>
```

## Corrección de Parámetros en Reportes

Se corrige problema con los valores a visualizar en los parámetros de reportes ejecutados desde un programador de procesos, esto se encuentra reportado en la sección [**Enlaces relacionados**](https://docs.erpya.com/downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-1.6.x/erpya-3.9.4-001-1.6.1.html#enlaces-relacionados)

## Corrección de Lógica contable de diferencias contables inter-compañia

En la contabilidad de la asignacion de pagos cuando existe una diferencia contable intercompañia los montos que asienta intercompañia son distintos a los originales

- Muestra actual

![adempiere-patch-zk-1.6.1-img5](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img5.jpeg)

- Muestra corregida

![adempiere-patch-zk-1.6.1-img6](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img6.jpeg)

## Se agrega soporte a Sobreescribir Instancia de Atributos en Acción de Análisis de Calidad

![adempiere-patch-zk-1.6.1-img7](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img7.png)

## Contexto

- Se Agrega firma de correos basado en notificaciones de ERPYA.
- Corrección de parámetros en reportes.
- Corrección de Lógica contable de diferencias contables inter-compañia
- Se agrega soporte a Sobreescribir Instancia de Atributos en Acción de Análisis de Calidad

## Detalle Técnico

- Custom Email Signature
- Parameter Correction in Reports
- Correction of accounting logic for inter-company accounting differences
- Added support for Overriding Attribute Instance in Quality Analysis Action

## Enlaces relacionados

[erpcya/adempiere#60](https://github.com/erpcya/adempiere/issues/60)

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.6.0
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.3.3
- Cloud-Service-Management: 3.9.4-1.3.0
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 3.9.4-1.6.1
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.6.1
- Sales-Force-Management: 1.2.8
- Delivery-Management-Service: 1.2.0
- Travel-Agency-Management: 3.9.4-1.1.2
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis:1.1.7
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.6.1
- Kafka-Replicator-Client: 1.0.9
- Kafka-Uti- ADempiereBase: 3.9.3-rs-4.3
- CST-STD: rs-37.6
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
- Cloud-Service-Management: 1.2.9
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 1.6.1
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.6.1
- Sales-Force-Management: 3.9.4-1.3.1
- Delivery-Management-Service: 3.9.4-1.2.1
- Travel-Agency-Management: 1.1.1
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis: 1.1.4
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.6.1
- Kafka-Replicator-Client: 1.0.9
- Kafka-Util: 1.0.2
- Core-Tools: 1.6.1
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

- Aplicar XML's:

  - 06850_Delete_columns_for_Quality_Analysis_Setting.xml
  - 06860_Add_field_for_overwrite_attributes_on_Lot.xml
  - 06870_Add_field_Attribute_Set_instance_Base.xml
  - 06880_Add_Flag_for_is_Attribute_instance_Changed.xml
