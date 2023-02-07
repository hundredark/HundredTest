<template>
  <div></div>
</template>

<script>
import { useRouter } from 'vue-router';
import { getED25519KeyPair } from '@mixin.dev/mixin-node-sdk';
import { getUrlParameter, ls, useUserClient } from '../utils';

export default {
  // eslint-disable-next-line consistent-return
  setup() {
    const router = useRouter();

    const useAccessDenied = () => {
      router.push('/')
    };

    const error = getUrlParameter('error');
    const code = getUrlParameter('code');
    if (error === 'access_denied' || !code) return useAccessDenied();

    const { privateKey, publicKey } = getED25519KeyPair();

    const client = useUserClient();
    client.oauth.getToken(
      import.meta.env.VITE_CLIENT_ID,
      code,
      publicKey,
      import.meta.env.VITE_CLIENT_SECRET
      // eslint-disable-next-line consistent-return
    ).then((resp) => {
      if (!resp) return useAccessDenied();

      const { scope, authorization_id } = resp;
      if (!pushScopeId) return useAccessDenied();

      const keystore = {
        user_id: import.meta.env.VITE_CLIENT_ID,
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
