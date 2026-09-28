/* ==========================================================================
   AEVIA — Datos de catálogo (mockup)

   IMPORTANTE — origen de los datos (actualizado):
   - Nombres de marca, pilares, tagline institucional: CLAUDE.md.
   - 39 de los productos de este catálogo vienen de las fichas técnicas
     REALES de Falabella.com (nombre, foto oficial, descripción, categoría,
     ingredientes/INCI, modo de uso y N° de resolución ISP cuando estaba
     disponible), filtrando solo productos vendidos "Por Falabella" —
     el sello que corresponde a lo que AEVIA distribuye (otros vendedores
     como "Sokobox" o "Swishpop" en los mismos resultados de búsqueda son
     resellers no relacionados con AEVIA y se excluyeron).
   - Por eso el catálogo real terminó en 39 productos, no 51: es el conteo
     vivo de SKUs "Por Falabella" al momento de revisar (20-sep-2026), no
     una cifra inventada. Vale la pena confirmar con la clienta si hay SKUs
     adicionales fuera de este listado.
   - Hallazgo importante: Frida Kahlo en Falabella es una línea de
     PERFUMES (Eau de Parfum), no skincare — se corrigió la categoría de
     la marca en base a esto (antes se asumía "clean beauty" tipo skincare).
   - Mario Badescu tiene ~21 SKUs reales "Por Falabella"; se incluyó un
     subset representativo de 10 (se repiten variantes de aroma de la
     misma Bruma Facial) — el listado completo se puede traer si se pide.
   - "real:true" en estos 39 = nombre, foto, descripción e ingredientes
     verificados en Falabella.com el 20-sep-2026, no inventados.
   - "real:false" = sigue sin listado real (ningún producto queda así por
     ahora — ver notas arriba si se agregan marcas/SKUs nuevos).
   ========================================================================== */

