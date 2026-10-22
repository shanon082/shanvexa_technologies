import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell section-space">
      <div className="eyebrow">SHANVEXA TECHNOLOGIES / 404</div>
      <h1>That page isn’t here.</h1>
      <p>Return to the homepage to explore our services and selected work.</p>
      <Link className="button button-dark" href="/">
        Back to the homepage <span>↗</span>
      </Link>
    </main>
  );
}
