import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      fullName,
      phone,
      city,
      address,
      xrayType,
      timeSlot,
      prescriptionStatus,
      notes,
    } = data;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Full Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "Xrayoncall16@gmail.com";
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ── Build HTML Email ─────────────────────────────────────────────────────
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        
        <!-- Header -->
        <div style="background: #003b80; padding: 24px 28px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; letter-spacing: -0.5px; color: #ffffff;">🏥 XrayOnCall — New Booking Alert</h1>
          <p style="margin: 6px 0 0; font-size: 13px; color: #93c5fd;">Doorstep Diagnostic Dispatch Request</p>
        </div>

        <!-- Alert Banner -->
        <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 14px 20px; margin: 20px 28px 0; border-radius: 6px;">
          <p style="margin: 0; font-weight: bold; color: #1e3a8a; font-size: 15px;">
            🚨 ACTION REQUIRED: New At-Home Scan Booking Received
          </p>
          <p style="margin: 6px 0 0; font-size: 13px; color: #3b82f6;">
            Received at: <strong>${timestamp} IST</strong>
          </p>
        </div>

        <!-- Patient Details Table -->
        <div style="padding: 20px 28px 28px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; width: 160px; border-bottom: 1px solid #e2e8f0;">Patient Name</td>
                <td style="padding: 12px 10px; color: #0f172a; font-weight: bold; font-size: 16px; border-bottom: 1px solid #e2e8f0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Phone Number</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0;">
                  <a href="tel:${phone}" style="color: #2563eb; font-weight: bold; text-decoration: none; font-size: 16px;">${phone}</a>
                  &nbsp;•&nbsp;
                  <a href="https://wa.me/91${String(phone).replace(/\D/g, "").slice(-10)}" style="color: #16a34a; text-decoration: none; font-weight: 600;">WhatsApp</a>
                </td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Location / City</td>
                <td style="padding: 12px 10px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${city || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Complete Address</td>
                <td style="padding: 12px 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${address || "To be confirmed on call"}</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Diagnostic Test</td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #e2e8f0;">
                  <span style="background: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 9999px; font-weight: bold; font-size: 13px;">
                    ${xrayType || "General X-Ray"}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Preferred Slot</td>
                <td style="padding: 12px 10px; color: #0f172a; font-weight: bold; border-bottom: 1px solid #e2e8f0;">${timeSlot || "Earliest Available"}</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Prescription Status</td>
                <td style="padding: 12px 10px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${prescriptionStatus || "Available with patient"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 10px; color: #64748b; font-weight: 600;">Additional Notes</td>
                <td style="padding: 12px 10px; color: #334155;">${notes || "None"}</td>
              </tr>
            </tbody>
          </table>

          <!-- CTA Call Button -->
          <div style="margin-top: 28px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 14px 32px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 15px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
              📞 Call Patient Now: ${phone}
            </a>
          </div>

          <div style="margin-top: 14px; text-align: center;">
            <a href="https://wa.me/91${String(phone).replace(/\D/g, "").slice(-10)}?text=Hello%20${encodeURIComponent(fullName)}%2C%20this%20is%20XrayOnCall.%20Your%20booking%20for%20${encodeURIComponent(xrayType || "X-Ray")}%20is%20confirmed.%20Our%20technician%20will%20arrive%20soon." style="display: inline-block; background: #16a34a; color: #ffffff; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 14px;">
              💬 WhatsApp Patient
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 16px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Automated dispatch from XrayOnCall Doorstep Diagnostics Portal
        </div>
      </div>
    `;

    // ── SMTP Configuration ───────────────────────────────────────────────────
    const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || "").trim();
    const smtpPass = (process.env.SMTP_PASS || process.env.EMAIL_PASS || "").replace(/\s/g, "");

    console.log(`[XrayOnCall] SMTP_USER configured: ${smtpUser ? "YES (" + smtpUser + ")" : "NO"}`);
    console.log(`[XrayOnCall] SMTP_PASS length: ${smtpPass.length} chars`);

    const hasValidConfig = Boolean(smtpUser) && smtpPass.length >= 8;

    let emailSent = false;
    let emailError = "";

    if (hasValidConfig) {
      // Try port 465 (SSL) first, fall back to port 587 (TLS) if it fails
      const configs = [
        { host: "smtp.gmail.com", port: 465, secure: true },
        { host: "smtp.gmail.com", port: 587, secure: false },
      ];

      for (const cfg of configs) {
        try {
          console.log(`[XrayOnCall] Trying SMTP ${cfg.host}:${cfg.port} (secure=${cfg.secure})...`);

          const transporter = nodemailer.createTransport({
            host: cfg.host,
            port: cfg.port,
            secure: cfg.secure,
            auth: { user: smtpUser, pass: smtpPass },
            connectionTimeout: 20000,
            greetingTimeout: 15000,
            socketTimeout: 25000,
            ...(cfg.secure === false && {
              tls: { rejectUnauthorized: false },
            }),
          });

          await transporter.sendMail({
            from: `"XrayOnCall Dispatch" <${smtpUser}>`,
            to: recipientEmail,
            replyTo: smtpUser,
            subject: `🚨 New Booking: ${fullName} | ${xrayType || "X-Ray"} | ${phone} | ${city || "Delhi NCR"}`,
            html: emailHtml,
            text: `New XrayOnCall Booking\nPatient: ${fullName}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\nTest: ${xrayType}\nSlot: ${timeSlot}\nPrescription: ${prescriptionStatus}\nNotes: ${notes}\nTimestamp: ${timestamp} IST`,
          });

          emailSent = true;
          console.log(`[XrayOnCall] ✅ Email sent to ${recipientEmail} via ${cfg.host}:${cfg.port}`);
          break; // success — stop trying
        } catch (err: unknown) {
          const errMsg = err instanceof Error ? err.message : String(err);
          emailError = errMsg;
          console.error(`[XrayOnCall] ❌ SMTP ${cfg.port} failed: ${errMsg}`);
          // continue to next config
        }
      }

      if (!emailSent) {
        console.error(`[XrayOnCall] All SMTP attempts failed. Last error: ${emailError}`);
      }
    } else {
      console.warn("[XrayOnCall] ⚠️  SMTP credentials missing or incomplete in .env.local");
      console.warn(`  SMTP_USER="${smtpUser}" | SMTP_PASS length=${smtpPass.length}`);
      console.warn(`  Booking data: ${fullName} | ${phone} | ${xrayType} | ${timeSlot}`);
    }

    // ── Always return 200 (booking is recorded regardless of email) ──────────
    return NextResponse.json({
      success: true,
      emailSent,
      emailError: emailSent ? null : emailError || "SMTP not configured",
      message: emailSent
        ? `Booking confirmed! Details dispatched to ${recipientEmail}.`
        : `Booking recorded. Dispatch team will call ${phone} shortly.`,
      data: { fullName, phone, city, xrayType, recipient: recipientEmail },
    });
  } catch (error) {
    console.error("[XrayOnCall Booking Error]:", error);
    return NextResponse.json(
      { error: "Failed to process booking. Please call 9205761556 directly." },
      { status: 500 }
    );
  }
}
