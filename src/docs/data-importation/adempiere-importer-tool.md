---
title: Herramienta de Importación Avanzada
icon: tools
category: Importación
star: 10
sticky: 10
tag:
  - Importación
  - Herramientas
  - Técnico
  - Funcional
article: false
---

# Herramienta de Importación Avanzada de ADempiere

Esta documentación detalla el uso, funcionalidades y trucos de la **Herramienta de Importación de ADempiere** (Adempiere Importer Tool). Esta herramienta permite la carga masiva y actualización de datos mediante archivos CSV/TSV, utilizando el modelo de persistencia (PO) de ADempiere para asegurar que todas las validaciones, *callouts* y lógica de negocio se ejecuten correctamente.

## ¿Qué es y para qué sirve?

Es una utilidad flexible diseñada para importar datos al sistema sin necesidad de desarrollar procesos de carga personalizados para cada tabla. A diferencia de la importación estándar, esta herramienta:
- **Detecta automáticamente** el delimitador del archivo (coma, punto y coma, tabulador).
- **Ejecuta la lógica de negocio** de ADempiere (validadores, eventos, workflows).
- **Resuelve claves foráneas** automáticamente usando nombres o códigos en lugar de IDs.
- Permite **Insertar** nuevos registros o **Actualizar** existentes.

## Sintaxis Avanzada y "Trucos"

El poder de esta herramienta reside en la sintaxis especial que puedes usar en los encabezados de tu archivo CSV. A continuación se explican los "trucos" principales:

### 1. Búsqueda de Valores Referenciados `[...]`

Normalmente, las bases de datos requieren IDs numéricos (por ejemplo, `C_BPartner_ID = 1000045`). Sin embargo, en un CSV es mucho más fácil usar nombres comprensibles (por ejemplo, "Proveedor X").

Para lograr esto, se utilizan los corchetes `[]` en el nombre de la columna:

**Sintaxis:** `NombreColumnaID[ColumnaDeBusqueda]`

**Ejemplo:**
Si quieres asignar un Grupo de Socios de Negocio (`C_BP_Group_ID`) pero solo conoces su nombre, usa:
```csv
C_BP_Group_ID[Name]
```
Esto le dice al sistema: *"Busca en la tabla de grupos de socios de negocio el registro donde `Name` sea igual al valor de mi CSV, y usa su ID."*

### 2. Identificador Único `/K`

La bandera `/K` (Key) se utiliza para indicar qué columna(s) hacen único al registro. Esto es vital para:
- Evitar duplicados en el archivo.
- Identificar qué registro actualizar cuando se usa el modo **Actualización**.

**Sintaxis:** `NombreColumna/K`

**Ejemplo:**
Para un Socio de Negocio, la "Llave" o código único suele ser la columna `Value`.
```csv
Value/K
```

### 3. Insensibilidad a Mayúsculas/Minúsculas

¡No te preocupes por la exactitud de las mayúsculas! La herramienta es inteligente.
- `name`, `Name`, `NAME` → Todos funcionan igual.
- `c_bpartner_id[value]`, `C_BPartner_ID[Value]` → Ambos son válidos.

### 4. Fechas Dinámicas

Puedes usar palabras clave especiales para fechas, lo cual es muy útil para campos como "Fecha de Inicio" o "Fecha de Contrato":

| Palabra Clave | Descripción |
|--------------|-------------|
| `now` | Fecha y hora actual del sistema. |
| `today` | Fecha actual (sin hora). |

## Ejemplo Real: Creando un Socio de Negocio

Vamos a crear un archivo CSV para importar un nuevo **Socio de Negocio (Cliente)**.

**Requerimientos:**
1.  **Código (Value):** Debe ser único (Ej: `CLI-001`). usaremos `/K`.
2.  **Nombre (Name):** Nombre legal del cliente.
3.  **Grupo (C_BP_Group_ID):** Queremos asignarlo al grupo "Clientes Standard" buscando por su nombre `Name`.
4.  **País (C_Country_ID):** Asignar país "Venezuela" buscando por su nombre `Name`.
5.  **Activo (IsActive):** Indicar explícitamente que está activo (`Y`).

### Estructura del CSV (Ejemplo)

```csv
Value/K,Name,C_BP_Group_ID[Name],C_Country_ID[Name],IsCustomer,IsActive
CLI-001,Empresa Ejemplo S.A.,Clientes Standard,Venezuela,Y,Y
CLI-002,Tecnología Global C.A.,Grandes Clientes,Venezuela,Y,Y
```

### Desglose del Ejemplo

1.  **`Value/K`**:
    *   `Value`: Es el campo de la base de datos para el código del socio.
    *   `/K`: Indica que `CLI-001` es la llave. Si intentamos subir dos líneas con `CLI-001`, la herramienta dará error de duplicado.
2.  **`Name`**: Mapeo directo de texto.
3.  **`C_BP_Group_ID[Name]`**:
    *   El sistema irá a la tabla `C_BP_Group`.
    *   Buscará un registro donde `Name` sea "Clientes Standard".
    *   Tomará el ID de ese registro y lo guardará en `C_BP_Group_ID`.
4.  **`C_Country_ID[Name]`**: similar al anterior, busca el país "Venezuela" en la tabla `C_Country`.

## ¿Cómo se usa en el Sistema?

1.  **Preparar el Archivo**: Crea tu archivo CSV o Excel (guardado como CSV/TSV) siguiendo la sintaxis explicada.
2.  **Proceso de Importación**:
    *   Navega a la ventana de proceso **"Importar Archivo"** (o el nombre asignado en tu instancia).
    *   Referencia el **Tab (Pestaña)** destino donde quieres cargar los datos (Ej: *Socio de Negocio*).
    *   Selecciona tu archivo.
    *   Selecciona el modo: **Insertar** (para nuevos) o **Actualizar** (para modificar existentes).
3.  **Ejecutar**: El sistema procesará línea por línea.
    *   Si hay errores (ej: no encuentra el Grupo "Clientes Standard"), el proceso se detendrá o reportará el error, asegurando la integridad de los datos.

## Recomendaciones Finales

- **Columnas de Sistema**: No necesitas incluir `AD_Client_ID` ni `AD_Org_ID` a menos que quieras forzar un valor diferente al de tu contexto actual. La herramienta los llena automáticamente.
- **Auditoría**: Los campos `Created`, `CreatedBy`, `Updated`, `UpdatedBy` son mantenidos automáticamente por el sistema.
- **Seguridad**: La herramienta valida que las columnas y tablas existan en el diccionario de datos de ADempiere, protegiendo contra inyecciones SQL.
