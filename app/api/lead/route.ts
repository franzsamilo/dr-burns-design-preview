import { NextResponse } from "next/server";

/**
 * Lead intake endpoint for the inline consultation form.
 *
 * This validates and acknowledges the lead. Before launch, forward it to
 * wherever the practice actually works leads — set ONE of:
 *   - LEAD_WEBHOOK_URL  (Zapier/Make/CRM webhook), or
 *   - an email provider (Resend/SendGrid) with its API key,
 * and POST/send the payload below. Until then it logs server-side so
 * submissions are observable in preview/deploy logs.
 */
export async function POST(req: Request) {
  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const time = String(data.time ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, time, source: "dental-implants-landing" }),
      });
    } catch {
      // Don't fail the visitor's submission on a downstream hiccup — the lead
      // is still logged below for manual recovery.
    }
  }

  console.log("[lead]", { name, phone, time });
  return NextResponse.json({ ok: true });
}
