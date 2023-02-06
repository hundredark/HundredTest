<template>
  <div></div>
</template>

<script>
import { useRouter } from 'vue-router';
import { getED25519KeyPair } from '@mixin.dev/mixin-node-sdk';
import { getUrlParameter, ls, useUserClient, BotKeystore, BotSecret } from '../utils';

export default {
  props: ['client', 'setKeystore'],
  // eslint-disable-next-line consistent-return
  setup() {
    const router = useRouter();

    const useAccessDenied = () => {
      $message.error({
        message: 403,
        showClose: true,
      });
      location.href = 'https://developers.mixin.one/'
    };

    const error = getUrlParameter('error');
    if (error === 'access_denied') return useAccessDenied();

    const code = getUrlParameter('code');
    const { privateKey, publicKey } = getED25519KeyPair();

    const client = useUserClient();
    client.oauth.getToken(
      BotKeystore.client_id,
      code,
      publicKey,
      BotSecret
      // eslint-disable-next-line consistent-return
    ).then((resp) => {
      if (!resp) return useAccessDenied();

      const { scope, authorization_id } = resp;
      if (
        !scope
      ) return useAccessDenied();

      const keystore = {
        user_id: BotKeystore.client_id,
        scope,
        authorization_id,
        private_key: privateKey,
      };
      ls.set('keystore', keystore);

      router.push('/');
    });
  },
};
</script>
