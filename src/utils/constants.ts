import { socialItems } from './types'

export const CV_PDF_URL = 'https://drive.google.com/file/d/11F00T1jww_lgs00QoCElneJ5pVHk6vY0/view?usp=sharing'

export const SOCIAL_LINKS: { [key in socialItems]: string } = {
  github: 'https://github.com/victor141516',
  inbox: 'mailto:victor.fernandez.gabriel@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/victor-fernandez-gabriel-8850baaa/',
  telegram: 'https://t.me/victor141516',
  twitter: 'https://twitter.com/victor141516',
}

export const socialBgColors: { [key in socialItems]: string } = {
  github: '',
  inbox: 'bg-[#32506d]',
  linkedIn: 'bg-[#0A66C2]',
  telegram: 'bg-white',
  twitter: 'bg-[#1D9BF0]',
}
