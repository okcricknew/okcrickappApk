import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.okcrick.app',
  appName: 'OK CRICK',
  webDir: 'www',
  server: {
    url: 'https://YOUR-VERCEL-DOMAIN.vercel.app',
    cleartext: false
  }
};

export default config;