const UNSPLASH = {
  product: [
    "photo-1600428853876-fb5a850b444f","photo-1748543668676-ea8241cb3886","photo-1600428877878-1a0fd85beda8",
    "photo-1615396899839-c99c121888b0","photo-1614159102349-eddb8b985aa9","photo-1600428865979-b3c26265fa9a",
    "photo-1614159102625-41ceafda13e9","photo-1746227638992-50b1e1e0d96b","photo-1748639320154-6ba118bccc74",
    "photo-1749599018738-b8fb6c4a83e0","photo-1744798516778-22e8b144eab9","photo-1745565610492-b70156cec381",
    "photo-1745159338135-39f6b462b382","photo-1749856727296-481414df24e5","photo-1748543668751-902d6461890d",
    "photo-1664198874755-e07f2695e663","photo-1764694187667-f28a05a52c0e","photo-1787478187203-7ecefb240b6c",
    "photo-1501728636520-11c972bd5e2e","photo-1771329064159-33f758d91f4a","photo-1764694071531-008332b61f43",
    "photo-1743309026555-97f545a08490","photo-1764694187721-a5035d777fdf","photo-1764694071462-db50e50a3925",
    "photo-1747098393451-6b985f62a2c2","photo-1772987714654-2df39af2c658","photo-1764694187688-454d172e5ca0",
    "photo-1544816135-b44f18b3c5d6","photo-1775526634433-9108351b38c9","photo-1775620854129-ffebcc424f83"
  ],
  editorial: [
    "photo-1675773051474-55c4b7d2cf53","photo-1670201203116-26644750a726","photo-1695990190064-e8ca2ca16af6",
    "photo-1632765866070-3fadf25d3d5b","photo-1765607476376-9574ea76b2ee","photo-1637851496668-9310c745c3dc",
    "photo-1713207524097-596f3c17afc3","photo-1678802071553-f14c43e40002","photo-1533933269825-da140ad3132f",
    "photo-1712821125604-4ca6b1f86488","photo-1701887714736-9e848ca04634","photo-1529408570047-e4414fb17e95",
    "photo-1600349230078-13945eb9d51d","photo-1542513217-0b0eedf7005d","photo-1752245818739-890854ca3b81"
  ],
  science: [
    "photo-1614935151651-0bea6508db6b","photo-1602052577122-f73b9710adba","photo-1518152006812-edab29b069ac",
    "photo-1639772823849-6efbd173043c","photo-1581093577421-f561a654a353","photo-1582560475093-ba66accbc424",
    "photo-1581594549595-35f6edc7b762","photo-1579165466991-467135ad3110","photo-1614308459036-779d0dfe51ff",
    "photo-1614308456595-a59d48697ea8","photo-1631557676757-fcc7b1160be8","photo-1605781231474-f60dea478e8a",
    "photo-1639772823907-a716be4bdecc","photo-1618053448492-2b629c2c912c","photo-1572884267966-02340ebc90ac"
  ],
  botanical: [
    "photo-1780357275761-cba75106aa21","photo-1780402812133-1f7e3c859ea7","photo-1776146398902-bfaac7603c56",
    "photo-1762160228507-386927912e47","photo-1762827990160-9f2d35fb0fd5","photo-1764367846396-a2b9762acea3",
    "photo-1768483018807-bd0b9ab86539","photo-1780282531514-f382465dca80","photo-1778149813263-6d0c29bafcb3",
    "photo-1772927188496-5de77796a831","photo-1763154045793-4be5374b3e70","photo-1759663647722-0fd3d12da870",
    "photo-1777590786037-4291f8638d5e","photo-1776996875743-3e2c6ff21f83","photo-1771894543685-e72556f29072"
  ],
  sun: [
    "photo-1594055103006-7871176f1a7e","photo-1602088113235-229c19758e9f","photo-1578570217469-1e796dcee203",
    "photo-1692730769870-6dec0abe1bac","photo-1697454263258-ed93118070ed","photo-1590248452660-11ad917fa9d4",
    "photo-1590248452371-3459c0a04286","photo-1631053745635-5f43c807222f","photo-1749291445183-3a0636525324",
    "photo-1631983753133-d94c2cbbc52f","photo-1631983752014-a8184ba6a0e7","photo-1787040571452-db1dadb259bd",
    "photo-1739306441702-71c39c547c6d","photo-1762088444058-e46277502c50","photo-1651069381046-8db0c209a5e1"
  ],
  rose: [
    "photo-1767379462101-b93554f3025c","photo-1779733608305-e274ede691d1","photo-1789182205843-68f1f81d344d",
    "photo-1742762212843-3179bb580be1","photo-1762328872121-57204508cbd1","photo-1762328845735-5d9e13a204bf",
    "photo-1762328501612-af8eac7b5878"
  ],
  hands: [
    "photo-1585945037805-5fd82c2e60b1","photo-1728994062543-74a1dc2c9392","photo-1608068811588-3a67006b7489",
    "photo-1749143930790-65db0ee6d222","photo-1741017778557-31eaf775ce0a","photo-1632012643837-1163a4297c24",
    "photo-1601049541289-9b1b7bbbfe19","photo-1601065732058-029db52c86b4","photo-1498843053639-170ff2122f35",
    "photo-1603401712778-ab0575182f12","photo-1638609927040-8a7e97cd9d6a","photo-1632127579802-ff69469091a4",
    "photo-1629380108660-bd39c778a721","photo-1648213649604-2a079932a773","photo-1609097164673-7cfafb51b926"
  ],
  workspace: [
    "photo-1620275765334-4ed948bb4502","photo-1683921045461-b8dc5ad37740","photo-1589362281138-e3f7ebe47f1a",
    "photo-1558478551-1a378f63328e","photo-1570993492881-25240ce854f4","photo-1683921045416-3c511862e8de",
    "photo-1499750310107-5fef28a66643","photo-1544654803-b69140b285a1","photo-1523635050353-f5b60dafa07c",
    "photo-1649119162006-304b172c12d8","photo-1582319193453-d841c7a5e586","photo-1611677806845-363fccca2c51",
    "photo-1621610087641-f3e6fbe7a3d5","photo-1523634806482-b93fe271431a","photo-1505209487757-5114235191e5"
  ]
};

function unsplash(id, w = 900, h = 1100) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}
function poolImg(poolName, i) {
  const pool = UNSPLASH[poolName];
  return unsplash(pool[i % pool.length]);
}
function falabella(code) {
  return `https://media.falabella.com/falabellaCL/${code}/public`;
}

const CATEGORY_GROUPS = [
  "Limpieza", "Tónicos & Esencias", "Sérums & Tratamientos",
  "Hidratación", "Protección Solar", "Mascarillas", "Cuerpo & Labios", "Fragancia"
];

