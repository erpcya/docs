"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61392],{98707:(e,a,i)=>{i.r(a),i.d(a,{default:()=>A});var n=i(78e3);const r=(0,n.uE)('<h2 id="¿que-es-wms" tabindex="-1"><a class="header-anchor" href="#¿que-es-wms" aria-hidden="true">#</a> ¿Qué es WMS?</h2><p>Las siglas WMS (Warehouse Management System) responden a la gestión avanzada de almacenes, que deberá brindar un soporte eficiente a las operaciones realizadas en un almacén y ofrecer una amplia visión de todos los recursos de la organización.</p><p>Sin importar el nivel de inventario que cada compañía posea, el WMS resulta funcional debido a que mejora la organización de los procesos y el manejo de los inventarios en tiempo real.Es por ello, que hoy es importante la inversión en herramientas técnologicas de gestión de almacenes.</p><p>Su funcionalidad basicamente deber dar a conocer el lugar de almacenamiento de cada material, y mover de manera automática a el área de ventas los paquetes que deben ser generados con regla FIFO(First In, First Out) o en español <strong>primero en entrar, primero en salir</strong>.</p><h2 id="¿que-ofrece-adempiere" tabindex="-1"><a class="header-anchor" href="#¿que-ofrece-adempiere" aria-hidden="true">#</a> ¿Qué ofrece ADempiere?</h2><p>ADempiere ofrece en su gestión de WMS(Warehouse Management Systems) o en español sistema para la gestión de almacenes una herramienta que apoya las operaciones logísticas del almacén de una empresa:</p><ul><li>Control de inventarios.</li><li>Ubicación de las existencias.</li><li>La distribución de un almacén.</li><li>Coordinación y optimización de los movimientos con método FIFO (First In, First Out)</li></ul><p>En general ADempiere satisfacen las necesidades de operaciones logísticas internas de la compañía.</p><p>Pero su principio básico es proveer la información para permitir el control eficiente del movimiento de materiales en el almacén. La secuencia operativa de un WMS incluye entre otras tareas:</p><ul><li>Diseño y estructura de almacén</li><li>Seguimiento de Inventario</li><li>Recepción y almacenamiento</li><li>Lista de preparación de Pedido (Picking List)</li><li>Envío a Puerta de Embarque</li></ul><p><img src="https://github.com/erpcya/docs/assets/9578152/80054ea0-78c6-4706-b485-b4f4a3c7a177" alt="image"></p><h2 id="¿de-que-servira-en-tu-empresa" tabindex="-1"><a class="header-anchor" href="#¿de-que-servira-en-tu-empresa" aria-hidden="true">#</a> ¿De qué servirá en tu Empresa?</h2><ol><li>Te da el control que necesitas en entradas, salidas y localización de productos en tus almacenes.</li><li>Más precisión del inventario y estado actual.</li><li>Optimización en la asignación de tareas de tus colaboradores.</li><li>Disminución de erores en las notas de entrega de tus clientes.</li></ol><p><img src="https://github.com/erpcya/docs/assets/9578152/891618f6-428d-4aa9-ae2a-4c516f0e7c63" alt="image"></p><h2 id="ejecucion-en-adempiere" tabindex="-1"><a class="header-anchor" href="#ejecucion-en-adempiere" aria-hidden="true">#</a> Ejecución en ADempiere</h2><p>Ahora bien, en Adempiere existen dos formas en las que se puede ejecutar este proceso, de forma automática bajo la siguiente estructura:</p><ul><li>Orden de Venta</li><li>Generación de Orden de Salida Automática</li><li>Generación de Orden de Distribución Automática</li><li>Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque</li><li>Reporte de Planificación de Embarque (Picking List)</li></ul><p>También puede generarse de manera manual permitiendo así una agrupación de ordne de venta y planificación de orden de flete, bajo la siguiente estructura:</p><ul><li>Orden de Venta</li><li>Orden de Salida</li><li>Generación de Orden de Distribución Automática</li><li>Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque</li><li>Orden de Flete</li><li>Reporte de Orden de Flete</li><li>Reporte de Planificación de Embarque</li></ul><h3 id="orden-de-salida-manual" tabindex="-1"><a class="header-anchor" href="#orden-de-salida-manual" aria-hidden="true">#</a> Orden de Salida Manual</h3><p><img src="https://github.com/erpcya/docs/assets/9578152/e3676964-a07c-4dc9-843b-a0627013b290" alt="image"></p>',21),l=(0,n.Uk)("Cree una "),t={href:"https://docs.erpya.com/docs/sales-management/order.html",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("orden de Venta"),o=(0,n.Uk)(" de manera habitual."),s=(0,n._)("li",null,"Vaya a la sección gestión Avanzada de Almacén",-1),c=(0,n._)("li",null,"Luego seleccione la opción Operación de Salida",-1),u=(0,n._)("li",null,"Luego seleccione la opción Generar Orden de Salida desde orden de Venta/Distribución",-1),m=(0,n._)("li",null,"En este formulario se procede a colocar los datos de filtro para la búsqueda",-1),p=(0,n._)("li",null,"Procedemos a selecionar las órdenes de ventas que vamos a enviar a salida",-1),g=(0,n._)("li",null,"Luego las lineas de las órdenes de ventas (Productos)",-1),h=(0,n._)("li",null,"Finalmente seleccionamos la opción ok.",-1),b=(0,n.uE)('<div class="custom-container info"><p class="custom-container-title">Nota</p><p>En este punto de manera automática, se genera la orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.</p></div><ol start="9"><li>Finalmente vaya a la opción Gestión de Distribución-&gt;Gestión de Flete-&gt; Generar Orden de Flete</li><li>Seleccione la Orden de Salida previamente generada.</li><li>Seleccione la fecha en la que se realizará el envío de la mercancia.</li><li>De igual modo coloque el transporte, Vehículo, y conductor responsable de la carga.</li></ol><h3 id="orden-de-salida-automatica" tabindex="-1"><a class="header-anchor" href="#orden-de-salida-automatica" aria-hidden="true">#</a> Orden de Salida Automática</h3><p><img src="https://github.com/erpcya/docs/assets/9578152/45d9943b-6e1e-4ab5-813e-453b53f48482" alt="image"></p>',4),v=(0,n.Uk)("Cree una "),f={href:"https://docs.erpya.com/docs/sales-management/order.html",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("orden de Venta"),q=(0,n.Uk)(" de manera habitual."),S=(0,n._)("div",{class:"custom-container info"},[(0,n._)("p",{class:"custom-container-title"},"Nota"),(0,n._)("p",null,"En este punto de manera automática, se genera la orden de Salida,orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.")],-1),O={},A=(0,i(13860).Z)(O,[["render",function(e,a){const i=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,(0,n._)("ol",null,[(0,n._)("li",null,[l,(0,n._)("a",t,[d,(0,n.Wm)(i)]),o]),s,c,u,m,p,g,h]),b,(0,n._)("ol",null,[(0,n._)("li",null,[v,(0,n._)("a",f,[y,(0,n.Wm)(i)]),q])]),S])}]])},99967:(e,a,i)=>{i.r(a),i.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-45fda9ae","path":"/docs/distribution-management/warehouse-management.html","title":"Gestión de Almacén Avanzado","lang":"es-ES","frontmatter":{"title":"Gestión de Almacén Avanzado","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"¿Qué es WMS? Las siglas WMS (Warehouse Management System) responden a la gestión avanzada de almacenes, que deberá brindar un soporte eficiente a las operaciones realizadas en un a","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/distribution-management/warehouse-management.html"}],["meta",{"property":"og:title","content":"Gestión de Almacén Avanzado"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-06-29T20:24:23.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2023-06-29T20:24:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"¿Qué es WMS?","slug":"¿que-es-wms","children":[]},{"level":2,"title":"¿Qué ofrece ADempiere?","slug":"¿que-ofrece-adempiere","children":[]},{"level":2,"title":"¿De qué servirá en tu Empresa?","slug":"¿de-que-servira-en-tu-empresa","children":[]},{"level":2,"title":"Ejecución en ADempiere","slug":"ejecucion-en-adempiere","children":[{"level":3,"title":"Orden de Salida Manual","slug":"orden-de-salida-manual","children":[]},{"level":3,"title":"Orden de Salida Automática","slug":"orden-de-salida-automatica","children":[]}]}],"git":{"createdTime":1687896686000,"updatedTime":1688070263000,"contributors":[{"name":"Waditza","email":"wdtz@users.noreply.github.com","commits":16}]},"readingTime":{"minutes":2.37,"words":711},"filePathRelative":"docs/distribution-management/warehouse-management.md","localizedDate":"27 de junio de 2023"}')}}]);