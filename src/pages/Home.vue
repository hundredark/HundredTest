<template>
  <div>
    <div>你好, {{ user }}</div>
    <button v-show="user !== 'Guest'" @click="logOut">注销</button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useUserClient } from '../utils/api';

  const user = ref("Guest");

  const logOut = () => {
    window.localStorage.clear();
    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 100);
  }

  onMounted(async () => {
    const client = useUserClient();
    const profile = await client.user.profile();
    user.value = profile.full_name;
  })
</script>