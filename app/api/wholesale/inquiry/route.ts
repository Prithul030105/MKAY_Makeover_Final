import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] || character))

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const fields = ['name', 'email', 'phone', 'companyName', 'productName'] as const
    if (fields.some((field) => !String(body[field] || '').trim())) return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    if (!String(body.email).includes('@')) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })

    const to = process.env.WHOLESALE_EMAIL_TO
    const host = process.env.SMTP_HOST
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    if (!to || !host || !user || !pass) {
      console.error('Wholesale email is not configured. Set WHOLESALE_EMAIL_TO and SMTP_* variables.')
      return NextResponse.json({ error: 'The enquiry email service is not configured yet. Please contact us by WhatsApp.' }, { status: 503 })
    }

    const values = {
      name: String(body.name).trim(), email: String(body.email).trim(), phone: String(body.phone).trim(),
      companyName: String(body.companyName).trim(), productName: String(body.productName).trim(),
      productCode: String(body.productCode || '').trim(), quantity: String(body.quantity || '').trim(),
      requirement: String(body.requirement || '').trim(), message: String(body.message || '').trim(),
    }
    const rows = [
      ['Name', values.name], ['Email', values.email], ['Phone / WhatsApp', values.phone], ['Business / Salon', values.companyName],
      ['Product', values.productName], ['Product code', values.productCode || 'Not selected'], ['Estimated quantity', values.quantity || 'Not specified'],
      ['Request type', values.requirement || 'Not specified'], ['Message', values.message || 'No additional message'],
    ].map(([label, value]) => `<tr><td style="padding:8px 14px;border:1px solid #eadde0;font-weight:600">${escapeHtml(label)}</td><td style="padding:8px 14px;border:1px solid #eadde0">${escapeHtml(value)}</td></tr>`).join('')

    const transporter = nodemailer.createTransport({ host, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', auth: { user, pass } })
    await transporter.sendMail({ from: process.env.SMTP_FROM || user, to, replyTo: values.email, subject: `Wholesale enquiry — ${values.productCode || values.productName}`, text: Object.entries(values).map(([key, value]) => `${key}: ${value || 'Not specified'}`).join('\n'), html: `<div style="font-family:Arial,sans-serif;color:#251c20"><h2>New MKAY MAKEOVER wholesale enquiry</h2><table style="border-collapse:collapse">${rows}</table></div>` })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Wholesale email error:', error)
    return NextResponse.json({ error: 'Unable to send your enquiry right now. Please try again or contact us by WhatsApp.' }, { status: 500 })
  }
}