const BRANDS = [
  {
    slug: "cosrx",
    name: "COSRX",
    pillar: "Cosmocéutical",
    tagline: "[PENDIENTE] — tagline oficial de la marca",
    description: "COSRX es una marca coreana enfocada en ingredientes activos concentrados y fórmulas minimalistas, con foco en resultados dermatológicamente respaldados. [PENDIENTE — reemplazar por la descripción oficial de marca que entregó COSRX a la clienta].",
    pool: "science",
    poolAlt: "product"
  },
  {
    slug: "frida-kahlo",
    name: "Frida Kahlo",
    pillar: "Clean Beauty",
    tagline: "[PENDIENTE] — tagline oficial de la marca",
    description: "Frida Kahlo es, en el catálogo real de Falabella, una línea de perfumería (Eau de Parfum) inspirada en la artista — no una línea de skincare como se asumió en una versión anterior de este mockup. [PENDIENTE — reemplazar por la descripción oficial de marca].",
    pool: "rose",
    poolAlt: "product"
  },
  {
    slug: "hello-sunday",
    name: "Hello Sunday",
    pillar: "Clean Beauty",
    tagline: "[PENDIENTE] — tagline oficial de la marca",
    description: "Hello Sunday se especializa en protección solar diaria con fórmulas ligeras — rostro, ojos, labios y manos. [PENDIENTE — reemplazar por la descripción oficial de marca que entregó Hello Sunday a la clienta].",
    pool: "sun",
    poolAlt: "product"
  },
  {
    slug: "mario-badescu",
    name: "Mario Badescu",
    pillar: "Cosmocéutical",
    tagline: "[PENDIENTE] — tagline oficial de la marca",
    description: "Mario Badescu es una marca neoyorquina histórica de skincare, reconocida por clásicos como su Facial Spray y sus lociones tratantes. [PENDIENTE — reemplazar por la descripción oficial de marca que entregó Mario Badescu a la clienta].",
    pool: "rose",
    poolAlt: "product"
  },
  {
    slug: "tovegan",
    name: "ToVegan",
    pillar: "Inner Beauty",
    tagline: "[PENDIENTE] — tagline oficial de la marca",
    description: "ToVegan desarrolla cosmética 100% vegana y cruelty-free. [PENDIENTE — reemplazar por la descripción oficial de marca que entregó ToVegan a la clienta].",
    pool: "botanical",
    poolAlt: "hands"
  }
];

function brandBySlug(slug) { return BRANDS.find(b => b.slug === slug); }

