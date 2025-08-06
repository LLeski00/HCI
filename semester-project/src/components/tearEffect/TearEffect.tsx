import styles from "./tearEffect.module.css";

export default function TearEffect({ isHero = false, blueBackground = false, darkBackground = false}: { isHero?: boolean, blueBackground?:boolean,  darkBackground?:boolean}) {
  return (
    <div className={`${styles.tearEffect} ${blueBackground ? styles.blueBackground : ''} ${darkBackground ? styles.darkBackground : ''} ${isHero ? styles.hero : ''}`}></div>
  );
}