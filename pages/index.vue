<script setup>
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="500"
      >
        <div class="flex flex-col justify-center h-full text-white px-6">
          <div class="overflow-y-auto">
            <h4 class="text-lg font-semibold mb-4 ml-20 lg:text-left">
              We develop outstanding digital solutions for Maritime industries
            </h4>
            <h1 class="text-4xl font-bold mb-8 text-center">
              The Catalyst of the Maritime Fleet of Tomorrow
            </h1>
            
            <router-link to="loginpage" class="flex mb-4 ml-20 lg:text-left text-white">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Log In
              </button>
            </router-link>
          </div>
        </div>
      </v-parallax>
    </div>

    <div class="my-8">
      
      <h1 class="text-4xl font-bold mb-4 text-center lg:ml-20 text-blue-500"">OUR ACHIEVEMENT</h1>
      
      <v-carousel show-arrows="hover">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
