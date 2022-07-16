import ILink from '../types/link'

export default async function getLinks(): Promise<{ links: ILink[] }> {
  const links = (await import('../data/links')).default

  return {
    links
  }
}