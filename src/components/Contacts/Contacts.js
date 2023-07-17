import styles from './Contacts.module.scss'
import {RiBehanceLine, RiGithubLine, RiMailLine, RiTelegramLine} from "react-icons/ri";

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <h1>Contact me:</h1>
            <a href="mailto:ana0203tir@gmail.com"> ana0203tir@gmail.com<RiMailLine/> </a>
            <a href="https://github.com/Lyrismet">Github<RiGithubLine/> </a>
            <a href="https://t.me/Lyrismet">Telegram<RiTelegramLine/> </a>
            <a href="https://www.behance.net/lyrismet">Behance <RiBehanceLine/> </a>
        </div>
    )
}