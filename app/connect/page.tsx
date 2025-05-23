import SectionHeading from "@/components/shared/section-heading"
import ConnectForm from "@/components/connect/connect-form"
import ConnectInfo from "@/components/connect/connect-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Connect | Finlay Ekins",
  description: "Get in touch with me to chat, collaborate, or just say hello.",
}

export default function ConnectPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading title="Let's Connect" subtitle="I'd love to hear from you" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ConnectForm />
        <ConnectInfo />
      </div>
    </div>
  )
}
