import { usePreferredLanguages } from '@vueuse/core'
import { ref } from 'vue'

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
      descriptions: {
        telepyzza:
          'Bot de Telegram que hace las veces de un interprete de Python. Securizado generando containers de Docker para cada usuario',
        NodeSession:
          'Librería de Node.js que simula el <code>requests.Session()</code> de Python requests pero usando la interfaz de <code>fetch</code>',
        'git-o':
          'Un pequeño script de bash para abrir en el navegador desde la consola los repositorios de GitHub y GitLab. Es fácilmente extensible por su diseño modular',
        agnosticVCR:
          'Un proxy que cachea todas las peticiones que le lleguen y las guarda en un archivo. Su utilidad principal es para mejorar la fiabilidad de los tests automaticos de frontend',
        SearStars: '',
        'oauth-as-a-service': '',
        'google-image-search-telegram': '',
        myFus: '',
        'geocoding-telegram-bot': '',
        Redpie: '',
        Xplid: '',
        'manfred-filter': '',
        BlitX: '',
        taskimo: '',
        forodieciocho: '',
        TorrenteStreamer: '',
        FileY: '',
        esender: '',
        'Gmail-gettt': '',
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
    },
  },
} as typeof es

export const texts = { es, en }
export const preferredLanguage = ref(usePreferredLanguages().value[0].split('-')[0])
