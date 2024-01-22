import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "Nosotros",
    icon: "user",
    prefix: "/about/",
    children: [
      { text: "Nosotros", icon: "user", link: "", activeMatch: "^/about/$" },      
      {
        text: "Noticias",
        prefix: "news/",
        children: [
          "2023-01-01-adempiere-394",
        ],
      },
      {
        text: "Nuestros Servicios",
        children: [
          "services/",
          "advanced-functional-support-scheme/",
          "standard-procedures/"
        ],
      },
      {
        text: "Otros Servicios",
        children: [
          "other-services/e-commerce",
          "other-services/bot",
          "other-services/devices",
        ],
      },
      
    ],
  },
  {
    text: "Producto",
    icon: "box",
    prefix: "/product/",
    children: [
      { text: "Producto", link: "", icon: "box", activeMatch: "^/product/$" },      
      {
        text: "Tecnología",
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
    icon: "lightbulb",
    prefix: "/docs/",
    children: [
      { text: "ADempiere Estándar", link: "", icon: "book", activeMatch: "^/docs/$" },
      {
        text: "Gestión Básica",
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
        text: "Datos Maestros",
        children: [
          "master-data/business-partner",
          "master-data/product",
          "master-data/warehouse",
          "master-data/reports"
        ],
      },
      {
        text: "Gestiones",
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
        children: [
          "verticals/fap",
          "verticals/investment-and-loan",
        ],
      },
      {
        text: "Localización Venezuela",
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
    icon: "user-group",
    prefix: "/community/",
    children: [
      {
        text: "Comunidad",
        icon: "user-group",
        link: "",
        activeMatch: "^/community/$",
      },
      {
        text: "Comunidad de ADempiere ERP",
        children: ["code-of-conduct", "duties-and-rigths"],
      },
    ],
  },
  {
    text: "Descargas",
    icon: "circle-down",
    prefix: "/downloads/",
    children: [
      {
        text: "Descargas",
        icon: "circle-down",
        link: "",
        activeMatch: "^/downloads/$",
      },
      {
        text: "Binarios de Aplicaciones",
        children: [
          "docker/", 
          "binary/"],
      },
      {
        text: "Actualizaciones",
        children: [
          "updates/", 
          "updates/rs-5.x", 
          "updates/rs-4.x",
          "updates/rs-3.x",
          "updates/rs-2.x",
          "updates/rs-1.x",
          "updates/adempiere-3.9.4"
        ],
      },
    ],
  },
]);

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/about/",
  "/zh/product/",
  "/zh/community/",
  "/zh/support/",
  "/zh/docs/",
  "/zh/downloads/",
  "/zh/foundation/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/about/",
  "/es/product/",
  "/es/community/",
  "/es/support/",
  "/es/docs/",
  "/es/downloads/",
  "/es/foundation/",
]);
