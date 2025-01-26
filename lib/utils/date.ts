interface DateRange {
  min: string;
  max: string;
}

export function getShippingDateRange(
  minDays: number,
  maxDays: number
): DateRange {
  const today = new Date();

  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() + minDays);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + maxDays);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  });

  return {
    min: formatter.format(minDate),
    max: formatter.format(maxDate),
  };
}
