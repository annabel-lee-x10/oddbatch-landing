import apps from "../../content/apps";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.wordmark}>
          <span className={styles.prompt}>$</span> oddbatch
        </span>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>
          A <em className={styles.emphasis}>quiet</em> shelf for small apps.
        </h1>
        <p className={styles.heroBody}>
          Independent tools built by people without marketing teams. Collected
          here because the good ones are hard to find.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>ON THE SHELF</div>
        {apps.length === 0 ? (
          <p className={styles.emptyState}>
            <span className={styles.chevron}>&gt;</span> first batch dropping soon
          </p>
        ) : (
          <ul className={styles.shelfList}>
            {apps.map((app) => (
              <li key={app.name} className={styles.shelfRow}>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shelfLink}
                >
                  <span className={styles.appName}>{app.name}</span>
                  <span className={styles.appDesc}>{app.oneLine}</span>
                  <span className={styles.appPlatform}>
                    {app.platform.join(" / ")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>SUBMIT</div>
        <p className={styles.submitBody}>
          Built something small and useful? Send it over &mdash;{" "}
          <a href="mailto:hello@oddbatch.app">hello@oddbatch.app</a>
        </p>
      </section>

      <p className={styles.fineprint}>
        Not affiliated with any of them. No rankings, no cut. Just a shelf.
      </p>

      <footer className={styles.footer}>
        <span>oddbatch.app</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
