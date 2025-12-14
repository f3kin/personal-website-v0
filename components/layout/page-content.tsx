"use client"

import { PropsWithChildren } from "react"

type PageContentProps = PropsWithChildren<{
  className?: string
}>

export default function PageContent({ children, className = "" }: PageContentProps) {
  return (
    <div
      className={
        "relative z-10 flex flex-col gap-6 sm:gap-12 md:gap-16 " + className
      }
    >
      {children}
    </div>
  )
}

