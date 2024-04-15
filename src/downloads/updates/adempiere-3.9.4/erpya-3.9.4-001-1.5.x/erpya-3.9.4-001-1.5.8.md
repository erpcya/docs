---
title: erpya-3.9.4-001-1.5.8
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.8"
  - "2024-04-15"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-15

## Novedades

- Con este cambio se agrega una funcionalidad que permite validar la Cédula y RIF al momento de crear o actualizar un socio de negocio, específicamente su **cédula** o **rif**.

Con este cambio se agrega una funcionalidad que permite validar la Cédula y RIF al momento de crear o actualizar un socio de negocio, específicamente su cédula o rif.

### Valores Permitidos

- J: Jurídico
- V: Venezolano
- E: Extranjero
- G: Gobierno
- X: Aplica para Extranjeros sin documento venezolado (para importar)
- El tamaño máximo del texto debe ser 10 dígitos incluyendo la primera letra

### Dónde se encuentra la validación?

Ésta validación se dispara cuando se está creando un socio de negocio o cuando se está modificando el campo Cédula(Value) o RIF(TaxID)

Si los datos que se intentan colocar no cumplen con los requisitos mínimos el usuario recibirá el siguiente mensaje:

Inglés:

```
Invalid Business Partner Value Format
You should use the format [V, J, G, E, X (External unkow)][00000000]
Example: V20000000 / J400000000
```

Español

```
Formato de C.I./R.I.F No Válido
Debería usar el formato [V, J, G, E, X (Para Extranjeros sin Documento)][00000000]
Ejemplo: V20000000 / J400000000
```

## Enlaces Relacionados

- [Configuración del campo Número de Identificación para que sólo reciba caracteres números (9 caracteres XXX.XXX.XXX) #600](https://github.com/erpcya/Control-PROSEIN/issues/600)

## Contexto

- Se agrega validación al momento de crear socios de negocio

## Detalle Técnico

- Validation is added when creating business partners

## Soporte a Versiones

- ADempiereBase: 3.9.4-1.5.5
- CST-STD: rs-37.9
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.3.3
- Cloud-Service-Management: 3.9.4-1.3.0
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 3.9.4-1.5.8
- RethinkDB-Replicator-Client: 1.1.5
- Third-Party-Access: 1.0.6
- Fiscal-Printer: 11.5.8
- Sales-Force-Management: 1.2.8
- Delivery-Management-Service: 1.2.0
- Travel-Agency-Management: 3.9.4-1.1.2
- Withholding-Engine: 1.2.8
- Migration-Tools: 1.0.4
- LVE: 2.2.3
- Performance-Analysis:1.1.7
- Queue-Manager: 1.0.7
- Notification-Queue: 1.1.6
- Point-Of-Sales-Improvements: 1.5.8
- Kafka-Replicator-Client: 1.0.9
- Kafka-Uti- ADempiereBase: 3.9.3-rs-4.3
- CST-STD: rs-37.6
- Consigned-Material: 1.3.0
- Exchange-Operation-System: 1.2.9
- Cloud-Service-Management: 1.2.9
- Cash-Management: 1.1.6
- Currency-Convert-Documents: 1.1.8
- Farmer-Assistance-Program: 1.5.8
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
- Point-Of-Sales-Improvements: 1.5.8
- Kafka-Replicator-Client: 1.0.9
- Kafka-Util: 1.0.2
- Core-Tools: 1.5.8
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

- Utilizar la versión 2.2.7 o superior de la librería io.github.adempiere:location-venezuela
- Agregar un registro en el configurador del sistema con el código ENABLE_CODE_TYPE_VALIDATION y valor **Y** con nivel Organización y organización *
- Reiniciar el servicio de ADempiere
