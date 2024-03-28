"use server"

import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { z } from "zod"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  tel: z.string().optional(),
  message: z.string(),
})

const transport = nodemailer.createTransport({
  service: `gmail`,
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
})

export async function sendFormToMail(_: any, data: FormData) {
  const parsedFormData = schema.safeParse(Object.fromEntries(data.entries()))
  if (!parsedFormData.success) return { err: `Invalid form data` }
  const { name, email, tel, message } = parsedFormData.data
  const text = `${message} \n${tel}`

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.APP_EMAIL,
    subject: `Message from ${name} ${email}`,
    text,
  }
  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve(`Email sent`)
        } else {
          reject(err.message)
        }
      })
    })
  try {
    await sendMailPromise()
    return { message: `Email sent` }
  } catch (error: any) {
    return { err: `Server error` }
  }
}
