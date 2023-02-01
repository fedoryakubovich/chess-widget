export enum LOCALES {
  en = 'en',
  de = 'de',
}
export const DEFAULT_LOCALE = LOCALES.en;
export const BROWSER_LOCALE = navigator.language.split(/[-_]/)[0] as LOCALES;
export const LOCALE = LOCALES[BROWSER_LOCALE] || DEFAULT_LOCALE;