/* ---- Catálogo real — fuente: fichas de producto en Falabella.com, ---- */
/* ---- filtradas a vendedor "Por Falabella" (20-sep-2026)            ---- */
const RAW_PRODUCTS = {
  cosrx: [
    {
      name: "Advanced Snail 96 Mucin Power Essence", cat: "Tónicos & Esencias", real: true, hero: true,
      img: falabella("80622145_1"), contenido: "100 ml", isp: "1009C-1052/25",
      desc: "Esencia facial enriquecida con un 96% de mucina de caracol: hidrata, repara y fortalece la barrera cutánea. Textura ligera de rápida absorción, ideal para todo tipo de piel.",
      ing: "Mucina de Caracol (96%).",
      uso: "Después de limpiar y tonificar, aplicar una pequeña cantidad en todo el rostro dando suaves toques con las yemas de los dedos para facilitar la absorción."
    },
    {
      name: "Peptide Collagen Hydrogel Eye Patch", cat: "Hidratación", real: true,
      img: falabella("80603790_1"), contenido: "85 g", isp: "1009C-1061/25",
      desc: "Parches de hidrogel para contorno de ojos con colágeno y péptidos: atenúan arrugas, líneas de expresión y ojeras con hidratación profunda.",
      ing: "Agua, dipropilenglicol, glicerina, niacinamida, colágeno, adenosina, acetil hexapéptido-8, palmitoil tripéptido-5, ácido hialurónico (lista completa disponible en Falabella.com).",
      uso: "Sobre piel limpia y seca, colocar los parches bajo los ojos y dejar actuar 10 minutos. Retirar y dar golpecitos con la esencia restante hasta absorber."
    },
    {
      name: "Advanced Snail 92 All In One Cream", cat: "Hidratación", real: true,
      img: falabella("80603826_1"), contenido: "100 g", isp: "1009C-1051/25",
      desc: "Crema todo-en-uno con 92% de mucina de caracol: repara la barrera cutánea, aumenta la elasticidad y aporta hidratación profunda.",
      ing: "Mucina de Caracol (92%).",
      uso: "Después de limpiar y tonificar, aplicar de manera uniforme sobre el rostro con suaves toques. Seguir con protector solar en la rutina de día."
    },
    {
      name: "Advanced Snail Mucin Glass Mask", cat: "Mascarillas", real: true,
      img: falabella("80603827_1"), contenido: "34 g (set de 3)", isp: "1009C-1060/25",
      desc: "Set de 3 mascarillas en hoja con 25% de mucina de caracol: hidratación profunda y efecto calmante, se vuelven transparentes al actuar.",
      ing: "Mucina de Caracol (25%).",
      uso: "Después de limpiar, aplicar tónico o sérum. Colocar la mascarilla 2-3 horas o hasta que se vuelva transparente; retirar y masajear la esencia restante. Recomendado como tratamiento nocturno."
    },
    {
      name: "Aloe Soothing Sun Cream SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603798_1"), contenido: "", isp: "1009C-1054/25",
      desc: "Protector solar ligero de amplio espectro UVA/UVB con extracto de aloe, para todo tipo de piel. Absorción rápida, sin sensación grasa.",
      ing: "Agua, etilhexil metoxicinamato, glicerina, dióxido de titanio, extracto de hoja de Aloe Arborescens (lista completa disponible en Falabella.com).",
      uso: "Aplicar generosamente como último paso de la rutina de día. Reaplicar durante el día según exposición solar."
    },
    {
      name: "The Niacinamide 15 Serum", cat: "Sérums & Tratamientos", real: true,
      img: falabella("80622141_1"), contenido: "20 ml", isp: "1009C-1059/25",
      desc: "Sérum con 15% de niacinamida y zinc PCA: minimiza poros, controla el sebo y atenúa marcas post-acné.",
      ing: "Water, Pentylene Glycol, Niacinamide (15%), Butylene Glycol, Zinc PCA, Trehalose, Allantoin, Tocopherol.",
      uso: "Después de limpiar, aplicar unas gotas y masajear suavemente desde el centro del rostro hacia los bordes."
    },
    {
      name: "BHA Blackhead Power Liquid", cat: "Sérums & Tratamientos", real: true,
      img: falabella("80603788_1"), contenido: "100 ml", isp: "",
      desc: "Tratamiento con ácido salicílico (BHA) para combatir puntos negros y exceso de sebo en pieles grasas. Exfolia suavemente.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Usar como tónico o esencia tras la limpieza, 2-3 veces por semana, aumentando gradualmente según tolerancia de la piel."
    },
    {
      name: "Hyaluronic Acid Hydra Power Serum", cat: "Sérums & Tratamientos", real: true,
      img: falabella("80603789_1"), contenido: "100 ml", isp: "1009C-1056/25",
      desc: "Sérum con ácido hialurónico de alta pureza para hidratación profunda y duradera en piel áspera o deshidratada.",
      ing: "Hippophae Rhamnoides Water, Butylene Glycol, Glycerin, Sodium Hyaluronate, Panthenol.",
      uso: "Después de limpiar y tonificar, aplicar en todo el rostro con suaves toques antes de la crema hidratante."
    },
    {
      name: "Low pH Good Morning Gel Cleanser", cat: "Limpieza", real: true,
      img: falabella("80603825_1"), contenido: "150 ml", isp: "1009/08",
      desc: "Limpiador facial suave de pH equilibrado para todo tipo de piel. Limpia profundamente sin resecar, uso diario mañana y noche.",
      ing: "Water, Cocamidopropyl Betaine, Tea Tree Leaf Oil, Allantoin (lista completa disponible en Falabella.com).",
      uso: "Con rostro y manos húmedas, hacer espuma y masajear suavemente evitando contorno de ojos y boca. Enjuagar con agua tibia."
    },
    {
      name: "The 6 Peptide Skin Booster Serum", cat: "Sérums & Tratamientos", real: true,
      img: falabella("80622140_1"), contenido: "150 ml", isp: "1009C-1058/25",
      desc: "Sérum antiedad con 6 péptidos que combaten líneas de expresión, mejoran la textura y restauran firmeza.",
      ing: "Water, Dipropylene Glycol, Niacinamide, Adenosine, Acetyl Hexapeptide-8, Copper Tripeptide-1, Sodium Hyaluronate (lista completa disponible en Falabella.com).",
      uso: "Después de limpiar, usar como primer paso del cuidado de la piel. Extender por todo el rostro; puede aplicarse en varias capas."
    },
    {
      name: "Ultra Light Invisible Sunscreen Stick", cat: "Protección Solar", real: true,
      img: falabella("80622138_1"), contenido: "50 ml", isp: "1009C-1055/25",
      desc: "Protector solar en stick, ligero e invisible, de amplio espectro UV. Acabado fresco sin residuo graso.",
      ing: "Agua de hoja de Aloe Barbadensis, drometrizol trisiloxano, niacinamida, alantoína (lista completa disponible en Falabella.com).",
      uso: "Aplicar directamente sobre la piel. Ideal para retoques rápidos durante el día."
    }
  ],
  "mario-badescu": [
    {
      name: "Facial Spray With Aloe, Herbs and Rose", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603803_1"), contenido: "", isp: "1009C-1033/25",
      desc: "Bruma hidratante facial vegana con agua de rosas, aloe vera y hierbas botánicas. Hidratación instantánea y brillo saludable, sin aceite.",
      ing: "Agua desmineralizada, jugo de aloe vera, extractos de tomillo, algas (fucus), gardenia y rosa (escaramujo), fragancia.",
      uso: "Vaporizar antes de la crema hidratante, durante el día o después de maquillarse."
    },
    {
      name: "Glycolic Acid Toner", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603800_1"), contenido: "", isp: "1009C-1035/25",
      desc: "Tónico antiedad sin alcohol con ácido glicólico: exfolia suavemente, ilumina y equilibra el cutis. Con extracto de pomelo y aloe vera calmante.",
      ing: "Aloe Barbadensis Leaf Juice, Glycolic Acid, Citrus Grandis (Grapefruit) Fruit Extract, Propylene Glycol, Water (lista completa disponible en Falabella.com).",
      uso: "Aplicar con algodón dos veces al día tras la limpieza, evitando el contorno de ojos. Usar protector solar mientras se use este producto (contiene AHA)."
    },
    {
      name: "Seaweed Night Cream", cat: "Hidratación", real: true,
      img: falabella("80603812_1"), contenido: "", isp: "1009C-1040/25",
      desc: "Crema de noche con colágeno marino, ácido hialurónico y extracto de Fucus (alga rica en minerales) para suavizar y restaurar la piel mientras duermes.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar todas las noches después de limpiar y tonificar la piel."
    },
    {
      name: "Hyaluronic Dew Cream", cat: "Hidratación", real: true,
      img: falabella("80603791_1"), contenido: "", isp: "1009C-1036/25",
      desc: "Crema ligera y sedosa con ácido hialurónico y aloe vera calmante, más esqualano reparador, para hidratación intensa.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre rostro limpio, mañana y/o noche, como paso final de hidratación."
    },
    {
      name: "Drying Lotion", cat: "Sérums & Tratamientos", real: true,
      img: falabella("80603799_1"), contenido: "", isp: "",
      desc: "Tratamiento nocturno vegano con ácido salicílico para imperfecciones puntuales — un clásico de la marca desde 1967.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Cada noche, tras limpiar y tonificar: sumergir un hisopo en el sedimento rosado del fondo del frasco (sin agitar) y aplicar solo sobre la imperfección, sin frotar. Dejar secar y enjuagar por la mañana."
    },
    {
      name: "Gentle Foaming Cleanser", cat: "Limpieza", real: true,
      img: falabella("80603811_1"), contenido: "", isp: "1009/08",
      desc: "Limpiador facial en espuma ligera que elimina maquillaje, exceso de grasa e impurezas sin resecar.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre rostro húmedo, hacer espuma, masajear y enjuagar."
    },
    {
      name: "Lip Balm", cat: "Cuerpo & Labios", real: true,
      img: falabella("80603823_1"), contenido: "10 g", isp: "",
      desc: "Bálsamo labial vegano con aloe vera para hidratación profunda y duradera.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre los labios cuantas veces sea necesario."
    },
    {
      name: "Lip Mask With Acai N Vanilla", cat: "Cuerpo & Labios", real: true,
      img: falabella("80603793_1"), contenido: "", isp: "",
      desc: "Mascarilla labial vegana con acai y vainilla que nutre profundamente, dejando los labios suaves e hidratados.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar una capa generosa sobre los labios; dejar actuar y no retirar (se absorbe)."
    },
    {
      name: "Acai N Vanilla Lip Balm", cat: "Cuerpo & Labios", real: true,
      img: falabella("80603802_1"), contenido: "", isp: "",
      desc: "Bálsamo labial vegano con aceite de coco, acai y vainilla: hidrata y suaviza labios secos.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar directamente sobre los labios."
    },
    {
      name: "Spritz Mist Glow (set de 3 brumas)", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603807_1"), contenido: "", isp: "",
      desc: "Set de tres brumas faciales veganas para refrescar, hidratar y dar luminosidad — el complemento perfecto de la rutina diaria.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Vaporizar sobre el rostro durante el día o antes de la crema hidratante."
    },
    {
      name: "Facial Spray Aloe & Cucumber & Green Tea", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603813_1"), contenido: "118 ml", isp: "1009C-1032/25",
      desc: "Bruma facial refrescante y vegana con aloe vera calmante, té verde, agua de menta rica en antioxidantes y pepino hidratante.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Vaporizar sobre el rostro durante el día o antes de la crema hidratante."
    },
    {
      name: "Facial Spray Aloe & Chamomile", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603792_1"), contenido: "118 ml", isp: "1009C-1031/25",
      desc: "Bruma facial vegana con antioxidantes y vitamina C, lavanda calmante, aloe vera hidratante, tomillo purificante y extracto de alga marina.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Vaporizar sobre el rostro durante el día o antes de la crema hidratante."
    },
    {
      name: "Facial Spray Aloe & Coconut", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603806_1"), contenido: "118 ml", isp: "1009C-1030/25",
      desc: "Bruma facial vegana que hidrata piel delicada y seca con ácido hialurónico, agua de coco y extractos adaptógenos de plantas y raíces.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Vaporizar sobre el rostro durante el día o antes de la crema hidratante."
    },
    {
      name: "Facial Spray Aloe, Sage & Orange", cat: "Tónicos & Esencias", real: true,
      img: falabella("80603801_1"), contenido: "118 ml", isp: "1009C-1034/25",
      desc: "Bruma facial vegana sin aceite, tonificante e hidratante, con flor de naranjo, salvia reequilibrante, tomillo purificante y aloe vera calmante.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Vaporizar sobre el rostro durante el día o antes de la crema hidratante."
    },
    {
      name: "Grab And Go", cat: "Cuerpo & Labios", real: true,
      img: falabella("1100000928_1"), contenido: "", isp: "",
      desc: "[PENDIENTE] — la ficha de Falabella no incluía descripción para este set/kit de viaje.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Lip Glow", cat: "Cuerpo & Labios", real: true,
      img: falabella("1100000930_1"), contenido: "", isp: "",
      desc: "[PENDIENTE] — la ficha de Falabella no incluía descripción para este SKU.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Rutina Hidratación Colágeno", cat: "Hidratación", real: true,
      img: falabella("1100000931_1"), contenido: "", isp: "",
      desc: "[PENDIENTE] — la ficha de Falabella no incluía descripción para este set/kit.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    }
  ],
  "frida-kahlo": [
    {
      name: "Perfume Blue EDP", cat: "Fragancia", real: true,
      img: falabella("80746560_1"), contenido: "100 ml", isp: "3808/26",
      desc: "Eau de Parfum fresca inspirada en Frida Kahlo, con notas de coco, orquídea y vainilla mexicana.",
      ing: "Alcohol Denat., Aqua, Parfum, Linalool, Limonene, Hexyl Cinnamal, Citral, Geraniol, Benzyl Alcohol, Benzyl Benzoate.",
      uso: "Aplicar sobre piel limpia y seca, en puntos de pulso como cuello y muñecas, sin frotar."
    },
    {
      name: "Perfume Yellow EDP", cat: "Fragancia", real: true,
      img: falabella("80746561_1"), contenido: "100 ml", isp: "3808/26",
      desc: "Eau de Parfum frutal inspirada en Frida Kahlo, con notas de mango, jazmín y ámbar.",
      ing: "Alcohol Denat., Aqua, Parfum, Limonene, Linalool, Citral, Benzyl Salicylate, Geraniol, Coumarin, Benzyl Alcohol.",
      uso: "Aplicar sobre piel limpia y seca, en puntos de pulso como cuello y muñecas, sin frotar."
    },
    {
      name: "Perfume Red EDP", cat: "Fragancia", real: true,
      img: falabella("80746559_1"), contenido: "100 ml", isp: "3808/26",
      desc: "Eau de Parfum floral inspirada en Frida Kahlo, con notas de pomelo, rosa y almizcle.",
      ing: "Alcohol Denat., Aqua, Parfum, Benzyl Salicylate, Linalool, Limonene, Citronellol, Geraniol, Coumarin, Alpha-Isomethyl Ionone, Benzyl Alcohol.",
      uso: "Aplicar sobre piel limpia y seca, en puntos de pulso como cuello y muñecas, sin frotar."
    }
  ],
  "hello-sunday": [
    {
      name: "The One That's A Serum SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603817_1"), contenido: "", isp: "1009C-1041/25",
      desc: "Protector solar facial en formato sérum, textura ligera y sedosa de absorción rápida, sin residuo graso — el producto insignia de la marca.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar como último paso de la rutina de día. Reaplicar según exposición solar."
    },
    {
      name: "The Shimmer One SPF45", cat: "Protección Solar", real: true,
      img: falabella("80603815_1"), contenido: "", isp: "1009C-1047/25",
      desc: "Protector solar en stick con un sutil brillo dorado, amplio espectro UVA/UVB.",
      ing: "Óxido de zinc, triglicérido caprílico/cáprico, mica, ácido hialurónico, tocoferol (lista completa disponible en Falabella.com).",
      uso: "Aplicar sobre la piel y reaplicar durante el día."
    },
    {
      name: "The Rose One — Bálsamo labial SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603820_1"), contenido: "", isp: "1009C-1046/25",
      desc: "Bálsamo labial con SPF 50 y un toque de color rosa natural, con manteca de karité y escualeno.",
      ing: "Poliisobuteno, triglicérido caprílico/cáprico, escualeno, manteca de Butyrospermum Parkii (karité), tocoferol (lista completa disponible en Falabella.com).",
      uso: "Aplicar sobre los labios y reaplicar durante el día."
    },
    {
      name: "The Mauve One — Bálsamo labial SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603808_1"), contenido: "", isp: "1009C-1046/25",
      desc: "Bálsamo labial con SPF 50 y un sutil tono malva, enriquecido con ácido hialurónico.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre los labios y reaplicar durante el día."
    },
    {
      name: "Invisible Sun Stick SPF30", cat: "Protección Solar", real: true,
      img: falabella("80603795_1"), contenido: "", isp: "1009C-1044/25",
      desc: "Stick solar portátil e invisible, ligero y no graso, para retoques durante el día.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre la piel para protección solar. Ideal para retoques rápidos."
    },
    {
      name: "The One For Your Eyes SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603819_1"), contenido: "", isp: "1009C-1045/25",
      desc: "Protector solar específico para el contorno de ojos, previene daño solar y líneas de expresión.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar suavemente en el contorno de ojos como parte de la rutina de día."
    },
    {
      name: "The One For Your Lips SPF50", cat: "Protección Solar", real: true,
      img: falabella("80603818_1"), contenido: "", isp: "1009C-1043/25",
      desc: "Protector labial con SPF 50, barrera invisible contra el daño solar, mantiene los labios hidratados.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre los labios y reaplicar durante el día."
    },
    {
      name: "The One For Your Hands SPF30", cat: "Protección Solar", real: true,
      img: falabella("80603797_1"), contenido: "", isp: "1009C-1042/25",
      desc: "Protector solar de amplio espectro para manos, uso diario, fórmula ligera de rápida absorción.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "Aplicar sobre las manos, reaplicar tras lavarlas o según exposición solar."
    },
    {
      name: "The Everyday Essentials (set labios, manos y rostro)", cat: "Protección Solar", real: true,
      img: falabella("80603824_1"), contenido: "Labios 15 ml, manos 30 ml, sérum 30 ml", isp: "1009C-1041/25 · 1009C-1042/25 · 1009C-1043/25",
      desc: "Set con protección solar completa para rostro, labios y manos — la introducción ideal a la rutina Hello Sunday.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este set.",
      uso: "Ver modo de uso de cada producto individual incluido en el set."
    }
  ],
  tovegan: [
    {
      name: "Remedy Tónico Facial", cat: "Tónicos & Esencias", real: true,
      img: falabella("80756452_1"), contenido: "150 ml", isp: "1009C-1157/26",
      desc: "Tónico facial vegano con extractos botánicos (hibisco, rosa mosqueta, arándano) para hidratación profunda y cutis radiante.",
      ing: "Water, Butylene Glycol, Glycerin, Hibiscus Sabdariffa Flower Extract, Adenosine, Panthenol, Camellia Japonica Flower Extract (lista completa disponible en Falabella.com).",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Pink Enriched Eyelash Serum", cat: "Sérums & Tratamientos", real: true,
      img: "img/tovegan-pink-eyelash-serum.jpg", contenido: "10 ml", isp: "1009C-1162/26",
      desc: "Sérum vegano y cruelty-free para pestañas y cejas: nutre y fortalece desde la raíz para un aspecto más voluminoso.",
      ing: "Water, Butylene Glycol, Acetyl Hexapeptide-8, Copper Tripeptide-1, Biotin, Niacinamide (lista completa disponible en Falabella.com).",
      uso: "Aplicar como una máscara de pestañas normal, sobre pestañas y/o cejas secas y limpias."
    },
    {
      name: "Crema Facial Glow Up", cat: "Hidratación", real: true,
      img: falabella("80756454_1"), contenido: "", isp: "1009C-1159/26",
      desc: "Crema facial hidratante de textura ligera para todo tipo de piel, con efecto luminoso.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Protector Solar Facial (Bruma Yellow)", cat: "Protección Solar", real: true,
      img: falabella("80756453_1"), contenido: "", isp: "1009C-1161/26",
      desc: "Protector solar facial en formato bruma ligera, defensa invisible contra los rayos UV.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Bálsamo Limpiador Nutritivo", cat: "Limpieza", real: true,
      img: falabella("80756455_1"), contenido: "", isp: "1009C-1160/26",
      desc: "Bálsamo limpiador en formato crema que disuelve maquillaje e impurezas sin dejar sensación grasa.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    },
    {
      name: "Espuma Limpiadora Equilibrante", cat: "Limpieza", real: true,
      img: falabella("80756456_1"), contenido: "", isp: "1009/08",
      desc: "Limpiador facial en espuma para uso diario, textura que se transforma para disolver impurezas.",
      ing: "[PENDIENTE] — ficha de Falabella no listaba INCI completo para este SKU.",
      uso: "[PENDIENTE] — ficha de Falabella no detallaba modo de uso para este SKU."
    }
  ]
};

