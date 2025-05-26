import { Request, Response } from "express";
import AccountService from "../services/account.service";
import { accountValidator } from "../validators/account.validator";

class AccountHandler {
  async registerAccount(req: Request, res: Response) {
    const parsed = accountValidator.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      });
    }

    try {
      const result = await AccountService.createAccount(parsed.data);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async listEncryptedAccounts(_: Request, res: Response) {
    const result = await AccountService.getAllAccountsEncrypted();
    return res.json(result);
  }

  async listDecryptedAccounts(_: Request, res: Response) {
    const result = await AccountService.getAllDecryptedAccounts();
    return res.json(result);
  }

  async listBoth(_: Request, res: Response) {
    const result = await AccountService.getEncryptedAndDecryptedAccounts();
    return res.json(result);
  }

  async revealDecrypted(req: Request, res: Response) {
    const { hash } = req.params;
    try {
      const result = await AccountService.getDecryptedData_fields(hash);
      return res.json({ decrypted: result });
    } catch {
      return res.status(500).json({ message: "Could not decrypt" });
    }
  }
}

export default new AccountHandler();
