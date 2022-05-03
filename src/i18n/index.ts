import { usePreferredLanguages } from '@vueuse/core'
import { ref } from 'vue'

interface TimelineEvent {
  name: string
  description: string
  bullets?: string[]
}

interface TimelineItem {
  name: string
  events?: TimelineEvent[]
  periods?: TimelineItem[]
}
interface Timeline {
  title: string
  timeline: TimelineItem[]
}

const es = {
  home: {
    me: {
      title: '¡Hola! Soy',
      description: [
        'Junto cosas con APIs (si se dejan) o scrapeando (si no)',
        'Mi objetivo es construir algunos proyectos que den beneficios. Beneficios de momento: 0 $',
        'Mientras tanto trabajo en {company}',
      ],
    },
    aboutMe: {
      title: 'Sobre mí',
      lines: [
        'Soy graduado en ingeniería de computadores, y llevo dedicándome profesionalmente al desarrollo de software desde los 19 años',
        'Me apasiona programar, sobre todo el mundo del scraping',
        'Actualmente trabajo como Full-stack y recientemente he tenido una larga experiencia como Front-end',
        'En mi tiempo libre me gusta pensar en nuevos proyectos que añadir a la lista (y también de vez en cuando trabajar en alguno), leer ciencia ficción y jugar a League of Legends',
        'He hecho unos cuantos bots de Telegram',
      ],
    },
    stuffMade: {
      title: 'Estas son algunas de las cosas que he hecho',
      project: 'Proyecto',
      date: 'Fecha',
      ago: 'hace',
      year: 'año',
      years: 'años',
      month: 'mes',
      months: 'meses',
      day: 'día',
      days: 'días',
      dateTemplate: '{ago} {n} {unit}',
      showMore: 'Mostrar más',
      descriptions: {
        YourArch:
          'Web que guarda los subtítulos de todos los vídeos que ves en YouTube, y luego te permite buscar en ese texto y reproducir el vídeo desde el momento exacto en el que se dice el término de búsqueda',
        telepyzza:
          'Bot de Telegram que hace las veces de un interprete de Python. Securizado generando containers de Docker para cada usuario',
        NodeSession:
          'Librería de Node.js que simula el <code>requests.Session()</code> de Python requests pero usando la interfaz de <code>fetch</code>',
        'git-o':
          'Un pequeño script de bash para abrir en el navegador desde la consola los repositorios de GitHub y GitLab. Es fácilmente extensible por su diseño modular',
        agnosticVCR:
          'Un proxy que cachea todas las peticiones que le lleguen y las guarda en un archivo. Su utilidad principal es para mejorar la fiabilidad de los tests automáticos de frontend',
        SearStars:
          'Una web para listar y buscar entre los repositorios marcados con estrella de usuarios de GitHub. Por ejemplo <a href="https://ghs.viti.site/victor141516">ghs.viti.site/victor141516</a>',
        'oauth-as-a-service':
          'Un servicio que gestiona el proceso de OAuth con Google para cualquier scope, y devuelve un ID estático con el que se puede pedir un access token refrescado automáticamente',
        'google-image-search-telegram': 'Bot de Telegram para buscar imágenes en Google Imágenes',
        myFus:
          'Acortador de enlaces que usa un algoritmo propio para generar los links acortados. Por algún motivo se usa bastante en Corea',
        'geocoding-telegram-bot':
          'Bot de Telegram que genera mensajes de ubicación de Telegram basándose en una búsqueda',
        Redpie:
          'Librería de Python para usar redis como si fuera un <code>dict</code> de Python. Facilita el prototipado',
        Xplid:
          'De momento sigue siendo más una idea que un proyecto real, pero pretende ser una alternativa a <a href="https://play.google.com/store/apps/details?id=splid.teamturtle.com.splid">Splid</a>',
        'manfred-filter':
          'Herramienta de consola que scrapea <a href="https://www.getmanfred.com/ofertas-empleo">la web de ofertas de Manfred</a> y filtra las ofertas que cumplen los criterios que se le pidan',
        BlitX:
          'Una herramienta para automatizar el aburrido proceso de empezar una partida de League of Legends. Funciona regular, pero me gustaría empezar de cero con el porque <a href="https://blitz.gg/">hay otros proyectos parecidos</a> con bastante éxito',
        taskimo:
          'Una pequeña app para tomar notas/second brain/recordatorios. Empecé con ello porque después de usar Notion y Todoist no estaba contento con ninguna y no encontraba una app que cumpliera con lo que quería. Ahora estoy usando <a href="https://workflowy.com/">WorkFlowy</a> que se parece bastante a la idea que tenía en mente',
        forodieciocho:
          'Una web que scrapea <a href="https://forocoches.com">forocoches.com</a> para buscar hilos de contenido adulto y mostrarlos en una lista. El sentido de este proyecto es que el buscador de forocoches no permite filtrar este tipo de hilos. La web tiene relativo éxito con 200/300 usuarios únicos al día. El proyecto consta del frontend y el backend, que se encarga tanto de la gestión de la base de datos como del scrapeo',
        TorrenteStreamer:
          'Una web que toma un torrent, lo descarga, busca el archivo de vídeo que haya dentro y lo emite por streaming al usuario. Similar a <a href="https://github.com/varbhat/exatorrent">exa</a>. Es uno de los primeros proyectos que hice',
        FileY: 'Bot de Telegram que usa Telegram como un gestor de archivos',
        esender: 'API para enviar emails muy fácilmente con un simple HTTP GET',
        'Gmail-gettt':
          'API que permite consultar y filtrar tu email de Gmail. Lo he utilizado para automatizar algunas cosas como el registro en webs',
      },
    },
    work: {
      title: 'Mi historia profesional',
      timeline: [
        {
          name: 'Universidad',
          events: [
            {
              name: 'Universidad',
              description: 'Empiezo el Grado en Ingeniería de Computadores en la Universidad de Alcalá de Henares',
            },
          ],
        },
        {
          name: 'ShuttleCloud',
          periods: [
            {
              name: 'Media jornada/becario',
              events: [
                {
                  name: 'barat0',
                  description:
                    'Empiezo a trabajar en un proyecto llamado barat0 (similar a lo que ahora es Chollometro) porque me entero en la universidad de que están buscando gente en una empresa llamada ShuttleCloud. Trabajo en ello durante un año, pero se cancela por la falta de una forma de monetizar el proyecto y por no atraer suficiente interés',
                  bullets: [
                    'Yo tenía algo de experiencia programando en Python y Node.js',
                    'Decidimos que el proyecto lo haríamos con Laravel',
                    'Consistía en un backend que guardaba los datos de las ofertas en una base de datos MySQL, y el frontend no usaba ningún framework, tan solo el sistema de templating de Laravel',
                  ],
                },
                {
                  name: 'portalmenú',
                  description:
                    'El siguiente proyecto que me proponen es una web que mostraría los menús del día de restaurantes alrededor del usuario. A este proyecto le dedicamos más tiempo, y es el proyecto al que le dedico mis prácticas en la universidad y my Trabajo de Fin de Grado',
                  bullets: [
                    'También usamos Laravel para este proyecto',
                    'El frontend esta vez fue una aplicación de móvil hecha con Angular.js e Ionic, que acababa de salir',
                    'Le dediqué mucho esfuerzo a reducir la fricción en el proceso de añadir los datos de los menús',
                  ],
                },
                {
                  name: 'GSuite Promo Codes',
                  description:
                    'Fue un experimento en el que usamos una web con la que se podían obtener códigos de descuento de la (entonces llamada) GSuite. Cuando esos códigos se usaban nos datan un porcentaje de la suscripción',
                  bullets: [
                    'La forma de solicitar los códigos era mediante una web en la que tenías que poner tu dirección de correo electrónico',
                    'Los códigos llegaban a través de un email, así que había que scrapear esos emails',
                    'Todo el proceso era automático',
                    'Con el tiempo acabó dando bastantes beneficios',
                  ],
                },
              ],
            },
            {
              name: 'Plataforma de migración de emails',
              events: [
                {
                  name: 'Plataforma de migración de emails',
                  description:
                    'Mi primer trabajo a jornada completa, y también mi primera experiencia con un equipo ya formado. El producto es un servicio para migrar emails entre distintas cuentas. Necesito aprender muy rápido desde el primer momento porque es un producto muy complejo.',
                  bullets: [
                    'Mucha exigencia, con clientes como Google y Comcast',
                    'Prácticamente todo el código está hecho en Python',
                    'Un sistema con mucho uso, con un sistema de colas (RabbitMQ) para aliviar los picos de carga',
                    'Para las bases de datos se usa sobre todo CouchDB, aunque hay algunas cosas con MySQL',
                    'Aprendo todo lo relacionado con Docker ya que el equipo estaba en proceso para Dockerizar todos los servicios',
                    'Todo el sistema está alojado en Google Cloud Project',
                  ],
                },
                {
                  name: 'Portales de migración',
                  description:
                    'La tarea a la que me dedico principalmente es hacer unos portales para algunos de nuestros clientes',
                  bullets: [
                    'Los portales permiten que los usuarios puedan cargar migraciones en nuestro sistema',
                    'Uso Vue.js como framework frontend',
                    'Al principio usé Bulma como framework CSS, pero al poco tiempo salió Tailwind y fue el framework que usé a partir de entonces',
                  ],
                },
              ],
            },
            {
              name: 'EmailMeter',
              events: [
                {
                  name: 'EmailMeter',
                  description:
                    'Este es otro proyecto que ya llevaba un tiempo gestándose dentro de ShuttleCloud. En cierto momento se decidió darle más impulso y yo entré a ayudar, sobre todo con el frotend. El producto es una herramienta para obtener estadísticas del uso de tu email',
                  bullets: [
                    'El backend también está hecho en Python',
                    'La información que se guarda sobre los emails se almacena en BigQuery',
                    'El frontend está hecho en Vue.js, pero es muchísimo más complejo que lo que había hecho hasta ese momento',
                    'Es la primera vez que trabajo con alguien que tiene menos experiencia que yo, e intento ayudarla en todo lo que puedo',
                  ],
                },
              ],
              periods: [
                {
                  name: 'DARTS',
                  events: [
                    {
                      name: 'DARTS',
                      description:
                        'Este proyecto nace dentro de EmailMeter como una solicitud de un cliente. El producto consiste en una herramienta de ticketing (tipo ZenDesk) usando exclusivamente el sistema de etiquetas de Gmail',
                      bullets: [
                        'El proyecto está hecho con Node.js',
                        'Es la primera vez que hago un proyecto profesional con TypeScript',
                        'El servicio usa intensamente la API de Gmail, por lo que es necesario controlar los límites de las cuotas',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'farmaciadeguardia.app',
              events: [
                {
                  name: 'farmaciadeguardia.app',
                  description:
                    'Este es un proyecto que nace dentro de ShuttleCloud en medio de la pandemia. Una app para buscar farmacias de guardia en toda España. El reto consiste en obtener la información, ya que los horarios de guardia los gestiona el colegio de médicos de cada provincia por separado, y cada uno tiene una web completamente diferente',
                  bullets: [
                    'Mi tarea principal es programar los scrapers para cada web',
                    'El lenguaje en el que lo hago es Node.js, con TypeScript',
                    'Para el scraping uso cheerio y jsdom',
                    'El servicio se ejecuta en Google Cloud Run',
                  ],
                },
              ],
            },
            {
              name: 'Plataforma de migración de emails',
              events: [
                {
                  name: 'Plataforma de migración de emails',
                  description: 'Vuelvo a la plataforma de migración porque me piden ayuda con un nuevo cliente',
                  bullets: [
                    'El cliente nos quiere ejecutar todos los servicios en su propio cluster de Kubernetes',
                    'Actualizo a Python 3 algunos de los servicios/paquetes que están hechos en Python 2',
                    'Modifico algunos de los servicios para que sean Kubernetes-friendly',
                    'Mejoro la documentación del sistema',
                    'Ayudo a los ingenieros del cliente para que consigan ejecutar correctamente todo el sistema',
                    'Ayudo a los compañeros ingenieros que tienen menos experiencia',
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Revieve',
          periods: [
            {
              name: 'Primeros meses',
              events: [
                {
                  name: 'Inicio',
                  description: 'Empiezo a trabajar en Revieve como Senior Full-Stack Developer',
                },
              ],
            },
          ],
        },
      ],
    } as Timeline,
    links: {
      title: 'Cosas que leo/veo',
      descriptions: {
        incolumitas: 'El blog de Nikolai Tschacher, un experto en scraping y detección de scrapers y bots',
        LiveOverflow: 'Explica tanto conceptos de programación/hacking como casos prácticos de hacking',
        Kofybrek:
          'Un chico que hace vídeos graciosos de los proyectos que programa, explicando los problemas que ha tenido',
        '3Blue1Brown': 'Explica conceptos matemáticos con animaciones muy fáciles de entender',
        HackerNews: 'Una de las webs de noticias de ciencia, hacking y programación más conocidas',
        MiduDev: 'Hace cursos de programación de frontend y explica bastante bien',
        'Google Web Updates':
          'La web de Google donde escriben sobre los últimos cambios tanto de estándares como de Chrome',
      },
    },
  },
}
const en = {
  home: {
    me: {
      title: "Hi! I'm",
      description: [
        'I put things together using APIs (if available) or scraping (otherwise)',
        'My goal is to build some profitable projects. Current profits: 0 $',
        'Meanwhile I work at {company}',
      ],
    },
    aboutMe: {
      title: 'About me',
      lines: [
        "I'm a computer engineer graduate, and I've been professionally working on software development since I was 19",
        'I love programming, specially I love the scraping world',
        'I currently work as a Full-stack and recently I have had a long experience as a Front-end',
        'In my spare time I like to think of new projects for the list (and work on some of them from time to time too), read science fiction and play League of Legends',
        'I made a few Telegram bots',
      ],
    },
    stuffMade: {
      title: 'These are some of the stuff I made',
      project: 'Project',
      date: 'date',
      ago: 'ago',
      years: 'years',
      year: 'year',
      months: 'months',
      month: 'month',
      days: 'days',
      day: 'day',
      dateTemplate: '{n} {unit} {ago}',
      showMore: 'Show more',
      descriptions: {
        YourArch:
          'Web that saves the subtitles of all the videos you watch on YouTube, and then allows you to search in that text and play the video from the exact moment the search term is said',
        telepyzza: 'Telegram bot that acts as Python interpreter. Secured using a Docker container for each user',
        NodeSession:
          "Node.js library that emulates Python requests' <code>requests.Session()</code> but using <code>fetch</code> interface",
        'git-o':
          'A tiny bash script to open GitHub and GitLab in the browser from the console. Easily extensible due to the modular design',
        agnosticVCR:
          'Proxy that caches every request and saves them to a file. It can be used to improve the reliability of automated frontend tests',
        SearStars:
          'This web allows the user to list and search among users starred repos on GitHub. i.e. <a href="https://ghs.viti.site/victor141516">ghs.viti.site/victor141516</a>',
        'oauth-as-a-service':
          'This service manages the Google OAuth process with any scope. It gives back a static ID used to get the automatically refreshed access token',
        'google-image-search-telegram': 'Telegram bot that search on Google Images',
        myFus:
          "URL shortener using a custom algorithm to generate the shortened links. It's used a lot in Korea for some reason",
        'geocoding-telegram-bot': 'Telegram bot that sends Telegram location messages based on search terms',
        Redpie: 'Python library to use redis as it is a Python <code>dict</code>. Makes prototyping easier',
        Xplid:
          'For now it\'s more of an idea than a real project, but it\'s an alternative to <a href="https://play.google.com/store/apps/details?id=splid.teamturtle.com.splid">Splid</a>',
        'manfred-filter':
          'Console tool to scrap <a href="https://www.getmanfred.com/ofertas-empleo">Manfred jobs page</a> and filter offers that match given criteria',
        BlitX:
          'An automation tool for the boring League of Legends pregame. It barely works, but I\'d like begin from scratch because <a href="https://blitz.gg/">there are similar successful projects</a> ',
        taskimo:
          "Note taking/second brain/reminders app. I began working on it because I used Notion and Todoist and I was not happy with either of them, and I couldn't find (at that moment) and app that fit my needs. Now I'm using <a href=\"https://workflowy.com/\">WorkFlowy</a>,  and it's pretty much what I was trying to make",
        forodieciocho:
          'A web that scraps <a href="https://forocoches.com">forocoches.com</a> to filter adult content threads and list them. This project was born because forocoches search can\'t filter this kind of threads. It has relative success with 200/300 unique users per day. The project is formed by the frontend and the backend, which job is to manage the database and scrape',
        TorrenteStreamer:
          'This web takes a torrent, downloads it, search for the big video file and streams it to the user. Similar to <a href="https://github.com/varbhat/exatorrent">exa</a>. It\'s one of the first projects I worked on',
        FileY: 'Telegram bot that uses Telegram as a file manager',
        esender: 'API that send emails easily using HTTP GET',
        'Gmail-gettt':
          'API that retrieves, filters and shows the user Gmail email. I used it to automate some things like the sign up process on webs',
      },
    },
    work: {
      title: 'My professional history',
      timeline: [
        {
          name: 'College',
          events: [
            {
              name: 'College',
              description: 'I start the Degree in Computer Engineering at the University of Alcalá de Henares.',
            },
          ],
        },
        {
          name: 'ShuttleCloud',
          periods: [
            {
              name: 'Part time/internship',
              events: [
                {
                  name: 'barat0',
                  description:
                    'I started working on a project called barat0 (similar to what Chollometro is now) because I found out in college that a company called ShuttleCloud they are looking for people to work with. I worked on it for a year, but it gets canceled due to the lack ideas to monetize monetize the project and not attracting enough interest.',
                  bullets: [
                    'I had some experience with Python and Node.js',
                    'We decided to use Laravel for the project',
                    'It consisted of a backend that stored the deal data in a MySQL database. Frontend did not use any framework, only Laravel templating system.',
                  ],
                },
                {
                  name: 'portalmenú',
                  description:
                    'Next project that ShuttleCloud proposed to me is a website that would show daily menus (menú del día) of restaurants around the user. We invested more time to this project, and it is the project to which I dedicate my internships at the university and my degree thesis.',
                  bullets: [
                    'We also used Laravel for this project',
                    'This time frontend was a mobile app made with Angular.js and Ionic, which had just been released.',
                    'I put a lot of effort into reducing the friction in the process of adding the menu data',
                  ],
                },
                {
                  name: 'GSuite Promo Codes',
                  description:
                    'It was an experiment where we used a website where you could get discount codes for the (then called) GSuite. When those codes were used, Google gave us back a percentage of the subscription',
                  bullets: [
                    'The way to request the codes was through a website where you had to put an email address',
                    'The codes arrived through an email, so you had to scrape those emails',
                    'All the process was fully automated',
                    'It ended up giving quite a few benefits in the long run',
                  ],
                },
              ],
            },
            {
              name: 'Email migration platform',
              events: [
                {
                  name: 'Email migration platform',
                  description:
                    "My first full-time job, and also my first experience with an already formed team. The product is a service to migrate emails between different accounts. I needed to learn very quickly since the first moment because it's a very complex product.",
                  bullets: [
                    'Very demanding, with clients such as Google and Comcast',
                    'Virtually all the code is done in Python',
                    'A heavily used system. Queues (RabbitMQ) are used to alleviate peak loads',
                    'CouchDB is the main database software, although MySQL is somewhat used',
                    'I learn all about Docker as the team was in the process of Dockerizing all services',
                    'The entire system is hosted on Google Cloud Project',
                  ],
                },
                {
                  name: 'Migration portals',
                  description: 'The task I mainly work on is to make portals for some of our clients.',
                  bullets: [
                    'Portals allow users to load migrations to our system',
                    'I use Vue.js as frontend framework',
                    'At first I used Bulma as CSS framework, but Tailwind was released shortly after and it was the framework I used from then on',
                  ],
                },
              ],
            },
            {
              name: 'EmailMeter',
              events: [
                {
                  name: 'EmailMeter',
                  description:
                    'This is another project that had been developing within ShuttleCloud for some time. At a certain point it was decided to give it more momentum and I came in to help, especially with the frotend. The product is a tool to obtain email usage statistics',
                  bullets: [
                    'Backend is also written on Python',
                    'Email information is stored on BigQuery',
                    "Frontend is written in Vue.js. However it's vastly more complex than anything I made to the moment",
                    'It was the first time I worked with someone less experienced than me. I tried to help with anything she needed',
                  ],
                },
              ],
              periods: [
                {
                  name: 'DARTS',
                  events: [
                    {
                      name: 'DARTS',
                      description:
                        'This project was born within EmailMeter as a request from a client. The product is a ticketing tool (like ZenDesk) using only Gmail label system',
                      bullets: [
                        'The project is written in Node.js',
                        'My first time working professionally on a TypeScript project',
                        'This service uses Gmail API a lot, so we need a strong control on quotas',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'farmaciadeguardia.app',
              events: [
                {
                  name: 'farmaciadeguardia.app',
                  description:
                    "This is a project that was born within ShuttleCloud in the midst of the pandemic. It is an app to search for on-duty pharmacies throughout Spain. The challenge is to obtain the information, since all the on-duty schedules are managed separately by each province's medical association, and each one has a completely different website",
                  bullets: [
                    'I work on the scrapers for each web',
                    'I use Node.js with TypeScript',
                    'Chosen scraping libraries are cheerio and jsdom',
                    'The service runs on Google Cloud Run',
                  ],
                },
              ],
            },
            {
              name: 'Email migration platform',
              events: [
                {
                  name: 'Email migration platform',
                  description: 'I went back to the migration platform because I was asked for help with a new client',
                  bullets: [
                    'The client wanted us to run all the services in their own Kubernetes cluster',
                    'Upgraded to Python 3 some of the services/packages that were still on Python 2.',
                    'Modified some of the services to be Kubernetes-friendly',
                    'Improved the system documentation',
                    "Helped client's engineers to get the whole system running correctly",
                    'Helped fellow engineers who are less experienced',
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Revieve',
          periods: [
            {
              name: 'First months',
              events: [
                {
                  name: 'Begin',
                  description: 'My first day at Revieve as Full-Stack Developer',
                },
              ],
            },
          ],
        },
      ],
    },
    links: {
      title: 'Stuff I read/watch',
      descriptions: {
        incolumitas: 'Nikolai Tschacher blog, an expert in scraping and scrapers and bots detection',
        LiveOverflow: 'He explains both programming/hacking concepts and practical cases of hacking',
        Kofybrek: "A guy who makes funny videos of the projects he works on, explaining the problems he's had",
        '3Blue1Brown': 'Math concepts with very easy to understand animations',
        HackerNews: 'One of the best-known science, hacking and programming news websites',
        MiduDev: 'He does frontend programming courses and explains quite well',
        'Google Web Updates': "Google's website where they write about the latest changes in both standards and Chrome",
      },
    },
  },
} as typeof es

console.log({ es })

export const texts = { es, en }
export const preferredLanguage = ref(usePreferredLanguages().value[0].split('-')[0])
