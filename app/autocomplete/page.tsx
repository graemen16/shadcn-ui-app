"use client"

/* autocomplete/page.tsx */
import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AutoCompleteInput } from "@/components/autocomplete-input"

export default function IndexPage() {
  const autoCompleteList: string[] = [
    "Chocolate",
    "Coconut",
    "Mint",
    "Strawberry",
    "Vanilla",
  ]

  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Autocomplete Input Examples <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
          Say something helpful or at least interesting here!
          </p>
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex items-center space-x-2">
          <AutoCompleteInput
            autoCompleteList={autoCompleteList}
            type="text"
            id="text"
            placeholder="Type or Choose..."
            name="ice-cream-choice"
          />
          <Button type="submit">Place Order</Button>
        </div>
      </section>
    </div>
  )
}
