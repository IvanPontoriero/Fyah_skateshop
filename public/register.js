// serviceWorker (en navegadores modernos) permite ser un intermediario entre nuestra aplicación, el cliente y el hardware. 
// Se encarga de manejar el comportamiento de la app como guardar respuestas en caché, actualizarlo, lanzar notificaciones push, 
// guardar acciones cuando se está sin conexión y una vez recuperada la conexion lanzar estas acciones de forma definitiva. 
// En general maneja toda la aplicación y por este motivo debe correr en HTTPS.

if(navigator.serviceWorker) {
    navigator.serviceWorker.register("serviceWorker.js");
}