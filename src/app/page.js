import styles from './page.module.scss'
import AllProjects from "@/components/project/allProjects";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>
        <AllProjects/>
    </main>
  )
}
