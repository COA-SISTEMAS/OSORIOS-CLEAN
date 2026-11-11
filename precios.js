/* ============================================================
   PANEL DE PRECIOS — OSORIOS CLEAN
   Edita este archivo para cambiar tarifas y opciones del cotizador.
   No necesitas modificar index.html para actualizar los valores.
   Todos los precios están expresados en lempiras (L).
   IMPORTANTE: si agregas un espacio, inclúyelo en Exprés, General
   y Profunda usando exactamente el mismo nombre.
   ============================================================ */

/* 1) PRECIO BASE POR ÁREA (para un inmueble con factor 1.00, ej. Casa pequeña) */
const PRECIOS={
 'Exprés':  {Sala:200,Cocina:220,Habitaciones:200,'Baños':210,Comedor:200,Patio:200,Garaje:200,Ventanas:200,'Recepción':210,Escritorios:200,'Sala de espera':200,'Área de atención':220},
 'General': {Sala:255,Cocina:285,Habitaciones:245,'Baños':275,Comedor:235,Patio:255,Garaje:255,Ventanas:225,'Recepción':265,Escritorios:225,'Sala de espera':255,'Área de atención':285},
 'Profunda':{Sala:340,Cocina:390,Habitaciones:330,'Baños':370,Comedor:300,Patio:350,Garaje:350,Ventanas:280,'Recepción':360,Escritorios:280,'Sala de espera':350,'Área de atención':390}
};
/* 2) FACTOR POR TIPO DE INMUEBLE (1 = precio base, 1.2 = 20 % más, 0.8 = 20 % menos) */
const FACTORES={'Cuarto individual':0.8,'Apartamento pequeño':0.9,'Apartamento mediano':1,'Apartamento grande':1.2,'Casa pequeña':1,'Casa mediana':1.15,'Casa grande':1.35,'Casa muy grande':1.6,'Oficina':1.1,'Consultorio':1.1};
/* 3) OTROS AJUSTES */
const AJUSTES={
 recargoPorPlanta:0.10, // 0.10 = 10 % por cada planta adicional
 precioMinimo:100,      // ningún concepto cobra menos de este valor
 redondeo:10            // redondea los precios a múltiplos de L 10 (usa 1 para no redondear)
};

/* 4) DESCRIPCIÓN DE CADA TIPO DE INMUEBLE */
const D={'Cuarto individual':'Habitación con o sin baño','Apartamento pequeño':'Espacio compacto','Apartamento mediano':'Varias áreas','Apartamento grande':'Espacios amplios','Casa pequeña':'Vivienda compacta','Casa mediana':'Vivienda familiar','Casa grande':'Varios ambientes','Casa muy grande':'Amplia, varias áreas','Oficina':'Área administrativa','Consultorio':'Área profesional'};
/* 5) NOMBRES Y DESCRIPCIONES DE LOS TIPOS DE LIMPIEZA */
const C={'Exprés':'Mantenimiento ligero','General':'Limpieza habitual','Profunda':'Atención detallada'};

