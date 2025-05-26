import { Router } from "express";
import AccountHandler from "../controllers/account.controller";

const router = Router();

router.post("/account", AccountHandler.registerAccount);
router.get("/accounts/encrypted", AccountHandler.listEncryptedAccounts);
router.get("/accounts/decrypted", AccountHandler.listDecryptedAccounts);
router.get("/accounts/all", AccountHandler.listBoth);
router.get("/reveal/:hash", AccountHandler.revealDecrypted);

export default router;
