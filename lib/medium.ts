import Parser from "rss-parser"

export interface MediumPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
  category: string
}

// Minimal feed item shape we rely on
interface MediumFeedItem {
  title?: string
  contentSnippet?: string
  link?: string
  categories?: string[]
  pubDate?: string
  isoDate?: string
  content?: string
  [key: string]: unknown
}

const parser: Parser<unknown, MediumFeedItem> = new Parser()

export async function getMediumPosts(username: string = "finlayekins"): Promise<MediumPost[]> {
  const feedUrl = `https://medium.com/feed/@${username}`

  const feed = await parser.parseURL(feedUrl)

  return (feed.items || []).map((item: MediumFeedItem, index: number): MediumPost => {
    const contentHtml = (item["content:encoded"] as string | undefined) || item.content || ""

    // Use the first non-empty line from contentSnippet (fallback to stripped HTML) and cap at 7 words
    const baseText = (item.contentSnippet && item.contentSnippet.trim()) || stripHtml(contentHtml)
    const firstLine = getFirstNonEmptyLine(baseText)
    const excerpt = truncateWords(firstLine, 7)

    const iso = item.isoDate || item.pubDate || new Date().toISOString()

    return {
      id: index + 1,
      title: item.title || "Untitled",
      excerpt,
      date: new Date(iso).toISOString().split("T")[0],
      slug: item.link || "#",
      image: extractImage(contentHtml) || "/placeholder.jpg",
      category: (item.categories && item.categories[0]) || "General",
    }
  })
}

function extractImage(html: string): string | null {
  if (!html) return null
  const match = html.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/i)
  return match ? match[1] : null
}

function getFirstNonEmptyLine(text: string): string {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  return lines[0] || text.trim()
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

function truncateWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/)
  if (words.length <= maxWords) return text.trim()
  return words.slice(0, maxWords).join(" ") + "…"
}
