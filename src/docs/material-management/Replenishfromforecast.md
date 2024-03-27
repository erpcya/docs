---
title: Reabastecimiento desde Pronóstico de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén. 

No existe una solución única para el reabastecimiento, sino más bien una variedad de métodos y políticas que pueden adaptarse a diferentes situaciones.En esta oportunidad ADempiere le brindará una solición basada en el reabastecimiento de empresas manufactureras, esta estrategia consiste en estimar cantidades necesarias para dar cumplimiento a un pronóstico de ventas en un periodo determinado.

## Configuración Esencial

- **Almacén:** Es necesario que exista al menos un almacén con el check **Reabastecimiento desde Pronostico** en estado **verdadero**, dicho(s) almacén es instrumento de evaluación en cantidades en compromiso de recibo, existencia, demanda y cantidad a reabastecer para el reabastecimiento
  
- **Producto:** Es necesario que los productos que van a ser evaluados contenga al menos una lista de materiales, con los productos de tipo insumos/matería prima para su producción.

- **Lista de Materiales:** Es necesario que exista al menos una lista de materiales en el producto a producir(Producto Terminado o Semielaborado) con el check **Reabastecimiento desde Pronostico** en estado **verdadero**, dicho registro es utilizado para calcular las cantidades y productos necesarios en base a demanda.
  
- **Pronóstico de Ventas:** La base de cálculo para la demanda en la cantidad estimada para la venta de producto terminado, por lo que es necesario un pronóstico valido dentro del período de ejecución del plan de reabastecimiento.

## Formulación de Demanda

- **Cantidad en Existencia:** Cantidad existente de producto en almacenes con el check **Reabastecimiento desde Pronostico** en estado **verdadero**.

- **Cantidad en Demanda:** Cantidad resultante de la siguiente fórmula:
  
          **Variables:**
  
          **IPS**= INSUMOS DE PRODUCTO SEMIELABORADO
          **IPT**= INSUMOS PRODUCTO TERMINADO
          **CNLDM**= CANTIDAD NECESARIA(LDM)
          **CNPT**= CANTIDAD NECESARIA PARA PRODUCIR PT
          **CEP**= CANTIDAD ESTIMADA PARA VENTA(PRONÓSTICO)
  
                **IPS**= CNLDM*CNPT*CEP
                **IPT**= CNLDM*CEP

  
## Ejecución de Plan de Reabastecimiento en Base a Pronóstico

- Vaya al menú **Gestión de Materiales**->**Reabastecimiento desde Pronóstico**
![image](https://github.com/erpcya/docs/assets/9578152/8c1d321a-5c03-44e2-9360-6ea3e8ffa493)

- Seleccione la opción **Procesar Reabastecimiento(Basado en Pronóstico)**
![image](https://github.com/erpcya/docs/assets/9578152/8fcd0068-2107-4972-8c60-fc6c1c1257d4)

- A continuación veremos la siguiente pantalla
![image](https://github.com/erpcya/docs/assets/9578152/22b21d38-41be-4e03-8f87-c737fe4fe385)

- Indique el **Calendario operacional**, se refiere a la definición del calendario de planificación productiva en una empresa.
![image](https://github.com/erpcya/docs/assets/9578152/f09a52f9-bf73-46f2-8910-7a723fc36192)

- Indique la **Definición de período**. se refiere a la forma en la que según la unidad (Trimestre, Mes, Año u otro) en la que puedo ver expresado los períodos,
![image](https://github.com/erpcya/docs/assets/9578152/455ce076-d9aa-465a-a407-c630346af083)

- Seleccione el rango del **Período operacional**, dependerá de la definición, para este ejemplo por ser mensual podemos ver desde qué mes hasta qué mes se ejecutará el plan de reabastecimiento.
![image](https://github.com/erpcya/docs/assets/9578152/73034f78-a47e-4e0d-b667-f2e2278e0b29)

- Seleccione la opción **OK** para ejecutar el proceso, si el resultado es satisfactorio, se visualizará la siguiente pantalla.
![image](https://github.com/erpcya/docs/assets/9578152/46ffe594-0c35-46ec-b241-aeaf2acd8c1f)

### Resultado de la Ejecución

- Para ver el resultado vaya a la ventana **Plan de Reabastecimiento (Basado en Pronóstico)**.
![image](https://github.com/erpcya/docs/assets/9578152/d928a10a-0410-4f4f-bc17-38d29a56a4a6)

- Genera registros con los siguientes productos partes de la estimación:
  - **Materia Prima:** Perimite generar una Requisición o una Orden de Compras.
  - **Semielaborados:** Perimite generar una orden de producción.
  - **Producto Terminado:** Perimite generar una orden de producción.

## 
