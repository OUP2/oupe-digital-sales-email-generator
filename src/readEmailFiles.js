const fse = require("fs-extra");
const path = require("path");

exports.EMAILS = {
  header_only_invoice: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/3_VD_Encabezado_sin_licencias_con_factura.html"
    ),
    { encoding: "utf-8" }
  ),
  email_closing: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/13_VD_Cierre_correo.html"
    ),
    { encoding: "utf-8" }
  ),
  email_return: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/14_VD_Devoluciones.html"
    ),
    { encoding: "utf-8" }
  ),
  header_with_licenses_with_invoice: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/1_VD_Encabezado_con_licencias_con_factura.html"
    ),
    { encoding: "utf-8" }
  ),
  header_with_licenses_no_invoice: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/2_VD_Encabezado_con_licencias_sin_factura.html"
    ),
    { encoding: "utf-8" }
  ),
  warning_multiple_platforms: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/4_VD_Aviso_varias_plataformas.html"
    ),
    { encoding: "utf-8" }
  ),
  body_blink_uses: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/5_VD_Blink-Usos.html"
    ),
    { encoding: "utf-8" }
  ),
  body_blink_individual: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/6_VD_Blink-Individuales.html"
    ),
    { encoding: "utf-8" }
  ),
  body_blink_academy: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/7_VD_Blink-individuales_OP_ACAD.html"
    ),
    { encoding: "utf-8" }
  ),
  body_marsupial: fse.readFileSync(
    path.resolve(__dirname, "./assets/VD_PlantillasCorreo/8_VD_Marsupial.html"),
    { encoding: "utf-8" }
  ),
  body_OLB: fse.readFileSync(
    path.resolve(__dirname, "./assets/VD_PlantillasCorreo/9_VD_OLB.html"),
    { encoding: "utf-8" }
  ),
  body_online_practice: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/10_VD_OnlinePractice.html"
    ),
    { encoding: "utf-8" }
  ),
  body_OOSP: fse.readFileSync(
    path.resolve(__dirname, "./assets/VD_PlantillasCorreo/11_VD_OOSP.html"),
    { encoding: "utf-8" }
  ),
  body_ORC: fse.readFileSync(
    path.resolve(__dirname, "./assets/VD_PlantillasCorreo/12_VD_ORC.html"),
    { encoding: "utf-8" }
  ),
  internal_email: fse.readFileSync(
    path.resolve(
      __dirname,
      "./assets/VD_PlantillasCorreo/15_VD_Correo_interno.html"
    ),
    { encoding: "utf-8" }
  ),
};
