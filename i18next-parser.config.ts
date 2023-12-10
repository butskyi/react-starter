import { type UserConfig } from 'i18next-parser';

export default {
  locales: ['en'],
  input: ['src/**/*.{ts,tsx}', '!src/**/*.{spec,test}.{ts,tsx}', '!src/**/__tests__/**/*'],
  output: 'src/i18n/$LOCALE/$NAMESPACE.json',
  sort: true,
  verbose: true,
} satisfies UserConfig;
