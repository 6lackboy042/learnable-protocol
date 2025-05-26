export const generateAccountNumber = (): string => {
    return "42" + Math.floor(100000000 + Math.random() * 900000000).toString(); // 10-digit with "42" prefix
  };
  
  export const generateCardDetails = () => {
    const cardNumber = "4" + Math.floor(100000000000000 + Math.random() * 900000000000000).toString();
    const CVV = Math.floor(100 + Math.random() * 900).toString();
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 3);
    const formattedExpiry = `${String(expiryDate.getMonth() + 1).padStart(2, "0")}/${expiryDate.getFullYear().toString().slice(-2)}`;
    return { cardNumber, CVV, expiryDate: formattedExpiry };
  };
  