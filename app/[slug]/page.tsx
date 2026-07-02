import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Article } from '@/components/article'
import { ArticleTabs } from '@/components/article-tabs'
import { LeftNav } from '@/components/left-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getPerson, people } from '@/lib/people'

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const person = getPerson(slug)
  if (!person) return { title: 'Nie znaleziono – TreloPedja' }

  return {
    title: `${person.name} – TreloPedja, wolna encyklopedia`,
    description: person.tagline,
  }
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const person = getPerson(slug)
  if (!person) notFound()

  return (
    <div className="min-h-screen bg-wiki-bg text-wiki-text">
      <SiteHeader />
      <div className="mx-auto flex max-w-[1300px] gap-6 px-3 py-4">
        <LeftNav />
        <main className="min-w-0 flex-1">
          <ArticleTabs />
          <Article person={person} />
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
