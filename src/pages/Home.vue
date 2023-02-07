<template>
  <Header></Header>
  <div class="mt-20">
    <div class="flex flex-row justify-between items-center w-screen">
      <div>
        你好, {{ user }} {{ device }}
      </div>
      <div>
        <button v-if="isLogged" @click="logOut">注销</button>
        <button v-else @click="logIn">登陆</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue';
  import Header from '../components/Header.vue';
  import { useUserClient, getMixinEnvironment } from '../utils';

  const platform = getMixinEnvironment();
  const isLogged = ref(false);
  const user = ref('Guest');
  const device = computed(() => platform ? `from Mixin ${platform}` : '')

  const logIn = async () => {
    const client = useUserClient();
    const profile = await client.user.profile();
    user.value = profile.full_name;
    isLogged.value = true;
  }
  const logOut = () => {
    window.localStorage.clear();
    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 100);
  }

  onMounted(async () => {
    try {
      await logIn()
    } catch(e) {}
  })
</script>