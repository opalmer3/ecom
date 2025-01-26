export const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  CNY: "¥",
  INR: "₹",
  NZD: "NZ$",
} as const;

export function formatCurrency(amount: string, currencyCode: string): string {
  const symbol = currencySymbols[currencyCode] || currencyCode;
  const formattedAmount = parseFloat(amount).toFixed(2);
  return `${symbol}${formattedAmount}`;
}
