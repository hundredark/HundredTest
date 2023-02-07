<template>
  <div>
    <div>你好, {{ user }}</div>
    <button v-if="isLogged" @click="logOut">注销</button>
    <button v-else @click="logIn">登陆</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserClient } from '../utils/api';

  const isLogged = ref(false);
  const user = ref('Guest');

  const logIn = async () => {
    const client = useUserClient();
    const profile = await client.user.profile();
    user.value = profile.full_name;
  }
  const logOut = () => {
    window.localStorage.clear();
    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 100);
  }
</script>