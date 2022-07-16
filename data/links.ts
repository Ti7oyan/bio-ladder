import ILink from '../types/link';
import { getFreeCodeCampURL, getGithubURL, getInstagramURL, getLinkedinURL, getSteamURL } from '../utils/getters';

const LINKS: ILink[] = [
  {
    platform: 'INSTAGRAM',
    title: 'Instagram',
    url: getInstagramURL('ticianomorvan'),
  },
  {
    platform: 'GITHUB',
    title: 'GitHub',
    url: getGithubURL('Ti7oyan'),
  },
  {
    platform: 'FREECODECAMP',
    title: 'FreeCodeCamp',
    url: getFreeCodeCampURL('Ti7oyan'),
  },
  {
    platform: 'LINKEDIN',
    title: 'LinkedIn',
    url: getLinkedinURL('ticianomorvan')
  },
  {
    platform: 'STEAM',
    title: 'Steam',
    url: getSteamURL('id', 'Ti7oyan')
  },
  {
    platform: 'OTHER',
    title: 'My blog',
    url: 'https://blog.ticianomorvan.me/'
  }
]

export default LINKS;