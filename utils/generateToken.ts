export function generateVerificationToken(): string {
  const crypto = require("crypto");
  return crypto.randomBytes(16).toString("hex");
}

export function generateTokenExpiration(): Date {
  const tokenExpiration = new Date();
  tokenExpiration.setHours(tokenExpiration.getHours() + 24);
  return tokenExpiration;
}
