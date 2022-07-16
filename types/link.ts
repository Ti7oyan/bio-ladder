import type SocialType from './social';

export default interface ILink {
  /**
   * Name of the platform.
   * @example "Instagram"
   */
  platform: SocialType;

  /**
   * Title to be displayed on the card.
   * @example "My Instagram profile"
   */
  title: string;

  /**
   * URL associated with the profile.
   * @example "https://instagram.com/ticianomorvan"
   */
  url: string;
}