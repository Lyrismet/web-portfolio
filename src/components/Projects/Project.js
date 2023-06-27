import styles from './Project.module.scss'
import Image from "next/image";
import {FiPaperclip} from "react-icons/fi";
import SkillBadge from "@/components/SkillBadge/skillBadge";
import projectsData from "@/data/projects.json";

const Project = ({image, title, description, link, story, badges}) => {
    return (
        <div className={styles.project}>
            <div className={styles.frontCard}>
                <div className={styles.holoBackground}>
                    <Image style={{borderRadius: "10px"}} src={image} alt={title} width={400}
                           height={280}/>
                </div>
                <div className={styles.wrapperName}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.buttonAttachments}>
                        <FiPaperclip/>
                    </button>
                </div>
                <div className={styles.wrapperDesc}>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.link} href={link} target="_blank">🔗<span>Link to GitHub</span></a>
                    <div className={styles.badges}>
                        {badges.map((badge, index) => (
                            <SkillBadge key={index} text={badge.text} color={badge.color}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.backCard}>
                <p className={styles.story}>
                    {story}
                </p>
            </div>

        </div>
    );
};

export default Project;