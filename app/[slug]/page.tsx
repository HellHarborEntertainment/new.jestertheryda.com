import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedirectPortal from "../components/redirect-portal";
import { findRedirect, redirects } from "../redirects";

type RedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return redirects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RedirectPageProps): Promise<Metadata> {
  const entry = findRedirect((await params).slug);
  if (!entry) return {};

  return {
    title: `${entry.label} | JesterTheRyda Link`,
    description: `Official JesterTheRyda redirect to ${entry.label}.`,
    alternates: { canonical: `/${entry.slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const entry = findRedirect((await params).slug);
  if (!entry) notFound();

  return (
    <>
      <meta httpEquiv="refresh" content={`2;url=${entry.destination}`} />
      <RedirectPortal destination={entry.destination} label={entry.label} slug={entry.slug} />
    </>
  );
}
