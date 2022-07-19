import type SocialType from './social';

/**
 * @description An external link to a desired platform with a custom title.
 */
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

  /**
   * Custom background color, will replace default parameter.
   * @example "#927AF3" or "linear-gradient(...)"
   */
  color?: string;
}