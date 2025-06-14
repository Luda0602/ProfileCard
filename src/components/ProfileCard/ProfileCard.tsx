import { useState } from "react";
import styles from "./ProfileCard.module.css";
import photo from "../../assets/photo.jpg";

interface ProfileProps {
  name: string;
  description: string;
  email: string;
}

export default function ProfileCard({ name, description, email }: ProfileProps) {
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={photo}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{description}</p>

      <button className={styles.button} onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Сховати email" : "Показати email"}
      </button>

      <div
  className={`${styles.email} ${showEmail ? styles.visible : styles.hidden}`}
>
  <a href={`mailto:${email}`}>{email}</a>
</div>

      <div className={styles.socials}>
  <a href="https://t.me/mmssszszs" target="_blank" rel="noreferrer">📨 Telegram</a><br />
  <a href="https://www.instagram.com/_mykhaylivna_003?igsh=MXAzMm5uNjFpZWx1ag==" target="_blank" rel="noreferrer">📸 Instagram</a><br />
  <a href="https://github.com/Luda0602" target="_blank" rel="noreferrer">💻 GitHub</a>
</div>
    </div>
  );
}
