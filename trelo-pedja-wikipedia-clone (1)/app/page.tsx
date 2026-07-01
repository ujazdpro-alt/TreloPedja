import { Article } from '@/components/article'
import { ArticleTabs } from '@/components/article-tabs'
import { LeftNav } from '@/components/left-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div className="min-h-screen bg-wiki-bg text-wiki-text">
      <SiteHeader />
      <div className="mx-auto flex max-w-[1300px] gap-6 px-3 py-4">
        <LeftNav />
        <main className="min-w-0 flex-1">
          <ArticleTabs />
          <Article />
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
