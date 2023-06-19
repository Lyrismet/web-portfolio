import styles from './skillBadge.module.scss'


const SkillBadge = ({ icon: Icon, text, color}) => {
    return (
        <div style={{ borderColor: color}} className={styles.budge}>
            <Icon style={{color: color}} className={styles.icon}/>
            <span style={{color: color}} className={styles.text}>{text}</span>
        </div>
    );
};

export default SkillBadge;
