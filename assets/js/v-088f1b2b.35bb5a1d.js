"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[69343],{96391:(a,e,o)=>{o.r(e),o.d(e,{default:()=>r});var n=o(78744);const i=[(0,n.Fv)('<p>Es un documento que se aplica a una factura para aumentar el monto de la misma, una nota de débito se podría realizar bajo el concepto de gastos administrativos y siempre nace de un documento afectado como una factura o una nota de débito.</p><p>A continuación es explicado el procedimiento para generar en ADempiere, una nota de débito de cuentas por pagar.</p><h2 id="registro-de-nota-de-debito" tabindex="-1"><a class="header-anchor" href="#registro-de-nota-de-debito" aria-hidden="true">#</a> Registro de Nota de Débito</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Documentos por Pagar</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image158.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Documentos por Pagar</strong>, con los diferentes registros de documentos por pagar cargados a ADempiere.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image159.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 2. Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Registro Nuevo</strong>, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro en la ventana <strong>Documentos por Pagar</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image160.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 3. Icono Registro Nuevo de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual se encuentra realizando la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image161.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 4. Campo Organización de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Orden de Compra</strong>, la orden de compra por la cual requiere realizar la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image162.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 5. Campo Orden de Compra de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Fecha de la Orden</strong>, la fecha contable de la orden seleccionada en el campo <strong>Orden de Compra</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image163.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 6. Campo Fecha de la Orden de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de identificación correspondiente al documento que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image164.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 7. Campo No del Documento de la Ventana Documentos por Pagar</p><p>Note</p><p>Si no es ingresado ningún valor en este campo, ADempiere tomará el número de secuencia establecido para el tipo de documento seleccionado al guardar el mismo.</p><p>Introduzca en el campo <strong>Referencia de Orden de Socio del Negocio</strong>, la referencia de orden de socio del negocio.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image165.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 8. Campo Referencia de Orden de Socio del Negocio de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción con respecto al documento que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image166.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 9. Campo Descripción de la Ventana Documentos por Pagar</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento Destino</strong>, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image167.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 10. Campo Tipo de Documento Destino de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Fecha de Facturación</strong>, la fecha en la cual es realizado el documento.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image168.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 11. Campo Fecha de Facturación de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Fecha Contable</strong>, la fecha en la cual es realizado el documento.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image169.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 12. Campo Fecha Contable de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio al cual le esta aplicando la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image170.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 13. Campo Socio del Negocio de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Dirección de Socio del Negocio</strong>, la dirección del socio del negocio seleccionado anteriormente en el campo <strong>Socio del Negocio</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image171.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 14. Campo Dirección de Socio del Negocio de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Usuario</strong>, el usuario del socio del negocio seleccionado anteriormente en el campo <strong>Socio del Negocio</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image172.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 15. Campo Usuario de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios con la cual requiere generar la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image173.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 16. Campo Lista de Precios de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Moneda</strong>, la moneda definida para la lista de precios seleccionada.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image174.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 17. Campo Moneda de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente de comprañía relacionado con la nota de débito que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image175.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 18. Campo Agente Compañía de la Ventana Documentos por Pagar</p><p>El checklist <strong>Imprimir Descuento</strong>, indica se va a imprimir el descuento en la factura y la orden.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image176.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 19. Checklist Imprimir Descuento de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Cheque</strong>, para indicar como será pagado el documento.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image177.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 20. Opción Cheque de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Crear Desde Factura</strong>, para crear el documento desde una orden, autorización de devolución, factura o recepción.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image178.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 21. Opción Crear Desde Factura de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Generar Recibos desde Facturas</strong>, para crear y procesar el recibo de la entrega desde la factura cuando se encuentre correcta y completa.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image179.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 22. Opción Generar Recibos desde Facturas de la Ventana Documentos por Pagar</p><p>El checklist <strong>Documento Fiscal</strong>, indica que el registro en el que se encuentra es un documento fiscal.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image180.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 23. Checklist Documento Fiscal de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Contol No</strong>, el número de control fiscal correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image181.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 24. Campo Control No de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Código Sunagro</strong>, el código sunagro correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image182.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 25. Campo Código Sunagro de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Lista</strong>, la lista correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image183.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 26. Campo Lista de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Región de Ventas</strong>, la región de ventas correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image184.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 27. Campo Región de Ventas de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura a la cual requiere aplicar la nota de débito que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image185.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 28. Campo Factura Afectada de la Ventana Documentos por Pagar</p><p>Al tildar el checklist <strong>No Aplica Retención de I.V.A</strong>, no es aplicada la retención al documento que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image186.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 29. Checklist No Aplica Retención de IVA de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos correspondiente para el registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image187.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 30. Campo Centro de Costos de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Concepto de Retención de I.S.L.R</strong>, el concepto de retención que requiere aplicar al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image188.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 31. Campo Concepto de Retención de ISLR de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image189.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 32. Campo Actividad de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Retención de Terceros</strong>, la retención correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image190.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 33. Campo Retención de Terceros de la Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña <strong>Factura</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image191.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 34. Icono Guardar Cambios de la Ventana Documentos por Pagar</p><h3 id="linea-de-la-factura" tabindex="-1"><a class="header-anchor" href="#linea-de-la-factura" aria-hidden="true">#</a> Línea de la Factura</h3><p>Seleccione la pestaña <strong>Línea de la Factura</strong>, para cargar los detalles de la nota de débito que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image192.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 35. Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>No. Línea</strong>, el número de línea correspondiente al registro que se encuentra realizando en la pestaña <strong>Línea de la Factura</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image193.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 36. Campo No Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Producto</strong>, el producto por el cual se encuentra aplicando la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image194.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 37. Campo Producto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo por el cual se encuentra aplicando la nota de débito.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image195.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 38. Campo Cargo de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image196.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 39. Campo Descripción de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Cantidad</strong>, la cantidad correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image197.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 40. Campo Cantidad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>UM</strong>, la unidad de medida relacionada al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image198.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 41. Campo UM de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Introduzca en el campo <strong>Precio</strong>, el precio correspondiente a la nota de débito que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image199.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 42. Campo Precio de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Precio Actual</strong>, el precio actual ingresado en el campo <strong>Precio</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image200.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 43. Campo Precio Actual de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Precio de Lista</strong>, el precio de lista oficial.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image201.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 44. Campo Precio de Lista de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Impuesto</strong>, el tipo de impuesto a aplicar en el registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image202.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 45. Campo Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Total Impuesto</strong>, el monto total del impuesto aplicado al documento que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image203.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 46. Campo Total Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Factura Afectada</strong>, la factura afectada para asignar la nota automáticamente.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image204.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 47. Campo Factura Afectada de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image205.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 48. Campo Actividad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos correspondiente al registro que se encuentra realizando.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image206.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 49. Campo Centro de Costos de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Neto de Línea</strong>, el neto de la línea.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image207.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 50. Campo Neto de Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Podrá visualizar en el campo <strong>Total de la Línea</strong>, el resultado de la sumatoria del valor en el campo <strong>Neto de Línea</strong> más el valor en el campo <strong>Total del Impuesto</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image208.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 51. Campo Total de la Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione el icono <strong>Guardar Cambios</strong>, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña <strong>Línea de la Factura</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image209.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 52. Icono Guardar Cambios de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar</p><p>Seleccione la pestaña principal <strong>Factura</strong> y ubique la opción <strong>Completar</strong>, en la parte inferior izquierda de la ventana.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image210.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 53. Pestaña Principal Factura de la Ventana Documentos por Pagar</p><p>Seleccione la opción <strong>Completar</strong>, para completar el documento <strong>Nota de Débito de CxP</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image211.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 54. Opción Completar de la Ventana Documentos por Pagar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para culminar el proceso.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image212.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 55. Acción Completar y Opción OK de la Ventana Documentos por Pagar</p><h2 id="consultar-asignacion-de-nota-de-debito-aplicada" tabindex="-1"><a class="header-anchor" href="#consultar-asignacion-de-nota-de-debito-aplicada" aria-hidden="true">#</a> Consultar Asignación de Nota de Débito Aplicada</h2><p>Ubique el registro de la factura asociada a la nota de débito, en este caso se ubica la factura <strong>1000110</strong> y posteriormente seleccione la pestaña <strong>Facturas Pagadas</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image213.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 56. Registro de la Factura Asociada a la Nota de débito de CxP</p><p>Haga clic contrario en el campo <strong>Asignación</strong> y seleccione la opción <strong>Acercar</strong> en el menú visualizado.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image214.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 57. Acercar Asignación de Nota de débito de CxP</p><p>Podrá visualizar el registro de la asignación creada al completar el documento <strong>Nota de Débito de CxP</strong>.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image215.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 58. Registro de Asignación de Nota de débito de CxP</p><p>Seleccione la pestaña <strong>Asignaciones</strong>, para visualizar la información del monto de la nota de débito aplicada a la factura.</p><figure><img src="/assets/img/docs/purchase-management/pum-purchase-image216.png" alt="Campo" tabindex="0" loading="lazy"><figcaption>Campo</figcaption></figure><p>Imagen 59. Pestaña Asignaciones de la Ventana Consulta de Asignación</p>',184)],t={},r=(0,o(73570).A)(t,[["render",function(a,e){return(0,n.uX)(),(0,n.CE)("div",null,i)}]])},65206:(a,e,o)=>{o.r(e),o.d(e,{data:()=>n});const n=JSON.parse('{"key":"v-088f1b2b","path":"/docs/purchase-management/debit-note.html","title":"Nota de Débito","lang":"es-ES","frontmatter":{"title":"Nota de Débito","category":"Documentation","star":9,"sticky":9,"article":false,"description":"Es un documento que se aplica a una factura para aumentar el monto de la misma, una nota de débito se podría realizar bajo el concepto de gastos administrativos y siempre nace de un documento afectado como una factura o una nota de débito. A continuación es explicado el procedimiento para generar en ADempiere, una nota de débito de cuentas por pagar.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/purchase-management/debit-note.html"}],["meta",{"property":"og:title","content":"Nota de Débito"}],["meta",{"property":"og:description","content":"Es un documento que se aplica a una factura para aumentar el monto de la misma, una nota de débito se podría realizar bajo el concepto de gastos administrativos y siempre nace de un documento afectado como una factura o una nota de débito. A continuación es explicado el procedimiento para generar en ADempiere, una nota de débito de cuentas por pagar."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Nota de Débito\\",\\"description\\":\\"Es un documento que se aplica a una factura para aumentar el monto de la misma, una nota de débito se podría realizar bajo el concepto de gastos administrativos y siempre nace de un documento afectado como una factura o una nota de débito. A continuación es explicado el procedimiento para generar en ADempiere, una nota de débito de cuentas por pagar.\\"}"]]},"headers":[{"level":2,"title":"Registro de Nota de Débito","slug":"registro-de-nota-de-debito","link":"#registro-de-nota-de-debito","children":[{"level":3,"title":"Línea de la Factura","slug":"linea-de-la-factura","link":"#linea-de-la-factura","children":[]}]},{"level":2,"title":"Consultar Asignación de Nota de Débito Aplicada","slug":"consultar-asignacion-de-nota-de-debito-aplicada","link":"#consultar-asignacion-de-nota-de-debito-aplicada","children":[]}],"git":{"createdTime":1679398095000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":2},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":7.69,"words":2306},"filePathRelative":"docs/purchase-management/debit-note.md","localizedDate":"21 de marzo de 2023","excerpt":"<p>Es un documento que se aplica a una factura para aumentar el monto de la misma, una nota de débito se podría realizar bajo el concepto de gastos administrativos y siempre nace de un documento afectado como una factura o una nota de débito.</p>\\n<p>A continuación es explicado el procedimiento para generar en ADempiere, una nota de débito de cuentas por pagar.</p>","autoDesc":true}')}}]);