/* ---- Taxonomía "Shop/Productos" del brief de la clienta (real web 3.pptx) ----
   Los valores de cada producto se DERIVAN de su ingrediente/descripción real
   ya extraída de Falabella — no se inventan por producto. Ver CLAUDE.md. */
const ACTIVE_INGREDIENTS = ["Péptidos", "PDRN", "Mucina de Caracol", "Ácido Hialurónico", "Retinol", "Niacinamida", "Vitamina C"];
const SKIN_NEEDS = ["Humectación", "Líneas de expresión y arrugas", "Acné y puntos negros", "Poros y control de la grasa", "Aspecto apagado y tono desigual", "Enrojecimiento y sensibilidad"];
const SKIN_CONCERNS = ["Todo tipo de piel", "Piel seca", "Piel grasa", "Piel sensible"];

function deriveActives(text) {
  const t = text.toLowerCase();
  const found = [];
  if (/péptido|peptide|tripéptido|hexapéptido/.test(t)) found.push("Péptidos");
  if (/pdrn/.test(t)) found.push("PDRN");
  if (/mucina de caracol|snail/.test(t)) found.push("Mucina de Caracol");
  if (/ácido hialurónico|hyaluronic|hialuronato/.test(t)) found.push("Ácido Hialurónico");
  if (/retinol/.test(t)) found.push("Retinol");
  if (/niacinamide|niacinamida/.test(t)) found.push("Niacinamida");
  if (/vitamin c|vitamina c|ascorbic|ascorbyl|ácido ascórbico/.test(t)) found.push("Vitamina C");
  return found;
}

