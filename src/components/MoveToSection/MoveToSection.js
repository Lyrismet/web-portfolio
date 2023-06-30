import styles from './MoveToSection.module.scss'

export default function MoveToSection({text}) {
    return(
        <div className={styles.moveToSection}>
            <h1 className={styles.title}>{text}</h1>
            <div className={styles.arrow}>
                <div className={styles.arrowTop}></div>
                <div className={styles.arrowCenter}></div>
                <div className={styles.arrowBottom}></div>
            </div>
        </div>
    )
}