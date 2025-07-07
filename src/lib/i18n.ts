import { init, register, locale } from 'svelte-i18n';
import { derived } from 'svelte/store'; // Corrected import path

const defaultLocale = 'en';

register('en', () => import('../locales/en.json'));
register('ka', () => import('../locales/ka.json'));

init({
  fallbackLocale: defaultLocale,
});

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');
