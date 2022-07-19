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
  FaGlobe,
} from "react-icons/fa";

interface IDictionary {
  /**
   * @description String used to index platform by name.
   */
  [index: string]: {
    /**
     * @description Platform's icon to be show.
     */
    icon: ReactElement<IconType>;
    /**
     * @description Custom background color of the card.
     * It can be a HEX code or a plain background-color property like linear-gradient.
     * @example "#8234EA" or "linear-gradient(...)"
     */
    color: string;
  };
}

/**
 * @name SOCIALS
 * @description Supported socials with icon.
 */
const SOCIALS: IDictionary = {
  INSTAGRAM: {
    icon: <FaInstagram />,
    color:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(190,53,134,1) 41%, rgba(193,53,132,1) 42%, rgba(253,29,29,1) 76%, rgba(252,175,69,1) 100%)",
  },
  FACEBOOK: {
    icon: <FaFacebook />,
    color: "#4267B2",
  },
  YOUTUBE: {
    icon: <FaYoutube />,
    color: "#FF0000",
  },
  TIKTOK: {
    icon: <FaTiktok />,
    color: "#000000",
  },
  LINKEDIN: {
    icon: <FaLinkedin />,
    color: "#0E76A8",
  },
  TWITCH: {
    icon: <FaTwitch />,
    color: "#6441A5",
  },
  TWITTER: {
    icon: <FaTwitter />,
    color: "#00ACEE",
  },
  TELEGRAM: {
    icon: <FaTelegram />,
    color: "#0088CC",
  },
  BEHANCE: {
    icon: <FaBehance />,
    color: "#053EFF",
  },
  AMAZON: {
    icon: <FaAmazon />,
    color: "#FF9900",
  },
  SPOTIFY: {
    icon: <FaSpotify />,
    color: "#1DB954",
  },
  CODEPEN: {
    icon: <FaCodepen />,
    color: "#000000",
  },
  DISCORD: {
    icon: <FaDiscord />,
    color: "#7289DA",
  },
  GITHUB: {
    icon: <FaGithub />,
    color: "#333",
  },
  GITLAB: {
    icon: <FaGitlab />,
    color: "#FCA326",
  },
  FREECODECAMP: {
    icon: <FaFreeCodeCamp />,
    color: "#006400",
  },
  MEDIUM: {
    icon: <FaMedium />,
    color: "#FFC017",
  },
  DEVIANTART: {
    icon: <FaDeviantart />,
    color: "#05CC47",
  },
  REDDIT: {
    icon: <FaReddit />,
    color: "#FF4500",
  },
  SLACK: {
    icon: <FaSlack />,
    color: "#E01563",
  },
  SOUNDCLOUD: {
    icon: <FaSoundcloud />,
    color: "#FF8800",
  },
  SKYPE: {
    icon: <FaSkype />,
    color: "#00AFF0",
  },
  STEAM: {
    icon: <FaSteam />,
    color: "#000000",
  },
  TUMBLR: {
    icon: <FaTumblr />,
    color: "#35465C",
  },
  WHATSAPP: {
    icon: <FaWhatsapp />,
    color: "#25D366",
  },
  OTHER: {
    icon: <FaGlobe />,
    color: "#000",
  },
};

export default SOCIALS;
