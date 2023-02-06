<template>
  <div>
    Hello, {{ user }}
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useUserClient } from '../utils/api';

  const user = ref("Guest");

  onMounted(async () => {
    const client = useUserClient();
    const profile = await client.user.profile();
    user.value = profile.full_name;
  })
</script>