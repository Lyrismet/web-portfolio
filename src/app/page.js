'use client'
import styles from './page.module.scss'
import {useEffect, useRef} from "react";
import ScrollBooster from "scrollbooster";
import AllProjects from "@/components/project/allProjects";

export default function Home() {
    const mainCanvasRef = useRef(null);
    useEffect(
        () => {
            const viewport = mainCanvasRef.current;
            const content = mainCanvasRef.current.querySelector('div')

            const scrollBooster = new ScrollBooster({
                viewport,
                content,
                scrollMode: 'native',
                direction: 'horizontal'
            });

            return () => {
                scrollBooster.destroy();
            };
        }, []
    )

    return (
        <main className={styles.main}>
            <div className={styles.mainLeftFixed}></div>
            <div className={styles.mainCanvas} ref={mainCanvasRef}>
                <div>

                </div>

            </div>
            {/*<AllProjects/>*/}
        </main>
    )
}
