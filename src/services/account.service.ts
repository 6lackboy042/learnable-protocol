import { Account } from "../models/account.model";
import { generateAccountNumber, generateCardDetails } from "../utils/generator";
import { encrypt, decrypt } from "../utils/crypto";

export default class AccountService {
  static async createAccount(data: any) {
    const fullName = `${data.firstName} ${data.surname}`;
    const accountNumber = generateAccountNumber();
    const card = generateCardDetails();

    const encryptedCard = {
      cardNumber: encrypt(card.cardNumber),
      CVV: encrypt(card.CVV),
      expiryDate: encrypt(card.expiryDate),
    };

    const newAccount = await Account.create({
      ...data,
      fullName,
      accountNumber,
      phoneNumber: encrypt(data.phoneNumber),
      dateOfBirth: encrypt(data.dateOfBirth),
      card: encryptedCard,
    });

    return {
      ...newAccount.toObject(),
      decrypted: {
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.dateOfBirth,
        card,
      },
    };
  }

  static async getAllAccountsEncrypted() {
    return Account.find();
  }

  static async getAllDecryptedAccounts() {
    const accounts = await Account.find();
    return accounts.map(acc => ({
      ...acc.toObject(),
      phoneNumber: decrypt(acc.phoneNumber),
      dateOfBirth: decrypt(acc.dateOfBirth),
      card: {
        cardNumber: decrypt(acc.card.cardNumber),
        CVV: decrypt(acc.card.CVV),
        expiryDate: decrypt(acc.card.expiryDate),
      }
    }));
  }

  static async getEncryptedAndDecryptedAccounts() {
    const accounts = await Account.find();
    return accounts.map(acc => ({
      encrypted: acc,
      decrypted: {
        fullName: acc.fullName,
        accountNumber: acc.accountNumber,
        phoneNumber: decrypt(acc.phoneNumber),
        dateOfBirth: decrypt(acc.dateOfBirth),
        card: {
          cardNumber: decrypt(acc.card.cardNumber),
          CVV: decrypt(acc.card.CVV),
          expiryDate: decrypt(acc.card.expiryDate),
        },
      }
    }));
  }

  static async getDecryptedData_fields(encrypted: string) {
    return decrypt(encrypted);
  }
}
