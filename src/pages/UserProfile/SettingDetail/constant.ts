const currencyList = [
  {
    key: 'United States (USD)',
    value: 'USD',
  },
  {
    key: 'Indonesia (IDR)',
    value: 'IDR',
  },
  {
    key: 'Japan (JPY)',
    value: 'JPY',
  },
  {
    key: 'Russia (RUB)',
    value: 'RUB',
  },
  {
    key: 'Germany (EUR)',
    value: 'EUR',
  },
  {
    key: 'Korea (WON)',
    value: 'WON',
  },
]

const languageList = [
  {
    key: '  English (EN)',
    value: 'English',
  },
  {
    key: 'Indonesian (ID)',
    value: 'Indonesian',
  },
  {
    key: 'Arabic (AR)',
    value: 'Arabic',
  },
  {
    key: 'Chinese (ZH)',
    value: 'Chinese',
  },
  {
    key: 'Dutch (NL)',
    value: 'Dutch',
  },
  {
    key: 'French (FR)',
    value: 'French',
  },
  {
    key: 'German (DE)',
    value: 'German',
  },
  {
    key: 'Italian (IT)',
    value: 'Italian',
  },
  {
    key: 'Korean (KO)',
    value: 'Korean',
  },
  {
    key: 'Portuguese (PT)',
    value: 'Portuguese',
  },
  {
    key: 'Russian (RU)',
    value: 'Russian',
  },
  {
    key: 'Spanish (ES)',
    value: 'Spanish',
  },
]

const themeList = [
  {
    key: 'Light',
    value: 'Light',
  },
  {
    key: 'Dark',
    value: 'Dark',
  },
  {
    key: 'Use device theme',
    value: 'Use device theme',
  },
]

const securityList = [
  {
    key: 'PIN',
    value: 'PIN',
  },
  {
    key: 'Fingerprint',
    value: 'Fingerprint',
  },
  {
    key: 'Face ID',
    value: 'Face ID',
  },
]

export const SETTING_LIST = new Map([
  ['Currency', currencyList],
  ['Language', languageList],
  ['Theme', themeList],
  ['Security', securityList],
])
