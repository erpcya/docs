---
title: erpya-3.9.4-001-1.4.8
icon: app
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.8"
  - "2024-04-04"
article: false
---

**Fecha de Liberación:** 2024-04-04

## Novedades

- Con esta versión ya se puede enviar la descripción de la linea de documentos por cobrar como parte del nombre del producto en las impresoras fiscales.

## Contexto

- Mejora de servicio de impresión fiscal basado en el servidor streaming de gRPC.

## Detalle Técnico

- Improvement to the tax printing service based on the gRPC streaming server.

## Enlaces relacionados

- https://github.com/erpcya/Control-PROSEIN/issues/594

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
- Quality-Analysis-Material: 1.2.3

## Requerimientos

- XML's a aplicar:

## Mejoras de seguridad en ADempiere Cloud

### Introducción

Nos complace anunciar la incorporación de importantes mejoras de seguridad en ADempiere Cloud, diseñadas para proteger mejor sus datos y su infraestructura. Estas mejoras incluyen:

- Autenticación de dos factores (2FA)
- Integración con Keycloak
- Uso de HTTPS como protocolo seguro

## Beneficios de las mejoras de seguridad

### Autenticación de dos factores (2FA)

- **Mayor seguridad:** La 2FA agrega una capa adicional de seguridad al requerir un segundo factor de autenticación, como un código de un solo uso, además de su contraseña. Esto dificulta que los piratas informáticos accedan a su cuenta, incluso si tienen su contraseña.
- **Protección contra ataques de relleno de credenciales:** La 2FA ayuda a proteger contra ataques de relleno de credenciales, en los que los piratas informáticos obtienen una lista de nombres de usuario y contraseñas robadas y las prueban en diferentes sitios web.
- **Mayor tranquilidad:** La 2FA le brinda la tranquilidad de saber que su cuenta está mejor protegida contra accesos no autorizados.

### Integración con Keycloak

- **Gestión de identidades y accesos centralizada:** Keycloak es un proveedor de identidad y gestión de accesos (IAM) que le permite centralizar la gestión de usuarios y permisos en ADempiere Cloud.
- **Mayor flexibilidad:** Keycloak le permite utilizar una variedad de métodos de autenticación, incluidos SAML, OpenID Connect y LDAP.
- **Mejora de la seguridad**: Keycloak puede ayudar a mejorar la seguridad al reducir la cantidad de contraseñas que necesitan los usuarios y al proporcionar un control más granular sobre los permisos de acceso.

**Uso de HTTPS como protocolo seguro**

**Comunicación segura**:

HTTPS cifra la comunicación entre su navegador y ADempiere Cloud, protegiendo sus datos de miradas indiscretas.

- Protección contra ataques de intermediario: HTTPS ayuda a proteger contra ataques de intermediario, donde un pirata informático intercepta la comunicación entre su navegador y ADempiere Cloud.
- Mayor confianza: El uso de HTTPS contribuye a crear confianza en los usuarios al garantizar la seguridad de sus datos.

**Riesgos de seguridad sin 2FA o Keycloak**:

- Robo de contraseñas: Las contraseñas pueden ser robadas mediante ataques de phishing, malware o ingeniería social.
- Ataques de fuerza bruta: Los atacantes pueden utilizar herramientas automatizadas para adivinar la contraseña del usuario.
- Acceso no autorizado: Los usuarios con permisos elevados pueden acceder a información confidencial sin autorización.
- Suplantación de identidad: Los atacantes pueden suplantar la identidad de un usuario legítimo para acceder a la cuenta.

### Conclusión 

La 2FA y Keycloak son herramientas fundamentales para mejorar la seguridad informática de las organizaciones. La 2FA añade una capa adicional de seguridad al proceso de autenticación, mientras que Keycloak facilita la gestión de usuarios, roles y permisos. La omisión de estas medidas, junto con la falta de protocolo HTTPS, puede exponer a las organizaciones a un alto riesgo de ataques informáticos.

**Compatibilidad con métodos de autenticación tradicionales**

Los métodos de autenticación tradicionales, como el uso de un nombre de usuario y contraseña, se mantendrán hasta el 31/12/2024. A partir de esa fecha, se requerirá el uso de 2FA y/o Keycloak para acceder a ADempiere Cloud.

**Disclaimer**

El uso de las nuevas funcionalidades de seguridad es opcional. Sin embargo, le recomendamos encarecidamente que las utilice para proteger mejor sus datos y su infraestructura. Si decide no utilizar estas funcionalidades, será responsable de los riesgos de seguridad que puedan surgir. 

### Para más información 

Para obtener más información sobre las mejoras de seguridad en ADempiere Cloud, consulte la siguiente documentación:

- Documentación de ADempiere Cloud: https://docs.erpya.com/

**Recursos adicionales**:
● https://es.wikipedia.org/wiki/Autenticaci%C3%B3n_de_m%C3%BAltiples_factores: [se quitó una URL no válida] 
● https://www.keycloak.org/: https://www.keycloak.org/ 
● https://www.cloudflare.com/es-es/learning/ssl/what-is-https/: 
● https://es.wikipedia.org/wiki/HTTPS 

**Nota**: Este documento es una guía general y no sustituye la necesidad de realizar una evaluación de riesgos específica para cada organización.

### Contacto

Si tiene alguna pregunta sobre las mejoras de seguridad en ADempiere Cloud, no dude en contactarnos a través de nuestro **Soporte ADempiere ERP**
