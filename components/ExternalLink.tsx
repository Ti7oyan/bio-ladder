import type ILink from "../types/link";
import SOCIALS from "../models/socials";
import styles from "./ExternalLink.module.css";

export default function ExternalLink({ platform, title, url, color }: ILink) {
  const isSaturated =
    SOCIALS[platform].color.includes("FF") || color?.includes("FF");

  return (
    <li
      title={title}
      className={styles.container}
      style={{
        background: color ? color : SOCIALS[platform].color,
      }}
    >
      <a
        className={`${styles.card_container} ${
          isSaturated ? null : styles.white
        }`}
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        {platform in SOCIALS ? (
          <span className={styles.icon}>{SOCIALS[platform].icon}</span>
        ) : null}

        <p className={styles.title}>{title}</p>
      </a>
    </li>
  );
}
