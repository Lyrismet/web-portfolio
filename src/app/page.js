'use client'
import styles from './page.module.scss'
import { useEffect, useRef } from "react";
import { Element } from 'react-scroll';
import Welcome from "@/components/Welcome/Welcome";
import About from "@/components/About/About";
import AllProjects from "@/components/Projects/allProjects";
import MoveToSection from "@/components/MoveToSection/MoveToSection";

export default function Home() {
    const mainCanvasRef = useRef(null);

    useEffect(() => {
        const content = mainCanvasRef.current.querySelector('div');
        const handleScroll = (event) => {
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            mainCanvasRef.current.scrollLeft -= delta * 80; // Adjust scroll speed here
            event.preventDefault();
        };

        mainCanvasRef.current.addEventListener('mousewheel', handleScroll, false);
        mainCanvasRef.current.addEventListener('DOMMouseScroll', handleScroll, false);

        return () => {
            mainCanvasRef.current.removeEventListener('mousewheel', handleScroll, false);
            mainCanvasRef.current.removeEventListener('DOMMouseScroll', handleScroll, false);
        };
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.mainLeftFixed}></div>
            <div className={styles.mainCanvas} ref={mainCanvasRef} id="mainCanvas">
                <div className={styles.wrapper}>
                    <Element name="welcome" className="element">
                        <Welcome />
                    </Element>
                    <Element style={{display: "flex"}} name="about" className="element">
                        <MoveToSection text="About"/>
                        <About />
                    </Element>
                    <Element style={{display: "flex"}} name="projects" className="element">
                        <MoveToSection text="Works"/>
                        <AllProjects />
                    </Element>
                </div>
            </div>
        </main>
    );
}
