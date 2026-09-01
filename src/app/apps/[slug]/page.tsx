import { notFound } from "next/navigation";
import Link from "next/link";
import { apps } from "../../../../content/apps";
import styles from "./app.module.css";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.name} — oddbatch`,
    description: app.tagline,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.back}>
          &lt; back to shelf
        </Link>
      </nav>

      <article className={styles.card}>
        <div className={styles.slug}>[{app.slug}]</div>
        <h1 className={styles.name}>{app.name}</h1>
        <p className={styles.tagline}>{app.tagline}</p>
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visit}
        >
          Visit {app.name} &rarr;
        </a>
      </article>

      <footer className={styles.footer}>
        <span>oddbatch.app</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
