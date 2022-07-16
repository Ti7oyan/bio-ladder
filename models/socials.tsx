import { ReactElement } from "react";
import { IconType } from "react-icons";

// Icons
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaTelegram,
  FaBehance,
  FaAmazon,
  FaSpotify,
  FaCodepen,
  FaDiscord,
  FaGithub,
  FaGitlab,
  FaFreeCodeCamp,
  FaMedium,
  FaDeviantart,
  FaReddit,
  FaSlack,
  FaSoundcloud,
  FaSkype,
  FaSteam,
  FaTumblr,
  FaWhatsapp,
} from "react-icons/fa";

interface IDictionary {
  [index: string]: ReactElement<IconType>;
}

/**
 * @name SOCIALS
 * @description Supported socials with icon.
 */
const SOCIALS: IDictionary = {
  INSTAGRAM: <FaInstagram />,
  FACEBOOK: <FaFacebook />,
  YOUTUBE: <FaYoutube />,
  TIKTOK: <FaTiktok />,
  LINKEDIN: <FaLinkedin />,
  TWITCH: <FaTwitch />,
  TWITTER: <FaTwitter />,
  TELEGRAM: <FaTelegram />,
  BEHANCE: <FaBehance />,
  AMAZON: <FaAmazon />,
  SPOTIFY: <FaSpotify />,
  CODEPEN: <FaCodepen />,
  DISCORD: <FaDiscord />,
  GITHUB: <FaGithub />,
  GITLAB: <FaGitlab />,
  FREECODECAMP: <FaFreeCodeCamp />,
  MEDIUM: <FaMedium />,
  DEVIANTART: <FaDeviantart />,
  REDDIT: <FaReddit />,
  SLACK: <FaSlack />,
  SOUNDCLOUD: <FaSoundcloud />,
  SKYPE: <FaSkype />,
  STEAM: <FaSteam />,
  TUMBLR: <FaTumblr />,
  WHATSAPP: <FaWhatsapp />,
};

export default SOCIALS;
