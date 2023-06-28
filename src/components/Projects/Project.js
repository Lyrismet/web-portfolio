import React, { useState } from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import { FiPaperclip } from "react-icons/fi";
import SkillBadge from "@/components/SkillBadge/skillBadge";
import projectsData from "@/data/projects.json";
import {RiArrowGoBackLine} from "react-icons/ri";

const Project = ({ image, title, description, link, story, badges }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleGoBack = () => {
        setIsClicked(false);
    };

    return (
        <div className={styles.project}>
            <div
                className={styles.frontCard}
            >
                <div className={styles.holoBackground}>
                    <Image
                        style={{ borderRadius: "10px" }}
                        src={image}
                        alt={title}
                        width={400}
                        height={280}
                    />
                </div>
                <div className={styles.wrapperName}>
                    <h2 className={styles.title}>{title}</h2>
                    <button
                        className={styles.buttonAttachments}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    >
                        <FiPaperclip />
                    </button>
                </div>
                <div className={styles.wrapperDesc}>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.link} href={link} target="_blank">
                        🔗<span>Link to GitHub</span>
                    </a>
                    <div className={styles.badges}>
                        {badges.map((badge, index) => (
                            <SkillBadge key={index} text={badge.text} color={badge.color} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`${styles.backCard} ${isHovered ? styles.hoveredBackCard : ""} ${isClicked ? styles.clickedBackCard : ""}`}>
                <p className={styles.story}>{story}</p>
                <button className={styles.buttonAttachments} onClick={handleGoBack}>
                    <RiArrowGoBackLine />
                </button>
            </div>
        </div>
    );
};

export default Project;
