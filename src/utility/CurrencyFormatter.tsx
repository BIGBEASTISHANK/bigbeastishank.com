const currencyFormatterOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat(
    "en-IN",
    currencyFormatterOptions
  );