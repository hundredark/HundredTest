import { MixinApi } from '@mixin.dev/mixin-node-sdk';
import { BotKeystore } from './constant';
import { ls } from './ls';

const defaultApiConfig = {
  requestConfig: {
    responseCallback: (err) => {
      if (err.code === 401) {
        setTimeout(() => {
          // window.localStorage.clear();
          // window.location.href = `https://mixin-www.zeromesh.net/oauth/authorize?client_id=${BotKeystore.client_id}&scope=PROFILE:READ+APPS:READ+APPS:WRITE&response_type=code`;
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
    keystore: BotKeystore,
  });
  return client;
}
