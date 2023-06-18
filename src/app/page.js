import styles from './page.module.scss'
import AllProjects from "@/components/project/allProjects";

export default function Home() {
  return (
    <main className={styles.main}>
        <AllProjects/>
    </main>
  )
}
