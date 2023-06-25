'use client'
import styles from './Welcome.module.scss'

export default function Welcome() {
    return (
        <div className={styles.box}>
            <div className={styles.welcomeWrapper}>
                <div className={styles.welcome}>
                    <div className={styles.rectangleBack}/>
                    <div className={styles.rectangleMain}/>
                    <div className={styles.rectangleFront}/>
                    <h1 className={styles.textBack}>WEB-PORTFOLIO</h1>
                    <h1 className={styles.textFront}>WEB-PORTFOLIO</h1>
                    <div className={styles.textSub}>by Lyrismet🍀</div>
                </div>
            </div>
        </div>
    );
}