import styles from './About.module.scss'

export default function About() {
    return (
        <div className={styles.about}>
            <div id="about" className={styles.aboutInfo}>
                <p className={styles.greetings}>✍🏻 Hi, I’m</p>
                <h2 className={styles.title}>anastasia</h2>
                <div className={styles.subtitleText}>frontend-developer</div>
                <p className={styles.text}>
                    who loves digging into code to find <span>optimal solutions</span>. My <span>experience in UI/UX
                    design</span> helps me better
                    understand designers decisions. I really enjoy <span>improving my skills</span> with pet projects
                    in which I
                    think through the functionality and design of an application.
                    I <span>value product development</span> in a team
                    of experienced developers. In my spare time I like to study psychology, which allows me to have more
                    <span>harmonious</span> relationships with my colleagues and increase my <span>productivity</span>
                    .
                </p>
            </div>
            <div className={styles.aboutImage}></div>
        </div>
    )
}