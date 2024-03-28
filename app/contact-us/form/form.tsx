"use client"

import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react"
import { cn } from "@/lib/utils"
import { sendFormToMail } from "../send-form"
import { SubmitButton } from "./submit-button"
import { useFormState } from "react-dom"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Button from "@/components/ui/Button"

const initialState = {
  message: ``,
}

export function ContactForm() {
  const [state, formAction] = useFormState(sendFormToMail, initialState)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      })
      formRef.current?.reset()
    } else if (state.err) {
      toast({
        title: `Uh oh! Something went wrong.`,
        description: state.err,
        variant: "destructive",
        action: (
          <ToastAction altText="Try again" asChild>
            <Button
              variant="outline"
              onClick={() => formRef.current?.requestSubmit()}
              className="text-white !text-sm"
            >
              Try again
            </Button>
          </ToastAction>
        ),
      })
    }
  }, [state.err, state.message, toast])
  return (
    <form
      ref={formRef}
      className="pt-[7.5rem] pb-[4.75rem] px-8 md:px-20 rounded-e-[2.5rem] space-y-10"
      action={formAction}
    >
      <LabelInput name="name" required>
        your full name
      </LabelInput>
      <div className="flex gap-10 lg:flex-wrap">
        <LabelInput type="email" name="email" required>
          email
        </LabelInput>
        <LabelInput type="tel" name="tel">
          phone
        </LabelInput>
      </div>
      <LabelTextarea name="message" required>
        message
      </LabelTextarea>
      <div className="text-right">
        <SubmitButton />
      </div>
    </form>
  )
}

function Label({
  label,
  children,
}: Required<PropsWithChildren<{ label: string }>>) {
  return (
    <label className="space-y-2 [&>*]:bg-transparent block">
      <p className="capitalize">{label}</p>
      {children}
    </label>
  )
}

const CLASS_NAME = `border border-[#5F6368] rounded-lg w-full`

function LabelInput({
  children,
  ...restProps
}: Required<PropsWithChildren> & ComponentPropsWithoutRef<"input">) {
  return (
    <Label label={children as string}>
      <input
        className={cn(
          `p-2
          `,
          CLASS_NAME
        )}
        spellCheck={false}
        autoCapitalize="on"
        {...restProps}
      />
    </Label>
  )
}

function LabelTextarea({
  children,
  ...restProps
}: Required<PropsWithChildren> & ComponentPropsWithoutRef<"textarea">) {
  return (
    <Label label={children as string}>
      <textarea
        className={cn(`h-28 resize-none p-2`, CLASS_NAME)}
        {...restProps}
      />
    </Label>
  )
}
