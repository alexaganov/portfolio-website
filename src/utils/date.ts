const formatOptions = {
  'MMM yyyy': {
    month: 'short',
    year: 'numeric'
  }
} satisfies Record<string, Intl.DateTimeFormatOptions>

export const formatDate = (date: Date | number | string, format: keyof typeof formatOptions) => {
  return new Intl.DateTimeFormat('en', formatOptions[format]).format(new Date(date))
}