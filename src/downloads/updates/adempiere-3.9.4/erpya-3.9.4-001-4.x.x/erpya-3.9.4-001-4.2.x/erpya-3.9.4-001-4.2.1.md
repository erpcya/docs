---
title: erpya-3.9.4-001-4.2.1
icon: podcast
category: Actualizaciones
star: 9
sticky: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.2.1"
  - "2026-05-05"
  - "Noticias"
article: true
---

# Fecha de Liberación: 2026-05-05

## Novedades
Hemos optimizado el motor de importación para garantizar mayor precisión financiera y prevenir errores de integridad en sus documentos.

## Contexto
Con el objetivo de hacer que sus procesos de carga masiva de datos sean más ágiles y confiables, hemos implementado una serie de mejoras en el módulo de importación. Estos ajustes aseguran que la información se procese correctamente desde el primer intento, evitando discrepancias en los cálculos y protegiendo la integridad de sus registros contables.

### 📊 Gestión de Archivos y Datos
- Mejoramos la lectura de archivos CSV al eliminar automáticamente caracteres innecesarios en los títulos, lo que permite una carga más fluida sin importar el programa de origen.
- Ajustamos la lógica de precios para que el sistema reconozca correctamente los valores ingresados, evitando errores en los totales de sus facturas.

### 🛡️ Integridad y Seguridad Documental
- Implementamos un control de seguridad que impide modificar documentos que ya han sido cerrados o finalizados, protegiendo así la contabilidad histórica.
- El sistema ahora le notificará de forma clara y en su idioma preferido si intenta realizar una acción no permitida sobre un documento ya procesado.

## Requerimientos
- No se requieren procesos adicionales por aplicar.
