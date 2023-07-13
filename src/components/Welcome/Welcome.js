'use client'
import styles from './Welcome.module.scss'
import {TbClover} from 'react-icons/tb'

export default function Welcome() {
    return (
        <div className={styles.box}>
            <div className={styles.welcomeWrapper}>
                <div className={styles.welcome}>
                    <div className={styles.rectangleBack}/>
                    <div className={styles.rectangleMain}/>
                    <div className={styles.rectangleFront}/>
                    <h1 className={styles.textBack}>WEB<span>-</span>PORTFOLIO</h1>
                    <h1 className={styles.textFront}>WEB<span>-</span>PORTFOLIO</h1>
                    <div className={styles.textSub}>by Lyrismet<TbClover color="pink"/></div>
                </div>
            </div>
        </div>
    );
}