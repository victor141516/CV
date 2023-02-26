import { computed } from 'vue'
import { useDarkMode } from './screen'
import { socialItems } from './types'

const darkMode = useDarkMode()

const github = computed(
  () => `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>GitHub</title>
<path d="M32.0003 0C14.3293 0 0 14.3267 0 32.0003C0 46.1388 9.16905 58.1339 21.8837 62.3652C23.483 62.6614 24.0701 61.671 24.0701 60.8258C24.0701 60.0628 24.0405 57.542 24.0267 54.868C15.1242 56.8038 13.2457 51.0924 13.2457 51.0924C11.79 47.3936 9.6926 46.4101 9.6926 46.4101C6.78922 44.424 9.91146 44.4648 9.91146 44.4648C13.1248 44.6906 14.8168 47.7625 14.8168 47.7625C17.6709 52.6546 22.3029 51.2403 24.129 50.4226C24.4162 48.3544 25.2455 46.9427 26.1606 46.1436C19.053 45.3344 11.5812 42.5905 11.5812 30.3289C11.5812 26.8352 12.8313 23.9806 14.8783 21.7396C14.5461 20.9336 13.4507 17.6789 15.1883 13.2711C15.1883 13.2711 17.8755 12.411 23.9907 16.5512C26.5432 15.8422 29.2808 15.4866 32.0003 15.4745C34.7198 15.4866 37.4594 15.8422 40.0168 16.5512C46.1245 12.411 48.808 13.2711 48.808 13.2711C50.5498 17.6789 49.4539 20.9336 49.1217 21.7396C51.1735 23.9806 52.4151 26.8352 52.4151 30.3289C52.4151 42.6197 44.929 45.3259 37.8033 46.1182C38.9511 47.1112 39.9738 49.0586 39.9738 52.0441C39.9738 56.3258 39.9367 59.7718 39.9367 60.8258C39.9367 61.6774 40.5128 62.6752 42.1348 62.361C54.8426 58.1249 64 46.134 64 32.0003C64 14.3267 49.6728 0 32.0003 0ZM11.9851 45.5851C11.9147 45.744 11.6645 45.7917 11.4367 45.6826C11.2046 45.5782 11.0742 45.3614 11.1495 45.2019C11.2184 45.0382 11.469 44.9926 11.7006 45.1023C11.9332 45.2067 12.0657 45.4255 11.9851 45.5851ZM13.5592 46.9896C13.4066 47.131 13.1082 47.0653 12.9058 46.8417C12.6965 46.6186 12.6573 46.3203 12.812 46.1767C12.9694 46.0352 13.2587 46.1014 13.4686 46.3245C13.6779 46.5503 13.7187 46.8465 13.5592 46.9896ZM14.6391 48.7866C14.443 48.9228 14.1224 48.7951 13.9242 48.5105C13.7281 48.2259 13.7281 47.8847 13.9284 47.748C14.1272 47.6112 14.443 47.7342 14.6438 48.0166C14.8394 48.306 14.8394 48.6472 14.6391 48.7866ZM16.4653 50.8678C16.2899 51.0612 15.9164 51.0093 15.6429 50.7454C15.3631 50.4873 15.2852 50.1211 15.4612 49.9277C15.6387 49.7338 16.0144 49.7884 16.2899 50.0501C16.5676 50.3077 16.6524 50.6765 16.4653 50.8678ZM18.8256 51.5704C18.7483 51.821 18.3885 51.935 18.026 51.8285C17.6641 51.7188 17.4272 51.4252 17.5003 51.1719C17.5756 50.9197 17.937 50.801 18.3021 50.9149C18.6635 51.024 18.9009 51.3155 18.8256 51.5704ZM21.5117 51.8684C21.5207 52.1323 21.2134 52.3512 20.8329 52.3559C20.4503 52.3644 20.1409 52.1508 20.1366 51.8912C20.1366 51.6246 20.4371 51.4079 20.8197 51.4016C21.2001 51.3941 21.5117 51.6061 21.5117 51.8684ZM24.1505 51.7673C24.1961 52.0248 23.9317 52.2892 23.5539 52.3597C23.1824 52.4275 22.8385 52.2686 22.7913 52.0131C22.7452 51.7492 23.0144 51.4848 23.3853 51.4165C23.7637 51.3507 24.1023 51.5055 24.1505 51.7673Z" fill="${
    darkMode.value ? 'white' : '#161614'
  }"/>
</svg>`,
)

const inbox = computed(
  () => `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Email</title>
<path d="M16.7833 8.5332C14.6757 8.5332 12.8584 10.1109 12.5585 12.1957L8.55404 40.2333C8.54005 40.3327 8.53309 40.4329 8.5332 40.5332V51.2C8.5332 53.5319 10.4681 55.4668 12.8 55.4668H51.2C53.5319 55.4668 55.4668 53.5319 55.4668 51.2V40.5332C55.4668 40.4327 55.4597 40.3326 55.4459 40.2333L51.4374 12.1998V12.1961C51.1397 10.1101 49.3232 8.5332 47.2167 8.5332H16.7833ZM16.7833 12.8H47.2167L51.1792 40.5332H38.0082C37.1274 43.0143 34.7821 44.8 32 44.8C29.2182 44.8 26.8726 43.0143 25.9918 40.5332H12.8208L16.7836 12.8041L16.7833 12.8Z" fill="white"/>
</svg>`,
)

