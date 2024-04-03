<template>
  <div class="flex flex-col min-h-screen">
    <Navbar/>

    <div class="flex-grow mt-16">
      <div class="flex flex-wrap mt-16 mx-4 md:mx-0">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center justify-end mb-8 md:ml-auto"> 
          <img src="/assets/logo.png" alt="Your Image" class="">
        </div>

        <div class="w-full md:w-1/2 lg:w-2/3 flex items-center justify-center mb-8">
          <div class="max-w-md w-full rounded-lg overflow-hidden shadow-lg">
            <form class="px-6 py-8 bg-red-200">
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-2">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              
              <div class="mb-12 flex items-center justify-between">
                <a href="#" class="text-blue-500">Send OTP</a>
                <a href="#" class="text-blue-500">Forgot password?</a>
              </div>

              <div class="flex items-center justify-between mb-8">
                <button type="button" class="bg-white shadow appearance-none border rounded hover:bg-gray-200 text-gray-700 font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                  Log In
                </button>
              </div>
              <div>
                <p class="text-gray-700">Don't have an account yet? <a href="#" class="text-blue-500">Sign up</a>.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script setup>
</script>
