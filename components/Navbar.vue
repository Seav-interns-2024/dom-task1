<template>
  <nav class="bg-gray-950">
    <div class="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16 xl:px-20">
      <div class="flex items-center">
        <img src="/assets/logo.png" alt="Logo" class="h-12 md:h-16 w-auto">
        <h1 class="text-blue-500 font-bold text-xl md:text-2xl ml-2 md:ml-4">Sea<span class="text-white">versity</span></h1>
      </div>

      <div class="md:hidden relative">
        <button @click="toggleDropdown" class="text-white hover:text-gray-200 focus:outline-none">
          <Icon name="uil:bars" color="white" class="h-12 w-auto"></Icon>
        </button>
        <transition name="fade">
          <ul v-show="isDropdownOpen" class="absolute top-16 right-0 bg-gray-950 z-10 border border-gray-700 rounded mt-2">
            <li>
              <a href="/" class="block py-2 px-4 text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="/about" class="block py-2 px-4 text-white hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="/services" class="block py-2 px-4 text-white hover:text-gray-200">Services</a>
            </li>
            <li>
              <a href="/contact" class="block py-2 px-4 text-white hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </transition>
      </div>

      <ul class="hidden md:flex items-center space-x-8">
        <li>
          <a href="/" class="text-white hover:text-gray-200">Home</a>
        </li>
        <li>
          <a href="/about" class="text-white hover:text-gray-200">About</a>
        </li>
        <li>
          <a href="/services" class="text-white hover:text-gray-200">Services</a>
        </li>
        <li>
          <a href="/contact" class="text-white hover:text-gray-200">Contact</a>
        </li>
        </ul>

      </div>
    </nav>
    
  </template>
  
<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