const linkedIn = computed(
  () => `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>LinkedIn</title>
<g clip-path="url(#clip0_5_25)">
<path d="M60 6.25H5.25V55.5H60V6.25Z" fill="white"/>
<path d="M54.5308 54.5317H45.048V39.681C45.048 36.1397 44.9848 31.581 40.116 31.581C35.177 31.581 34.4213 35.4395 34.4213 39.4232V54.5308H24.9385V23.9916H34.042V28.1653H34.1695C36.0258 24.9913 39.4773 23.0956 43.1515 23.232C52.7628 23.232 54.5348 29.554 54.5348 37.7785L54.5308 54.5317ZM14.2388 19.8171C11.1996 19.8177 8.73533 17.3543 8.73481 14.315C8.73426 11.2757 11.1976 8.81148 14.2368 8.81093C17.276 8.81038 19.7402 11.2738 19.7408 14.313C19.741 15.7726 19.1615 17.1724 18.1297 18.2046C17.0979 19.2368 15.6983 19.8169 14.2388 19.8171ZM18.9802 54.5317H9.48751V23.9916H18.9802V54.5317ZM59.2583 0.00456621H4.72238C2.1449 -0.0245213 0.0312127 2.04014 -0.000244141 4.61765V59.381C0.0301357 61.9598 2.14366 64.0265 4.72238 63.9995H59.2583C61.8423 64.0315 63.964 61.9648 63.9998 59.381V4.6137C63.963 2.0311 61.841 -0.0334463 59.2583 0.000199473" fill="#0A66C2"/>
</g>
<defs>
<clipPath id="clip0_5_25">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</svg>
`,
)

const telegram = computed(
  () => `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Telegram</title>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.474 31.6668C23.8034 27.6152 30.0142 24.923 33.1329 23.6168C42.0092 19.9117 43.8751 19.272 45.0746 19.2453C45.3411 19.2453 45.9275 19.2986 46.3274 19.6185C46.6472 19.885 46.7272 20.2316 46.7805 20.4981C46.8338 20.7647 46.8871 21.3244 46.8338 21.7509C46.354 26.8155 44.2749 39.1037 43.2087 44.7547C42.7555 47.1537 41.8759 47.9534 41.0229 48.0333C39.157 48.1933 37.7443 46.8072 35.9583 45.6343C33.1329 43.7951 31.5602 42.6489 28.8147 40.8363C25.6426 38.7572 27.6951 37.611 29.5077 35.7451C29.9875 35.2653 38.1708 27.8018 38.3307 27.1354C38.3574 27.0554 38.3573 26.7355 38.1708 26.5756C37.9842 26.4157 37.7176 26.469 37.5044 26.5223C37.2112 26.5756 32.733 29.561 24.0167 35.4519C22.7372 36.3315 21.591 36.758 20.5514 36.7314C19.4052 36.7047 17.2195 36.0916 15.5668 35.5585C13.5677 34.9188 11.9683 34.5723 12.1016 33.4527C12.1816 32.8663 12.9813 32.2799 14.474 31.6668Z" fill="${
    darkMode.value ? '#0088CC' : 'white'
  }"/>
</svg>`,
)

const twitter = computed(
  () => `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<title>Twitter</title>
<path d="M57.2774 18.9136C57.3161 19.4736 57.3161 20.0336 57.3161 20.5987C57.3161 37.8194 44.2065 57.68 20.2348 57.68V57.6697C13.1536 57.68 6.21936 55.6516 0.258072 51.8271C1.28775 51.951 2.32259 52.0129 3.36001 52.0155C9.22839 52.0206 14.929 50.0516 19.5458 46.4258C13.969 46.32 9.07872 42.6839 7.37033 37.3755C9.32388 37.7523 11.3368 37.6748 13.2542 37.151C7.1742 35.9226 2.80001 30.5806 2.80001 24.3768C2.80001 24.32 2.80001 24.2658 2.80001 24.2116C4.61162 25.2206 6.64001 25.7806 8.71485 25.8426C2.98839 22.0155 1.22323 14.3974 4.6813 8.44129C11.2981 16.5832 21.0607 21.5329 31.5407 22.0568C30.4903 17.5303 31.9252 12.7871 35.311 9.60517C40.56 4.67097 48.8155 4.92387 53.7497 10.1703C56.6684 9.59484 59.4658 8.52387 62.0258 7.00646C61.0529 10.0232 59.0168 12.5858 56.2968 14.2142C58.88 13.9097 61.4039 13.2181 63.7806 12.1626C62.031 14.7845 59.8271 17.0684 57.2774 18.9136Z" fill="white"/>
</svg>`,
)

export const socialImages: { [key in socialItems]: typeof github } = {
  linkedIn,
  github,
  inbox,
  telegram,
  twitter,
}
