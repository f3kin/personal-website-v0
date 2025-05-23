import SectionHeading from "@/components/shared/section-heading"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | John Doe",
  description: "Get in touch with John Doe for collaboration, job opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="Get in Touch" subtitle="I'd love to hear from you" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