function deriveNeeds(text) {
  const t = text.toLowerCase();
  const found = [];
  if (/hidrat|humect/.test(t)) found.push("Humectación");
  if (/antiedad|arrugas|líneas de expresión|anti-edad|antiage/.test(t)) found.push("Líneas de expresión y arrugas");
  if (/acné|blackhead|puntos negros|espinilla|imperfecci/.test(t)) found.push("Acné y puntos negros");
  if (/poro|sebo|grasa\b|oil.?control/.test(t)) found.push("Poros y control de la grasa");
  if (/tono desigual|luminos|manchas|unifica|radian|glow/.test(t)) found.push("Aspecto apagado y tono desigual");
  if (/calmante|sensible|enrojecimiento|irritaci|sooth/.test(t)) found.push("Enrojecimiento y sensibilidad");
  return found.length ? found : ["Humectación"];
}

function deriveSkinConcern(text) {
  const t = text.toLowerCase();
  if (/piel sensible/.test(t)) return "Piel sensible";
  if (/piel grasa|para piel grasa/.test(t)) return "Piel grasa";
  if (/piel seca/.test(t)) return "Piel seca";
  return "Todo tipo de piel";
}

function buildProducts() {
  const list = [];
  let n = 1;
  Object.keys(RAW_PRODUCTS).forEach(slug => {
    const brand = brandBySlug(slug);
    RAW_PRODUCTS[slug].forEach((p, i) => {
      const id = `${slug}-${i + 1}`;
      const img = p.img || poolImg(brand.pool, i);
      const fullText = [p.name, p.desc, p.ing, p.cat].filter(Boolean).join(" ");
      list.push({
        id,
        brandSlug: slug,
        brandName: brand.name,
        name: p.name,
        category: p.cat,
        real: p.real,
        hero: !!p.hero,
        image: img,
        gallery: [img],
        desc: p.desc || "",
        ing: p.ing || "",
        uso: p.uso || "",
        isp: p.isp || "",
        contenido: p.contenido || "",
        activos: deriveActives(fullText),
        necesidad: deriveNeeds(fullText),
        skinConcern: deriveSkinConcern(fullText),
        n: n++
      });
    });
  });
  return list;
}

const PRODUCTS = buildProducts();

function productById(id) { return PRODUCTS.find(p => p.id === id); }
function productsByBrand(slug) { return PRODUCTS.filter(p => p.brandSlug === slug); }
function relatedProducts(product, count = 4) {
  return PRODUCTS.filter(p => p.brandSlug === product.brandSlug && p.id !== product.id).slice(0, count);
}
