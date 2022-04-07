const CACHE_NAME = "cache_v1"; 
const CACHE_DINAMIC = "cache_dinamico_v1";
const CACHE_INMUTABLE = "cache_inmutable_v1";

//va a ser un arreglo
const app_shell = ['/', '/index.html','/css/style.css', '/images/favico.icon', '/js/app.js', '/images/avs/img1.jpg', '/images/avs/img2.jpg','/images/avs/img3.jpg', '/images/avs/img4.jpg'];

const app_inmutable = ['https://fonts.googleapis.com/css?family=Quicksand:300,400', 'https://fonts.googleapis.com/css?family=Lato:400,300', '"https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css', '/libs/jquery.js'];

self.addEventListener('install', evento =>{
        const cache_app = caches.open(CACHE_NAME).then(cache =>{
            cache.addAll(app_shell);

        });

        const cache_inmutable = caches.open(CACHE_INMUTABLE).then(cache =>{
            cache.addAll(app_inmutable);
        });
        evento.waitUntil(Promise.all[cache_app,cache_inmutable]);
});


self.addEventListener('activate', evento =>{
    
    
});
