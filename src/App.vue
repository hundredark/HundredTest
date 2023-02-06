<template>
  <Header />
  <div class="mt-20">
    <RouterView />
  </div>
  <div>
    <div>{{ text }}</div>
    <div><button class="test-btn">click</button></div>
    <input class="border-black border-2" type="text" />
  </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { RouterView } from 'vue-router';
import ClipboardJS from 'clipboard';
import Header from './components/Header.vue';

const environment = () => {
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
    return 'iOS';
  }
  if (window.MixinContext && (typeof window.MixinContext.getContext === 'function')) {
    var ctx = JSON.parse(window.MixinContext.getContext());
    return ctx.platform || 'Android';
  }
  return undefined;
};
const text = environment();

const clipboard = new ClipboardJS('.test-btn', {
  text: () => "test test"
});

onBeforeUnmount(() => {
  clipboard.destroy();
})
</script>

<style scoped>
</style>
