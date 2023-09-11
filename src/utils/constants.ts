import { socialItems } from './types'

export const CV_PDF_URL = {
  es: 'https://drive.google.com/file/d/16EUdmLYEXCHPVK69AdjpC_Lw11BYuSAs/view',
  en: 'https://drive.google.com/file/d/1PNSnuL0AU4qyR8mpJ-nrQQoFVBbfgsX3/view',
} as const

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
