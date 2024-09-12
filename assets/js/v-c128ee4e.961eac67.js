"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15541],{43569:(e,a,o)=>{o.r(a),o.d(a,{default:()=>l});var i=o(78744);const t=(0,i.Fv)('<p>Representa el Monto Acumulado para el cálculo de las utilidades de cada empleado, Desde el Inicio de su periodo anual, o en su defecto desde la fecha de ingreso del Empleado. Este concepto será almacenado con la Finalidad de que sea utilizado para el Cálculo del Promedio de Salario Utilidades.</p><p>Registre los datos de la siguiente manera:</p><ul><li><p>Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna</p></li><li><p>Registre los Empleados agrupados por procesos de Nóminas. Es decir utilice una Hoja de cálculo para Agrupar los empleados Ej: Nómina Semanal Mixta (NSM), Nómina Quincenal Mixta (NQM), Nómina Mensual Mixta (NMM), Nómina Semanal (NS), Nómina Quincenal (NQ) y Nómina Mensual (NM).</p></li><li><p>El Valor correspondiente para este concepto será de Tipo “MONTO”, por lo tanto debe registrar el valor en la columna Monto.</p></li></ul><h2 id="campo-de-cedula-de-identidad" tabindex="-1"><a class="header-anchor" href="#campo-de-cedula-de-identidad" aria-hidden="true">#</a> Campo de Cédula de Identidad:</h2><ul><li><p><strong>Formato de Texto</strong>: La columna destinada a la cédula de identidad del empleado debe contener únicamente caracteres alfabéticos del tipo <code>V</code> seguidos por un número.</p><ul><li>No se permiten espacios ni caracteres especiales.</li></ul></li><li><p><strong>Campo de Monto</strong>:</p><ul><li><p><strong>Formato de Número</strong>: Para campos que representan montos, utilice el punto decimal (.) como separador de decimales. Ejemplo: <code>1.296,39</code> debería ser expresado como 1296.39.</p></li><li><p><strong>Símbolos de Moneda</strong>: No se permiten símbolos de moneda, como <code>$</code> o <code>Bs.</code>, en los campos de monto.</p></li><li><p><strong>Formatos Adicionales</strong>: No deben incluirse espacios en blanco ni otros formatos en los campos de monto.</p></li></ul></li><li><p>La estructura de datos es:</p></li></ul><table><thead><tr><th>Cédula</th><th>Monto</th></tr></thead><tbody><tr><td>V00000000</td><td>1296.39</td></tr></tbody></table><h2 id="exportar-archivos-desde-diferentes-plataformas" tabindex="-1"><a class="header-anchor" href="#exportar-archivos-desde-diferentes-plataformas" aria-hidden="true">#</a> Exportar archivos desde diferentes plataformas</h2>',7),r=(0,i.Fv)('<h2 id="cargar-archivo-de-nomina" tabindex="-1"><a class="header-anchor" href="#cargar-archivo-de-nomina" aria-hidden="true">#</a> Cargar archivo de nómina</h2><ul><li>Dirigirse a <strong>Gestión del Sistema</strong> &gt; <strong>Datos</strong> &gt; <strong>Importar Datos</strong> &gt; <strong>Cargador de Archivos</strong></li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/c492d93d-d7b3-463b-91a6-fe1f54ca1b20" alt="cargador-de-archivos" tabindex="0" loading="lazy"><figcaption>cargador-de-archivos</figcaption></figure><p><strong>Imagen 2. Cargador de Archivos</strong></p><ul><li>Seleccionar el archivo a cargar</li></ul><figure><img src="https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/788a5201-dab6-48b0-9304-c8cd52669c84" alt="seleccionar-archivo1" tabindex="0" loading="lazy"><figcaption>seleccionar-archivo1</figcaption></figure><p><strong>Imagen 3. Seleccionar el archivo</strong></p><ul><li>Se despliega la ventana para subir el archivo. Seleccionar <strong>Choose file</strong></li></ul><figure><img src="https://i.imgur.com/SQksHDj.png" alt="subir" tabindex="0" loading="lazy"><figcaption>subir</figcaption></figure><p><strong>Imagen 4. Ventana para subir archivo</strong></p><ul><li>Seleccionar el archivo y <strong>cargar archivo (upload)</strong></li></ul><figure><img src="https://i.imgur.com/yZXDplx.png" alt="dtn" tabindex="0" loading="lazy"><figcaption>dtn</figcaption></figure><p><strong>Imagen 5. Archivo a Importar</strong></p><ul><li>Seleccionar el formato que coincida con el archivo.</li></ul><figure><img src="https://i.imgur.com/wWF9ltu.png" alt="formato" tabindex="0" loading="lazy"><figcaption>formato</figcaption></figure><ul><li>Seleccionar próximo <strong>registro</strong></li></ul><figure><img src="https://i.imgur.com/qUHYssm.png" alt="prox-registro" tabindex="0" loading="lazy"><figcaption>prox-registro</figcaption></figure><ul><li>Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.</li></ul><figure><img src="https://i.imgur.com/EO7wqKu.png" alt="formato-verificacion" tabindex="0" loading="lazy"><figcaption>formato-verificacion</figcaption></figure><ul><li>Luego de ser verificado y este todo los campos correctamente, seleccionar <strong>OK</strong> para cargar el archivo.</li></ul><figure><img src="https://i.imgur.com/DOjL0AI.png" alt="carga-de-archivo" tabindex="0" loading="lazy"><figcaption>carga-de-archivo</figcaption></figure><ul><li><p>Para verificar que el archivo se cargó correctamente ir a:</p><ul><li><strong>Gestión del Sistema</strong> &gt; <strong>Datos</strong> &gt; <strong>Importar Datos</strong> &gt; <strong>Importar Movimientos de Nómina</strong> y buscar el registro correspondiente.<br><img src="https://i.imgur.com/KUHMuAP.png" alt="seleccion-del-archivo" loading="lazy"></li></ul></li></ul><figure><img src="https://i.imgur.com/9UXkjEh.png" alt="formato" tabindex="0" loading="lazy"><figcaption>formato</figcaption></figure>',23),d={},l=(0,o(73570).A)(d,[["render",function(e,a){const o=(0,i.g2)("RouterLink");return(0,i.uX)(),(0,i.CE)("div",null,[t,(0,i.Lk)("p",null,[(0,i.bF)(o,{to:"/docs/data-importation/payroll-importation/accumulated-profits/export-files/"},{default:(0,i.k6)((()=>[(0,i.eW)("Haz click aquí!")])),_:1})]),r])}]])},8097:(e,a,o)=>{o.r(a),o.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-c128ee4e","path":"/docs/data-importation/payroll-importation/accumulated-profits/","title":"Acumulado de Utilidades","lang":"es-ES","frontmatter":{"title":"Acumulado de Utilidades","category":"Importación","icon":"address-card","star":9,"sticky":9,"article":false,"description":"Representa el Monto Acumulado para el cálculo de las utilidades de cada empleado, Desde el Inicio de su periodo anual, o en su defecto desde la fecha de ingreso del Empleado. Este concepto será almacenado con la Finalidad de que sea utilizado para el Cálculo del Promedio de Salario Utilidades.","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/data-importation/payroll-importation/accumulated-profits/"}],["meta",{"property":"og:title","content":"Acumulado de Utilidades"}],["meta",{"property":"og:description","content":"Representa el Monto Acumulado para el cálculo de las utilidades de cada empleado, Desde el Inicio de su periodo anual, o en su defecto desde la fecha de ingreso del Empleado. Este concepto será almacenado con la Finalidad de que sea utilizado para el Cálculo del Promedio de Salario Utilidades."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-09-09T15:56:48.000Z"}],["meta",{"property":"article:author","content":"ERP Consultores y Asociados, C.A."}],["meta",{"property":"article:modified_time","content":"2024-09-09T15:56:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Acumulado de Utilidades\\",\\"description\\":\\"Representa el Monto Acumulado para el cálculo de las utilidades de cada empleado, Desde el Inicio de su periodo anual, o en su defecto desde la fecha de ingreso del Empleado. Este concepto será almacenado con la Finalidad de que sea utilizado para el Cálculo del Promedio de Salario Utilidades.\\"}"]]},"headers":[{"level":2,"title":"Campo de Cédula de Identidad:","slug":"campo-de-cedula-de-identidad","link":"#campo-de-cedula-de-identidad","children":[]},{"level":2,"title":"Exportar archivos desde diferentes plataformas","slug":"exportar-archivos-desde-diferentes-plataformas","link":"#exportar-archivos-desde-diferentes-plataformas","children":[]},{"level":2,"title":"Cargar archivo de nómina","slug":"cargar-archivo-de-nomina","link":"#cargar-archivo-de-nomina","children":[]}],"git":{"createdTime":1725897408000,"updatedTime":1725897408000,"contributors":[{"name":"Jesús Albujas","email":"134967453+jesusalbujas@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"docs/data-importation/payroll-importation/accumulated-profits/README.md","localizedDate":"9 de septiembre de 2024","excerpt":"<p>Representa el Monto Acumulado para el cálculo de las utilidades de cada empleado, Desde el Inicio de su periodo anual, o en su defecto desde la fecha de ingreso del Empleado. Este concepto será almacenado con la Finalidad de que sea utilizado para el Cálculo del Promedio de Salario Utilidades.</p>","autoDesc":true}')}}]);