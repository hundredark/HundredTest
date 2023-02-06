<template>
  <Header />
  <div class="mt-20">
    <RouterView />
  </div>
  <div>
    <div>test</div>
    <div><button class="test-btn">click</button></div>
    <input class="border-black border-2" type="text" />
  </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { RouterView } from 'vue-router';
import ClipboardJS from 'clipboard';
import Header from './components/Header.vue';

const clipboard = new ClipboardJS('.test-btn', {
  text: () => "test test"
});

onBeforeUnmount(() => {
  clipboard.destroy();
})
</script>

<style scoped>
</style>
