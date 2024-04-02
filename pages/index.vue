<template>
    <Navbar/>
    <div class="flex justify-center">
      <div class="flex-grow flex items-center h-28 w-auto m-36">
        <img src="/assets/logo.png" alt="Your Image" class="">
      </div>
  
      <div class="flex-grow flex items-center mr-52">
        <form class="max-w-md w-full">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <span class="pr-24 ml-2">send otp</span> 
            <span class="ml-28">forgot password</span>
          </div>
          
          <div class="flex items-center justify-between">
            <button type="button" class="bg-white shadow appearance-none border rounded hover:bg-white-700 text-orange-400 font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  