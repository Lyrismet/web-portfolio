import styles from './Contacts.module.scss'
import {RiBehanceLine, RiGithubLine, RiMailLine, RiTelegramLine} from "react-icons/ri";

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <h1>Contact me:</h1>
            <a href="mailto:ana0203tir@gmail.com" target="_blank"> ana0203tir@gmail.com<RiMailLine/> </a>
            <a href="https://github.com/Lyrismet" target="_blank">Github<RiGithubLine/> </a>
            <a href="https://t.me/Lyrismet" target="_blank">Telegram<RiTelegramLine/> </a>
            <a href="https://www.behance.net/lyrismet" target="_blank">Behance <RiBehanceLine/> </a>
        </div>
    )
}