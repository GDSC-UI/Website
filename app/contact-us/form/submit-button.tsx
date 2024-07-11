"use client"

import Button from "@/components/ui/Button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="inline-flex items-center"
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />}
      Send Message
    </Button>
  )
}
