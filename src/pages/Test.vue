<template>
  <dvi>
    <div>test</div>
    <button class="test-btn">click</button>
  </dvi>

</template>

<script>
import { onBeforeUnmount } from 'vue';
import ClipboardJS from 'clipboard';

const clipboard = new ClipboardJS('.test-btn', {
  text: () => "test test"
});

onBeforeUnmount(() => {
  clipboard.destroy();
})
</script>