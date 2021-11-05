const CACHE_ELEMENTS = [    // se colocan todas las rutas a las que queramos hacerle peticiones desde nuestro sitio web
    "./",
    "popper.min.js",
    "bootstrap.min.js",
    "bundle.js",
    "main.chunk.js",
    "FYAH.01e38b8d.png",
    "manifest.json",
    "Stussy-Nike-Spiridon.069330.jpg",
    "Nike-x-Stussy-International-Crewneck-Sweatshirt-Black.88b4759b.jpg",
    "Nike-x-Stussy-T-Shirt-Black.ea3d2ed3.jpg"
] 

const CACHE_NAME = "v1" // version 1 de nuestro serviceWorker

self.addEventListener("install", () => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache
                .addAll(CACHE_ELEMENTS)
                .then(() => {
                self.skipWaiting();
            })
            .catch(err => console.log(err));
        })
    );
}) ; // const self = this son equivalentes