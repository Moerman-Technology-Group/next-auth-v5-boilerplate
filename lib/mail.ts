import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@bakklog.com",
    to: email,
    subject: "2FA code",
    html: `<p>Your 2FA code is: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetPasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@bakklog.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href=${resetPasswordLink}>here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@bakklog.com",
    to: email,
    subject: "Confirm your email address",
    html: `<p>Click <a href=${confirmLink}>here</a> to confirm your email address.</p>`,
  });
};
