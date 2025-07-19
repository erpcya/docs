---
title: Políticas de Seguridad - ERP+ Mobile App
category: Producto
star: 9
sticky: 9
tag:
  - Servicios
  - Producto
  - Seguridad
  - ERP+

article: false
---

# Políticas de Seguridad - ERP+ Mobile App

## Security Policies - ERP+ Mobile App

---

## 1. Política de Autenticación y Autorización

### 1.1 Control de Acceso
- Solo usuarios autorizados con permisos específicos pueden acceder a las funcionalidades de marcaje
- Los permisos se validan en tiempo real contra el servidor ADempiere
- Acceso diferenciado según roles: Administrador, Supervisor, Operador

---

## 2. Protección de Datos Biométricos

### 2.1 Almacenamiento de Huellas Dactilares
- Las huellas dactilares se almacenan únicamente en el dispositivo de marcaje
- No se transmiten ni almacenan huellas dactilares en el servidor
- Solo se transmiten identificadores únicos y resultados de verificación
- Los datos biométricos se encriptan localmente en el dispositivo

### 2.2 Transmisión de Datos
- Todas las comunicaciones entre la app móvil y el servidor utilizan HTTPS/TLS 1.3
- Los datos sensibles se encriptan en tránsito usando algoritmos AES-256
- Certificados SSL válidos y actualizados en todas las comunicaciones

---

## 3. Gestión de Comandos y Operaciones

### 3.1 Comandos Autorizados
- **Enviar Empleado**: Solo usuarios con permisos de administración
- **Leer Huellas**: Operación de solo lectura, sin modificación de datos
- **Borrar Empleados**: Requiere confirmación y registro de auditoría
- **Limpiar Registros**: Solo administradores del sistema

### 3.2 Registro de Auditoría
- Todas las operaciones se registran con timestamp y usuario
- Logs de auditoría se almacenan por un mínimo de 2 años
- Acceso a logs restringido a administradores del sistema

---

## 4. Protección de Información de Empleados

### 4.1 Datos Personales
- Cumplimiento con leyes de protección de datos personales
- Información de empleados accesible solo a personal autorizado
- Contratos de empleados protegidos con encriptación adicional
- Acceso a información personal limitado por necesidad de conocimiento

### 4.2 Almacenamiento Local
- Datos sensibles no se almacenan permanentemente en el dispositivo
- Cache temporal se limpia automáticamente al cerrar sesión
- Información de empleados se descarga bajo demanda

---

## 5. Seguridad del Dispositivo

### 5.1 Requisitos del Dispositivo
- Sistema operativo actualizado (Android 8.0+ / iOS 12+)
- Aplicación instalada desde tiendas oficiales únicamente
- Dispositivo no rooteado/jailbreak
- Antivirus activo recomendado

### 5.2 Protección de la Aplicación
- Código ofuscado para prevenir ingeniería inversa
- Detección de dispositivos comprometidos
- Bloqueo automático tras múltiples intentos fallidos de acceso
- Capacidad de borrado remoto en caso de pérdida del dispositivo

---

## 6. Monitoreo y Respuesta a Incidentes

### 6.1 Monitoreo Continuo
- Monitoreo 24/7 de accesos y operaciones
- Alertas automáticas para actividades sospechosas
- Análisis de patrones de uso para detectar anomalías

### 6.2 Respuesta a Incidentes
- Protocolo de respuesta inmediata a incidentes de seguridad
- Notificación a usuarios afectados en caso de brecha de datos
- Procedimientos de recuperación y restauración de servicios
- Análisis post-incidente y mejora de medidas de seguridad

---

## 7. Cumplimiento Legal

### 7.1 Normativas Aplicables
- Cumplimiento con leyes de protección de datos locales
- Regulaciones de seguridad de la información
- Estándares de la industria para aplicaciones móviles empresariales

### 7.2 Certificaciones
- Auditorías de seguridad regulares
- Certificaciones de cumplimiento según industria
- Evaluaciones de vulnerabilidades periódicas

---

## 8. Contacto de Seguridad

Para reportar incidentes de seguridad o consultas relacionadas con la seguridad de la aplicación ERP+:

**Email**: info@erpya.com
**Teléfono**: +58 414-5697183
**Horario**: Lunes a Viernes 08:00 - 17:00 (GMT-4)

---

---

# Security Policies - ERP+ Mobile App

## 1. Authentication and Authorization Policy

### 1.1 Access Control
- Only authorized users with specific permissions can access time tracking features
- Permissions are validated in real-time against ADempiere server
- Differentiated access according to roles: Administrator, Supervisor, Operator

---

## 2. Biometric Data Protection

### 2.1 Fingerprint Storage
- Fingerprints are stored only on the time tracking device
- Fingerprints are not transmitted or stored on the server
- Only unique identifiers and verification results are transmitted
- Biometric data is locally encrypted on the device

### 2.2 Data Transmission
- All communications between mobile app and server use HTTPS/TLS 1.3
- Sensitive data is encrypted in transit using AES-256 algorithms
- Valid and updated SSL certificates in all communications

---

## 3. Command and Operations Management

### 3.1 Authorized Commands
- **Send Employee**: Only users with administration permissions
- **Read Fingerprints**: Read-only operation, no data modification
- **Delete Employees**: Requires confirmation and audit logging
- **Clear Records**: System administrators only

### 3.2 Audit Logging
- All operations are logged with timestamp and user
- Audit logs are stored for a minimum of 2 years
- Log access restricted to system administrators

---

## 4. Employee Information Protection

### 4.1 Personal Data
- Compliance with personal data protection laws
- Employee information accessible only to authorized personnel
- Employee contracts protected with additional encryption
- Access to personal information limited by need-to-know basis

### 4.2 Local Storage
- Sensitive data is not permanently stored on the device
- Temporary cache is automatically cleared when closing session
- Employee information is downloaded on-demand

---

## 5. Device Security

### 5.1 Device Requirements
- Updated operating system (Android 8.0+ / iOS 12+)
- Application installed from official stores only
- Device not rooted/jailbroken
- Active antivirus recommended

### 5.2 Application Protection
- Obfuscated code to prevent reverse engineering
- Detection of compromised devices
- Automatic lockout after multiple failed access attempts
- Remote wipe capability in case of device loss

---

## 6. Monitoring and Incident Response

### 6.1 Continuous Monitoring
- 24/7 monitoring of access and operations
- Automatic alerts for suspicious activities
- Usage pattern analysis to detect anomalies

### 6.2 Incident Response
- Immediate response protocol for security incidents
- Notification to affected users in case of data breach
- Recovery and service restoration procedures
- Post-incident analysis and security measure improvement

---

## 7. Legal Compliance

### 7.1 Applicable Regulations
- Compliance with local data protection laws
- Information security regulations
- Industry standards for enterprise mobile applications

### 7.2 Certifications
- Regular security audits
- Industry compliance certifications
- Periodic vulnerability assessments

---

## 8. Security Contact

To report security incidents or queries related to ERP+ application security:

**Email**: info@erpya.com
**Phone**: +58 414-5697183
**Hours**: Monday to Friday 08:00 - 17:00 (GMT-4) 