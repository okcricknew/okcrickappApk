import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.okcrick.app',
  appName: 'OK CRICK',
  webDir: 'www',
  server: {
    url: 'https://livescoring.vercel.app',
    cleartext: false
  }
};

export default config;
