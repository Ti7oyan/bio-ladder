export const getInstagramURL = (name: string) => `https://instagram.com/${name}`;
export const getFacebookURL = (name: string) => `https://facebook.com/${name}`;
export const getYoutubeURL = (path: 'c' | 'channel' | 'user', name: string) => `https://youtube.com/${path}/${name}`
export const getTiktokURL = (id: string) => `https://tiktok.com/@${id}`
export const getLinkedinURL = (name: string) => `https://linkedin.com/in/${name}`;
export const getTwitchURL = (name: string) => `https://twitch.tv/${name}`
export const getTwitterURL = (name: string) => `https://twitter.com/${name}`
export const getTelegramURL = (name: string) => `https://t.me/${name}`
export const getBehanceURL = (name: string) => `https://behance.net/${name}`
export const getSpotifyURL = (id: string) => `https://open.spotify.com/user/${id}`
export const getCodepenURL = (name: string) => `https://codepen.io/${name}`
export const getGithubURL = (name: string) => `https://github.com/${name}`
export const getGitlabURL = (name: string) => `https://gitlab.com/${name}`
export const getFreeCodeCampURL = (name: string) => `https://www.freecodecamp.org/${name}`
export const getMediumURL = (name: string) => `https://medium.com/@${name}`
export const getDeviantURL = (name: string) => `https://deviantart.com/${name}`
export const getRedditURL = (name: string) => `https://reddit.com/user/${name}`
export const getSoundcloudURL = (name: string) => `https://soundcloud.com/${name}`
export const getSteamURL = (path: 'profiles' | 'id', id?: string, name?: string) => `https://steamcommunity.com/${path}/${path === 'id' ? name : id}`
export const getTumblrURL = (name: string) => new URL(`https://${name}.tumblr.com`)