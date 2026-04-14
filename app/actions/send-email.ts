"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  business: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  const { fullName, email, phone, business, message } = formData

  // Validate required fields
  if (!fullName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "glowingleads.au@gmail.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Full Name:</strong> ${fullName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p style="margin: 10px 0;"><strong>Business Name:</strong> ${business || "Not provided"}</p>
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 8px;">
          <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          This message was sent from the GlowingLeads website contact form.
        </p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send message. Please try again later." }
  }
}
