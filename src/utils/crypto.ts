import crypto from "crypto";
const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.ENCRYPTION_KEY!, "hex");
const iv = Buffer.alloc(16, 0); // static IV for testing — use random in production

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
};

export const decrypt = (encrypted: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
};
