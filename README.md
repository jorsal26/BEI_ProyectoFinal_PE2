## Proyecto Final Curso de Programación Backend I: Desarrollo Avanzado de Backend - Preentrega 2
## Por Salinas Jorge Luis
## Herramientas de desarrollo
- Visual Studio Code
- websockets
- Git
- GitHub
- Node.js
- Express.js
- Express-handlebars

## Arquitectura del proyecto
```text
my-express-app/
│
├── src/
│   ├── routes/
│   │   └── products.router.js
│   │   └── carts.router.js
│   ├── services/
│   │   └── ProductManager.js
│   │   └── CartManager.js
│   └── app.js
│
└── data/
    └── productos.json
```

## Para probar:

- http://localhost:8080: Listar todos los productos.
- http://localhost:9090/realtimeproducts: Lista los productos existentes, agrega, actualiza o elimina productos y los muestra en tiempo real.


```json
[
  {
    "id": 2,
    "title": "Croissant",
    "description": "Croissant francés crujiente y hojaldrado, hecho con mantequilla de alta calidad. Perfecto para un desayuno gourmet o una merienda deliciosa.",
    "code": "HHH",
    "price": 2,
    "stock": 10,
    "category": "Panaderia",
    "thumbnails": [
      "Croissants.webp",
      "https://example.com/imagenes/thumbnails/croissant_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 3,
    "title": "Pastel de Chocolate",
    "description": "Delicioso pastel de chocolate negro con cobertura de ganache, decorado con virutas de chocolate. Perfecto para cualquier ocasión especial o para satisfacer tus antojos de chocolate.",
    "code": "GGG",
    "price": 15,
    "stock": 10,
    "category": "Tortas",
    "thumbnails": [
      "PasteldeChocolate.webp",
      "https://example.com/imagenes/thumbnails/pastel_chocolate_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 4,
    "title": "Tarta de Frutas",
    "description": "Tarta de masa quebrada rellena de crema pastelera y decorada con una selección de frutas frescas de temporada. Un postre ligero y refrescante ideal para el verano.",
    "code": "FFF",
    "price": 18,
    "stock": 10,
    "category": "Tartas",
    "thumbnails": [
      "TartadeFrutas.webp",
      "https://example.com/imagenes/thumbnails/tarta_frutas_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 5,
    "title": "Galletas de Avena",
    "description": "Galletas caseras de avena con pasas y nueces, perfectas para un snack saludable. Crujientes por fuera y suaves por dentro, con un sabor reconfortante.",
    "code": "EEE",
    "price": 1.5,
    "stock": 10,
    "category": "Panaderia",
    "thumbnails": [
      "GalletasdeAvena.webp",
      "https://example.com/imagenes/thumbnails/galletas_avena_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 6,
    "title": "Muffin de Arándanos",
    "description": "Muffin esponjoso con arándanos frescos, ideal para el desayuno o la merienda. Cada bocado está lleno de jugosos arándanos que aportan un sabor dulce y ácido a la vez.",
    "code": "DDD",
    "price": 2.5,
    "stock": 10,
    "category": "Pasteleria",
    "thumbnails": [
      "MuffindeArandanos.webp",
      "https://example.com/imagenes/thumbnails/muffin_arandanos_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 7,
    "title": "Bagel Integral",
    "description": "Bagel integral hecho a mano, perfecto para un desayuno saludable. Ideal para combinar con queso crema y salmón ahumado.",
    "code": "CCC",
    "price": 2.75,
    "stock": 10,
    "category": "Pasteleria",
    "thumbnails": [
      "BagelIntegral.webp",
      "https://example.com/imagenes/thumbnails/bagel_integral_thumbnail.jpg"
    ],
    "status": true
  },
  {
    "id": 8,
    "title": "Brownie de Nueces",
    "description": "Brownie de chocolate intenso con trozos de nueces, perfecto para los amantes del chocolate. Cada bocado es una explosión de sabor.",
    "code": "BBB",
    "price": 3.1,
    "stock": 10,
    "category": "Pasteleria",
    "status": true
  },
  {
    "id": 9,
    "title": "Eclair de Vainilla",
    "description": "Eclair relleno de crema de vainilla y cubierto con un glaseado de chocolate. Un clásico de la repostería francesa.",
    "code": "AAA",
    "price": 2.55,
    "stock": 10,
    "category": "Pasteleria",
    "status": true
  },
  {
    "id": 10,
    "title": "Tarta de Limón",
    "description": "Tarta de masa quebrada rellena de crema de limón y cubierta con merengue tostado. Un postre fresco y ácido.",
    "code": "XXX",
    "price": 16.25,
    "stock": 10,
    "category": "Tartas",
    "status": true
  },
  {
    "id": 11,
    "title": "Donuts Glaseados",
    "description": "Donuts esponjosos y glaseados, perfectos para cualquier ocasión. Disfruta de su textura suave y su dulce glaseado.",
    "code": "PDGX",
    "price": 1.75,
    "stock": 10,
    "category": "Pasteleria",
    "status": true
  }
]

```