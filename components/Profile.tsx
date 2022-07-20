import Image from "next/image";
import type IProfile from "../types/profile";
import styles from "./Profile.module.css";

export default function Profile({
  firstName,
  lastName,
  role,
  picture,
  description,
}: IProfile) {
  return (
    <section className={styles.container}>
      <Image
        src={picture}
        alt={`${firstName}'s profile picture.`}
        width={128}
        height={128}
        className={styles.picture}
      />
      <h1 className={styles.name}>{`${firstName} ${lastName}`}</h1>
      <h2 className={styles.role}>{role}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
