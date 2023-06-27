import styles from './skillBadge.module.scss'


const SkillBadge = ({ text, color }) => {
    return (
        <div style={{ borderColor: color}} className={styles.badge}>
            <span style={{color: color}} className={styles.text}>{text}</span>
        </div>
    );
};

export default SkillBadge;
