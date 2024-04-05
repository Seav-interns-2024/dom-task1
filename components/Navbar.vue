<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

<template>
  <nav class="bg-gray-950">
    <div class="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16 xl:px-20">
      <div class="flex items-center">
        <nuxt-link to="/" class="flex items-center">
          <img src="/assets/logo.png" alt="Logo" class="h-12 md:h-16 w-auto">
          <h1 class="text-blue-500 font-bold text-xl md:text-2xl ml-2 md:ml-4">Sea<span class="text-white">versity</span></h1>
        </nuxt-link>
      </div>

      <div class="md:hidden relative">
        <button @click="toggleDropdown" class="text-white hover:text-gray-200 focus:outline-none">
          <Icon name="uil:bars" color="white" class="h-12 w-auto"></Icon>
        </button>
        <transition name="fade">
          <ul v-show="isDropdownOpen" class="absolute top-16 right-0 bg-gray-950 z-10 border border-gray-700 rounded mt-2">
            <li>
              <nuxt-link to="/" class="block py-2 px-4 text-white hover:text-gray-200">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="block py-2 px-4 text-white hover:text-gray-200">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services" class="block py-2 px-4 text-white hover:text-gray-200">Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="block py-2 px-4 text-white hover:text-gray-200">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="signuppage" class="flex text-white">
                <v-btn>
                  Sign Up
                </v-btn>
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </div>

      <ul class="hidden md:flex items-center space-x-8">
        <li>
          <nuxt-link to="/" class="text-white hover:text-gray-200">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="text-white hover:text-gray-200">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/services" class="text-white hover:text-gray-200">Services</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="text-white hover:text-gray-200">Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link to="signuppage" class="flex text-white">
            <v-btn>
              Sign Up
            </v-btn>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
