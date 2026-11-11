/* ============================================================
   PANEL DE PRECIOS — OSORIOS CLEAN
   Edita este archivo para cambiar tarifas y opciones del cotizador.
   No necesitas modificar index.html para actualizar los valores.
   Todos los precios están expresados en lempiras (L).
   IMPORTANTE: si agregas un espacio, inclúyelo en Exprés, General
   y Profunda usando exactamente el mismo nombre.
   ============================================================ */

/* TARIFAS DIRECTAS: cada inmueble tiene precios propios por tipo de limpieza y espacio.
   Puedes cambiar cualquier importe aquí sin afectar los demás inmuebles. */
const TARIFAS={
  "Cuarto individual": {
    "Exprés": {
      "Sala": 160,
      "Cocina": 180,
      "Habitaciones": 160,
      "Baños": 170,
      "Comedor": 160,
      "Patio": 160,
      "Garaje": 160,
      "Ventanas": 160,
      "Recepción": 170,
      "Escritorios": 160,
      "Sala de espera": 160,
      "Área de atención": 180
    },
    "General": {
      "Sala": 200,
      "Cocina": 230,
      "Habitaciones": 200,
      "Baños": 220,
      "Comedor": 190,
      "Patio": 200,
      "Garaje": 200,
      "Ventanas": 180,
      "Recepción": 210,
      "Escritorios": 180,
      "Sala de espera": 200,
      "Área de atención": 230
    },
    "Profunda": {
      "Sala": 270,
      "Cocina": 310,
      "Habitaciones": 260,
      "Baños": 300,
      "Comedor": 240,
      "Patio": 280,
      "Garaje": 280,
      "Ventanas": 220,
      "Recepción": 290,
      "Escritorios": 220,
      "Sala de espera": 280,
      "Área de atención": 310
    }
  },
  "Apartamento pequeño": {
    "Exprés": {
      "Sala": 180,
      "Cocina": 200,
      "Habitaciones": 180,
      "Baños": 190,
      "Comedor": 180,
      "Patio": 180,
      "Garaje": 180,
      "Ventanas": 180,
      "Recepción": 190,
      "Escritorios": 180,
      "Sala de espera": 180,
      "Área de atención": 200
    },
    "General": {
      "Sala": 230,
      "Cocina": 260,
      "Habitaciones": 220,
      "Baños": 250,
      "Comedor": 210,
      "Patio": 230,
      "Garaje": 230,
      "Ventanas": 200,
      "Recepción": 240,
      "Escritorios": 200,
      "Sala de espera": 230,
      "Área de atención": 260
    },
    "Profunda": {
      "Sala": 310,
      "Cocina": 350,
      "Habitaciones": 300,
      "Baños": 330,
      "Comedor": 270,
      "Patio": 320,
      "Garaje": 320,
      "Ventanas": 250,
      "Recepción": 320,
      "Escritorios": 250,
      "Sala de espera": 320,
      "Área de atención": 350
    }
  },
  "Apartamento mediano": {
    "Exprés": {
      "Sala": 200,
      "Cocina": 220,
      "Habitaciones": 200,
      "Baños": 210,
      "Comedor": 200,
      "Patio": 200,
      "Garaje": 200,
      "Ventanas": 200,
      "Recepción": 210,
      "Escritorios": 200,
      "Sala de espera": 200,
      "Área de atención": 220
    },
    "General": {
      "Sala": 260,
      "Cocina": 290,
      "Habitaciones": 250,
      "Baños": 280,
      "Comedor": 240,
      "Patio": 260,
      "Garaje": 260,
      "Ventanas": 230,
      "Recepción": 270,
      "Escritorios": 230,
      "Sala de espera": 260,
      "Área de atención": 290
    },
    "Profunda": {
      "Sala": 340,
      "Cocina": 390,
      "Habitaciones": 330,
      "Baños": 370,
      "Comedor": 300,
      "Patio": 350,
      "Garaje": 350,
      "Ventanas": 280,
      "Recepción": 360,
      "Escritorios": 280,
      "Sala de espera": 350,
      "Área de atención": 390
    }
  },
  "Apartamento grande": {
    "Exprés": {
      "Sala": 240,
      "Cocina": 260,
      "Habitaciones": 240,
      "Baños": 250,
      "Comedor": 240,
      "Patio": 240,
      "Garaje": 240,
      "Ventanas": 240,
      "Recepción": 250,
      "Escritorios": 240,
      "Sala de espera": 240,
      "Área de atención": 260
    },
    "General": {
      "Sala": 310,
      "Cocina": 340,
      "Habitaciones": 290,
      "Baños": 330,
      "Comedor": 280,
      "Patio": 310,
      "Garaje": 310,
      "Ventanas": 270,
      "Recepción": 320,
      "Escritorios": 270,
      "Sala de espera": 310,
      "Área de atención": 340
    },
    "Profunda": {
      "Sala": 410,
      "Cocina": 470,
      "Habitaciones": 400,
      "Baños": 440,
      "Comedor": 360,
      "Patio": 420,
      "Garaje": 420,
      "Ventanas": 340,
      "Recepción": 430,
      "Escritorios": 340,
      "Sala de espera": 420,
      "Área de atención": 470
    }
  },
  "Casa pequeña": {
    "Exprés": {
      "Sala": 200,
      "Cocina": 220,
      "Habitaciones": 200,
      "Baños": 210,
      "Comedor": 200,
      "Patio": 200,
      "Garaje": 200,
      "Ventanas": 200,
      "Recepción": 210,
      "Escritorios": 200,
      "Sala de espera": 200,
      "Área de atención": 220
    },
    "General": {
      "Sala": 260,
      "Cocina": 290,
      "Habitaciones": 250,
      "Baños": 280,
      "Comedor": 240,
      "Patio": 260,
      "Garaje": 260,
      "Ventanas": 230,
      "Recepción": 270,
      "Escritorios": 230,
      "Sala de espera": 260,
      "Área de atención": 290
    },
    "Profunda": {
      "Sala": 340,
      "Cocina": 390,
      "Habitaciones": 330,
      "Baños": 370,
      "Comedor": 300,
      "Patio": 350,
      "Garaje": 350,
      "Ventanas": 280,
      "Recepción": 360,
      "Escritorios": 280,
      "Sala de espera": 350,
      "Área de atención": 390
    }
  },
  "Casa mediana": {
    "Exprés": {
      "Sala": 230,
      "Cocina": 250,
      "Habitaciones": 230,
      "Baños": 240,
      "Comedor": 230,
      "Patio": 230,
      "Garaje": 230,
      "Ventanas": 230,
      "Recepción": 240,
      "Escritorios": 230,
      "Sala de espera": 230,
      "Área de atención": 250
    },
    "General": {
      "Sala": 290,
      "Cocina": 330,
      "Habitaciones": 280,
      "Baños": 320,
      "Comedor": 270,
      "Patio": 290,
      "Garaje": 290,
      "Ventanas": 260,
      "Recepción": 300,
      "Escritorios": 260,
      "Sala de espera": 290,
      "Área de atención": 330
    },
    "Profunda": {
      "Sala": 390,
      "Cocina": 450,
      "Habitaciones": 380,
      "Baños": 430,
      "Comedor": 350,
      "Patio": 400,
      "Garaje": 400,
      "Ventanas": 320,
      "Recepción": 410,
      "Escritorios": 320,
      "Sala de espera": 400,
      "Área de atención": 450
    }
  },
  "Casa grande": {
    "Exprés": {
      "Sala": 270,
      "Cocina": 300,
      "Habitaciones": 270,
      "Baños": 280,
      "Comedor": 270,
      "Patio": 270,
      "Garaje": 270,
      "Ventanas": 270,
      "Recepción": 280,
      "Escritorios": 270,
      "Sala de espera": 270,
      "Área de atención": 300
    },
    "General": {
      "Sala": 340,
      "Cocina": 380,
      "Habitaciones": 330,
      "Baños": 370,
      "Comedor": 320,
      "Patio": 340,
      "Garaje": 340,
      "Ventanas": 300,
      "Recepción": 360,
      "Escritorios": 300,
      "Sala de espera": 340,
      "Área de atención": 380
    },
    "Profunda": {
      "Sala": 460,
      "Cocina": 530,
      "Habitaciones": 450,
      "Baños": 500,
      "Comedor": 410,
      "Patio": 470,
      "Garaje": 470,
      "Ventanas": 380,
      "Recepción": 490,
      "Escritorios": 380,
      "Sala de espera": 470,
      "Área de atención": 530
    }
  },
  "Casa muy grande": {
    "Exprés": {
      "Sala": 320,
      "Cocina": 350,
      "Habitaciones": 320,
      "Baños": 340,
      "Comedor": 320,
      "Patio": 320,
      "Garaje": 320,
      "Ventanas": 320,
      "Recepción": 340,
      "Escritorios": 320,
      "Sala de espera": 320,
      "Área de atención": 350
    },
    "General": {
      "Sala": 410,
      "Cocina": 460,
      "Habitaciones": 390,
      "Baños": 440,
      "Comedor": 380,
      "Patio": 410,
      "Garaje": 410,
      "Ventanas": 360,
      "Recepción": 420,
      "Escritorios": 360,
      "Sala de espera": 410,
      "Área de atención": 460
    },
    "Profunda": {
      "Sala": 540,
      "Cocina": 620,
      "Habitaciones": 530,
      "Baños": 590,
      "Comedor": 480,
      "Patio": 560,
      "Garaje": 560,
      "Ventanas": 450,
      "Recepción": 580,
      "Escritorios": 450,
      "Sala de espera": 560,
      "Área de atención": 620
    }
  },
  "Oficina": {
    "Exprés": {
      "Sala": 220,
      "Cocina": 240,
      "Habitaciones": 220,
      "Baños": 230,
      "Comedor": 220,
      "Patio": 220,
      "Garaje": 220,
      "Ventanas": 220,
      "Recepción": 230,
      "Escritorios": 220,
      "Sala de espera": 220,
      "Área de atención": 240
    },
    "General": {
      "Sala": 280,
      "Cocina": 310,
      "Habitaciones": 270,
      "Baños": 300,
      "Comedor": 260,
      "Patio": 280,
      "Garaje": 280,
      "Ventanas": 250,
      "Recepción": 290,
      "Escritorios": 250,
      "Sala de espera": 280,
      "Área de atención": 310
    },
    "Profunda": {
      "Sala": 370,
      "Cocina": 430,
      "Habitaciones": 360,
      "Baños": 410,
      "Comedor": 330,
      "Patio": 390,
      "Garaje": 390,
      "Ventanas": 310,
      "Recepción": 400,
      "Escritorios": 310,
      "Sala de espera": 390,
      "Área de atención": 430
    }
  },
  "Consultorio": {
    "Exprés": {
      "Sala": 220,
      "Cocina": 240,
      "Habitaciones": 220,
      "Baños": 230,
      "Comedor": 220,
      "Patio": 220,
      "Garaje": 220,
      "Ventanas": 220,
      "Recepción": 230,
      "Escritorios": 220,
      "Sala de espera": 220,
      "Área de atención": 240
    },
    "General": {
      "Sala": 280,
      "Cocina": 310,
      "Habitaciones": 270,
      "Baños": 300,
      "Comedor": 260,
      "Patio": 280,
      "Garaje": 280,
      "Ventanas": 250,
      "Recepción": 290,
      "Escritorios": 250,
      "Sala de espera": 280,
      "Área de atención": 310
    },
    "Profunda": {
      "Sala": 370,
      "Cocina": 430,
      "Habitaciones": 360,
      "Baños": 410,
      "Comedor": 330,
      "Patio": 390,
      "Garaje": 390,
      "Ventanas": 310,
      "Recepción": 400,
      "Escritorios": 310,
      "Sala de espera": 390,
      "Área de atención": 430
    }
  }
};
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

