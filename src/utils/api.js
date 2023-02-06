import { MixinApi } from '@mixin.dev/mixin-node-sdk';
import { ls } from './ls';

const defaultApiConfig = {
  requestConfig: {
    responseCallback: (err) => {
      if (err.code === 401) {
        setTimeout(() => {
          window.localStorage.clear();
          window.location.href = `https://mixin-www.zeromesh.net/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&scope=PROFILE:READ+APPS:READ+APPS:WRITE&response_type=code`;
        }, 100);
      }
    }
  },
};

export const useUserClient = () => {
  const keystore = ls.get('keystore');
  const client = MixinApi({ 
    ...defaultApiConfig,
    keystore,
  });
  return client;
};

export const useBotClient = () => {
  const client = MixinApi({ 
    ...defaultApiConfig,
    keystore: {},
  });
  return client;
}
