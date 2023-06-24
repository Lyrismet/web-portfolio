'use client'
import styles from './WelcomePage.module.scss'

export default function WelcomePage() {
    return (
        <div className={styles.box}>
            <div className={styles.welcomeWrapper}>
                <div className={styles.welcome}>
                    <div className={styles.rectangleBack}/>
                    <div className={styles.rectangleMain}/>
                    <div className={styles.rectangleFront}/>
                    <h1 className={styles.textBack}>WEB-PORTFOLIO</h1>
                    <div className={styles.textFront}>WEB-PORTFOLIO</div>
                    <div className={styles.textSub}>by Lyrismet🍀</div>
                </div>
            </div>
        </div>
    );
}