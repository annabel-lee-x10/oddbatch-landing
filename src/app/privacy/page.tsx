import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — oddbatch",
  description: "Privacy policy for oddbatch.app.",
  alternates: {
    canonical: "https://oddbatch.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.back}>
          &lt; back to shelf
        </Link>
      </nav>

      <div className={styles.body}>
        <p className={styles.updated}>Last updated: 1 September 2026</p>
        <h1 className={styles.title}>Privacy Policy</h1>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Who we are</h2>
          <p className={styles.text}>
            Oddbatch operates oddbatch.app, a listing of independent small apps. We are not
            affiliated with, and do not represent, any app listed on the shelf. Contact us at{" "}
            <a href="mailto:hello@oddbatch.app" className={styles.link}>hello@oddbatch.app</a>.
            This policy is written with reference to Singapore&apos;s Personal Data Protection
            Act (PDPA) and, where applicable, the GDPR.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. What we collect</h2>
          <p className={styles.text}>
            oddbatch.app is a static listing page. We do not offer accounts, logins, or
            submission forms. We do not run advertising or cross-site tracking. We do not use
            analytics cookies or any third-party analytics service.
          </p>
          <p className={styles.text}>
            When you visit the site, standard web server access logs are recorded by our
            hosting provider (Vercel). These logs include your IP address, browser user agent,
            the page requested, and a timestamp. We do not control the retention period for
            these logs; see Vercel&apos;s privacy policy for details.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Browser storage</h2>
          <p className={styles.text}>
            The site stores one value in your browser&apos;s localStorage: your preferred
            colour theme (light or dark). This value stays in your browser only and is never
            sent to any server. No cookies are set by oddbatch.app.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Why we process it</h2>
          <p className={styles.text}>
            Access logs are processed on the basis of legitimate interest in operating and
            securing a publicly accessible website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Third parties</h2>
          <p className={styles.text}>
            oddbatch.app is hosted on Vercel. Vercel processes access logs on our behalf
            under its own data processing terms. Each app listed on the shelf is an independent
            product with its own operator and privacy policy; we are not responsible for how
            those apps handle your data.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Retention</h2>
          <p className={styles.text}>
            We do not hold any personal data ourselves beyond what Vercel captures in standard
            access logs. If you contact us by email, we retain that correspondence for as long
            as needed to handle your query.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Your rights</h2>
          <p className={styles.text}>
            You may request access to, correction of, or deletion of any personal data we hold
            about you by emailing{" "}
            <a href="mailto:hello@oddbatch.app" className={styles.link}>hello@oddbatch.app</a>.
            We will respond within 30 days. If you are in the EU or UK, you may complain to
            your local supervisory authority; in Singapore, to the PDPC.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Changes</h2>
          <p className={styles.text}>
            We will post any material changes here with an updated date at the top of this page.
          </p>
        </section>
      </div>

      <footer className={styles.footer}>
        <span>oddbatch.app</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
