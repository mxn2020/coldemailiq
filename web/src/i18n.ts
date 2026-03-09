// i18n configuration for ColdEmailIQ
const translations = {
    en: { appName: 'ColdEmailIQ', description: 'AI cold email generator with personalization' },
    de: { appName: 'ColdEmailIQ', description: 'AI cold email generator with personalization (DE)' },
} as const

export type Locale = keyof typeof translations
export const defaultLocale: Locale = 'en'
export const supportedLocales = Object.keys(translations) as Locale[]

export function t(key: keyof typeof translations.en, locale: Locale = defaultLocale): string {
    return translations[locale]?.[key] ?? translations.en[key] ?? key
}

export default translations
