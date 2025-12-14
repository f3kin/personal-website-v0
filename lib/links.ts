export const LINKS = {
  site: {
    base: "https://finlayekins.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/finlayekins",
    instagram: "https://www.instagram.com/finlay_ek/",
    x: "https://x.com/f3kin5",
    spotify: "https://open.spotify.com/user/finlaydekins?si=mr0Vwy4tSdqL4lbt_yQ0fA",
    email: "mailto:finlay@hourglassdigital.com.au",
  },
  content: {
    books: "https://finlay-ekins.notion.site/books",
    writing: "https://medium.com/@finlayekins",
  },
  company: {
    hourglassDigital: "https://www.hourglassdigital.com.au",
  },
} as const

export type LinkGroups = typeof LINKS
export type SocialKey = keyof LinkGroups["social"]

