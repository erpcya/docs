import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar([
    "/",
    {
      text: "Nosotros",
      icon: "id-card-clip",
      prefix: "/about/",
      collapsible: true,
      children: [
        { text: "Acerca de",
          icon: "user",
          link: "/about/", 
          activeMatch: "^/about/$" },
        {
          text: "Noticias",
          icon: "newspaper",
          prefix: "news/",
          collapsible: true,
          children: [
            "2023-01-01-adempiere-394",
            "security-improvements-in-adempiere-cloud",
          ],
        },
        {
          text: "Nuestros Servicios",
          icon: "rocket",
          collapsible: true,
          children: [
            "services/",
            "advanced-functional-support-scheme/",
            "standard-procedures/"
          ],
        },
        {
          text: "Otros Servicios",
          icon: "list-check",
          collapsible: true,
          children: [
            "other-services/e-commerce",
            "other-services/bot"
          ],
        },
      ],
    },
    {
      text: "Producto",
      icon: "box",
      prefix: "/product/",
      collapsible: true,
      children: [
        { text: "Caraterísticas de ADempiere", 
          link: "/product/", 
          icon: "box", 
          activeMatch: "^/product/$" 
        },
        {
          text: "Tecnologías",
          icon: "microchip",
          collapsible: true,
          children: [
            "technology",
            "business-process",
            "benefits",
            "source-code",
          ],
        },
      ],
    },
    {
      text: "Documentación",
      icon: "book",
      prefix: "/docs/",
      collapsible: true,
      children: [
        { text: "ADempiere Estándar", 
          link: "/docs/", 
          icon: "book", 
          activeMatch: "^/docs/$" },
        {
          text: "Gestión Básica",
          icon: "bookmark",
          collapsible: true,
          children: [
            "basic-rules/login",
            "basic-rules/user-interface",
            "basic-rules/icons-interface",
            "basic-rules/toolbar",
            "basic-rules/quick-access",
            "basic-rules/props",
          ],
        },
        {
          text: "Aplicaciones",
          icon: "house-laptop",
          collapsible: true,
          children: [
            "devices/record-weight/",
            "devices/printers",
          ],
        },
        {
          text: "Inicio de Sesión con Keycloak",
          icon: "fingerprint",
          collapsible: true,
          children: [
            "basic-rules/login-keycloak",
            "basic-rules/login-2fa",
          ],
        },
        {
          text: "Importación",
          icon: "file-export",
          collapsible: true,
          children: [
            "data-importation/"
          ],
        },
        {
          text: "Otros procedimientos",
          icon: "sliders",
          collapsible: true,
          children: [
            "other-process/"
          ],
        },
        {
          text: "Datos Maestros",
          icon: "thumbtack",
          collapsible: true,
          children: [
            "master-data/business-partner",
            "master-data/product",
            "master-data/warehouse",
            "master-data/reports"
          ],
        },
        {
          text: "Gestiones",
          icon: "layer-group",
          collapsible: true,
          children: [
            "material-management/",
            "production-management/",
            "distribution-management/",
            "sales-management/",
            "customer-relationship-management/",
            "pdv-management/",
            "purchase-management/",
            "return-management/",
            "balance-management/",
            "human-management/",
            "asset-management/",
            "accounting-management/",
          ],
        },
        {
          text: "Verticales de Negocio",
          icon: "layer-group",
          collapsible: true,
          children: [
            "verticals/fap",
            "verticals/investment-and-loan",
          ],
        },
        {
          text: "Localización Venezuela",
          icon: "layer-group",
          collapsible: true,
          children: [
            "lve/document-utility",
            "lve/procedures",
            "lve/report",
            "lve/standard-coding",
          ],
        },
      ],
    },
    {
      text: "Comunidad",
      icon: "users",
      collapsible: true,
      prefix: "/community/",
      children: [
        {
          text: "Comunidad",
          icon: "people-group",
          collapsible: true,
          link: "/community/",
          activeMatch: "^/community/$",
        },
        {
          text: "Comunidad de ADempiere ERP",
          icon: "people-carry-box",
          collapsible: true,
          children: [
            "code-of-conduct", 
            "duties-and-rigths"
          ],
        },
      ],
    },
    {
      text: "Descargas",
      icon: "download",
      collapsible: true,
      prefix: "/downloads/",
      children: [
        {
          text: "Descargas",
          icon: "download",
          link: "/downloads/",
          activeMatch: "^/downloads/$",
        },
        {
          text: "Binarios de Aplicaciones",
          icon: "file-zipper",
          collapsible: true,
          children: [
            "docker", 
            "binary"],
        },
        {
          text: "Actualizaciones",
          icon: "group-arrows-rotate",
          collapsible: true,
          children: [
            "updates/",
            "updates/adempiere-3.9.4",
            "updates/rs-5.x", 
            "updates/rs-4.x",
            "updates/rs-3.x",
            "updates/rs-2.x",
            "updates/rs-1.x",
            "updates/devices"
          ],
        },
      ],
    },
]);