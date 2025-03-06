import styles from "./tearEffect.module.css";

export default function TearEffect({ isHero = false, blueBackground = false}: { isHero?: boolean, blueBackground?:boolean }) {
  return (
    <div className={`${styles.tearEffect} ${blueBackground ? styles.blueBackground : ''} ${isHero ? styles.hero : ''}`}></div>
  );
}