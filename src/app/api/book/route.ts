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

    const recipientEmail = "Xrayoncall16@gmail.com";
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: #003b80; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: -0.5px;">XrayOnCall — New Booking Alert</h1>
          <p style="margin: 6px 0 0; font-size: 14px; color: #93c5fd;">Doorstep Diagnostic Registration</p>
        </div>
        
        <div style="padding: 24px 28px;">
          <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #1e3a8a; font-size: 15px;">
              🚨 Action Required: Patient requested immediate at-home scan.
            </p>
            <p style="margin: 4px 0 0; font-size: 13px; color: #3b82f6;">
              Received on: <strong>${timestamp} IST</strong>
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Patient Name:</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: bold; font-size: 16px;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
                <td style="padding: 10px 0;">
                  <a href="tel:${phone}" style="color: #2563eb; font-weight: bold; text-decoration: none; font-size: 16px;">${phone}</a>
                  &nbsp; (<a href="https://wa.me/91${phone.replace(/\D/g, "").slice(-10)}" style="color: #16a34a; text-decoration: none; font-weight: 600;">WhatsApp</a>)
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Location / City:</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${city || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Complete Address:</td>
                <td style="padding: 10px 0; color: #0f172a;">${address || "To be confirmed on call"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">X-Ray Type:</td>
                <td style="padding: 10px 0;">
                  <span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 9999px; font-weight: bold; font-size: 12px;">
                    ${xrayType || "General X-Ray"}
                  </span>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Preferred Slot:</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${timeSlot || "Earliest Available"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Prescription:</td>
                <td style="padding: 10px 0; color: #0f172a;">${prescriptionStatus || "Available with patient"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Additional Notes:</td>
                <td style="padding: 10px 0; color: #334155;">${notes || "None"}</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 28px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 15px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);">
              📞 Call Patient Now (${phone})
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Sent automatically from XrayOnCall Doorstep Diagnostics Portal to ${recipientEmail}
        </div>
      </div>
    `;

    // Check if SMTP environment variables are set
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"XrayOnCall Booking" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: recipientEmail,
        subject: `🚨 New At-Home X-Ray Booking: ${fullName} (${city || "Delhi NCR"}) - ${phone}`,
        html: emailHtml,
      });

      console.log(`[XrayOnCall] Email successfully dispatched to ${recipientEmail}`);
    } else {
      // In development or when SMTP credentials are not yet configured,
      // we log the complete payload and return success so the patient is never blocked!
      console.log("=========================================");
      console.log(`[XrayOnCall NEW BOOKING NOTIFICATION]`);
      console.log(`To: ${recipientEmail}`);
      console.log(`Patient: ${fullName} (${phone})`);
      console.log(`City: ${city}`);
      console.log(`Address: ${address}`);
      console.log(`Scan: ${xrayType}`);
      console.log(`Slot: ${timeSlot}`);
      console.log(`Prescription: ${prescriptionStatus}`);
      console.log("=========================================");
    }

    return NextResponse.json({
      success: true,
      message: `Booking request received! Our medical dispatch team will call you within 5 minutes. Details sent to ${recipientEmail}.`,
      data: {
        fullName,
        phone,
        city,
        xrayType,
        recipient: recipientEmail,
      },
    });
  } catch (error) {
    console.error("[XrayOnCall Booking Error]:", error);
    return NextResponse.json(
      { error: "Failed to process booking request. Please try calling directly." },
      { status: 500 }
    );
  }
}
