import { SOCIALS } from "@/lib/socials"

export default function Footer() {
  return (
    <footer className="bg-transparent py-20 relative z-10">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-6">Connect</h3>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            <a
              href={SOCIALS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {/* Stylized X logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 2h4.2l4.5 6 5.3-6H22l-7.1 8.1L22 22h-4.3l-5-6.6L7 22H2.5l7.6-8.6L3.5 2z"/>
              </svg>
            </a>

            <a
              href={SOCIALS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </a>

            <a
              href={SOCIALS.email}
              aria-label="Email"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
