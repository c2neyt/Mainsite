<script setup>
import { ref, onMounted } from 'vue';

const commit = ref(null);

onMounted(async () => {
  await fetch('')
    .then(response => response.json())
    .then(data => {
      commit.value = data[0]
    })
    .catch(() => {
      return;
    });
})
</script>

<template>
  <div class="flex justify-between mt-10 gap-5 text-sm text-gruvbox-gray">
    <div class="flex gap-2">
      <font-awesome-icon :icon="['fas', 'code-branch']" class="mt-[3px]" />
      <div v-if="commit">{{ commit.sha.slice(0, 7) }} — {{ commit.commit.message }}</div>
      <div v-else></div>
    </div>
    <a href="https://github.com/c2neyt" target="_blank" class="whitespace-nowrap underline">⭐</a>
  </div>
</template>