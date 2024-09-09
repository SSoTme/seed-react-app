import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'localhost',
  appName: 'ejtictactoedemo',
  webDir: 'build',
  bundledWebRuntime: false,
  ...(process.env.NODE_ENV === 'development' ? {
    server: {
      url: 'http://localhost:3000',
      cleartext: true
    }
  } : {}),
  android: {
    allowMixedContent: true
  },
  ios: {
    scheme: 'ejtictactoedemo'
  }
};

export default config;
