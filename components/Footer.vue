<template>
  <footer class="fixed bottom-0 w-full bg-gray-800 text-white p-4" :class="{ 'hidden': hideFooter }">
    <div class="flex justify-center">
      <p>&copy; 2024 Seaversity. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const hideFooter = ref(true);

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    hideFooter.value = false;
  } else {
    hideFooter.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
