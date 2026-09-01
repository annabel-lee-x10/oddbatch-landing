import Link from "next/link";
import { apps } from "../../content/apps";
import ThemeToggle from "./components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>

      <div className={styles.top}>
        <div className={styles.mark}>
          <span className={styles.dollar}>$</span>
          <span>oddbatch</span>
          <span className={styles.caret} aria-hidden="true"></span>
        </div>
        <ThemeToggle className={styles.toggle} />
      </div>

      <h1 className={styles.headline}>
        A <em className={styles.em}>quiet</em> shelf for small apps.
      </h1>

      <p className={styles.lede}>
        Independent tools built by people without marketing teams. Collected
        here because the good ones are hard to find.
      </p>

      <section className={styles.shelf}>
        <div className={styles.rule}></div>
        <div className={styles.label}>On the shelf</div>
        <div className={styles.rule}></div>

        {apps.map((app) => (
          <Link key={app.slug} href={`/apps/${app.slug}`} className={styles.item}>
            <span className={styles.caretmark}>&gt;</span>
            <span className={styles.body}>
              <span className={styles.head}>
                <span className={styles.name}>{app.name}</span>
                <span className={styles.appSlug}>[{app.slug}]</span>
              </span>
              <span className={styles.note}>{app.tagline}</span>
            </span>
          </Link>
        ))}
      </section>

      <section className={styles.submit}>
        <div className={styles.rule}></div>
        <div className={styles.label}>Submit</div>
        <p className={styles.submitText}>
          Built something small and useful? Send it over &mdash;{" "}
          <a href="mailto:hello@oddbatch.app">hello@oddbatch.app</a>
        </p>
      </section>

      <div className={styles.spacer}></div>

      <footer className={styles.footer}>
        <div className={styles.rule}></div>
        <p className={styles.fine}>
          Not affiliated with any of them. No rankings, no cut. Just a shelf.
        </p>
        <div className={styles.meta}>
          <span>oddbatch.app</span>
          <span>2026</span>
        </div>
      </footer>

    </div>
  );
}
