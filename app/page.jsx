import FooterComp from "./components/footer/FooterComp";
import Hero from "./components/hero/Hero";
import Listen from "./components/listen/Listen";
import Show from "./components/shows/Show";


import styles from './main.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div>
        <Hero />
        <Show />
        <Listen />
        <FooterComp />
      </div>
    </main>
      
  )
}
