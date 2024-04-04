<script setup>
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="500"
      >
        <div class="flex flex-col justify-center h-full text-white px-2">
          <div class="overflow-y-auto">
            <h4 class="text-lg font-semibold mb-4 md:ml-20 lg:ml-20 lg:text-left">
              We develop outstanding digital solutions for Maritime industries
            </h4>
            <h1 class="text-4xl font-bold mb-8 lg:text-left px-16">
              The Catalyst of the Maritime Fleet of Tomorrow
            </h1>
            
            <router-link to="loginpage" class="flex lg:justify-start mb-4 md:ml-20 lg:ml-20 text-white">
              <v-btn variant="outlined" size="large">
                Log In
              </v-btn>
            </router-link>
          </div>
        </div>
      </v-parallax>
    </div>

    <div class="my-4 lg:my-8">
      
      <h1 class="text-4xl font-bold mb-4 text-center lg:ml-20 lg:text-left text-blue-500">OUR ACHIEVEMENT</h1>
      
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
