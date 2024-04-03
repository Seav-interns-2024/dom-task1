<script setup>
  const loginForm = ref({
    email: "",
    password: ""
  });

  const send = () => {
    const payload = JSON.stringify(loginForm.value);
    alert(payload);
  };
</script>

<template>
    <div class="flex-grow mt-16">
      <div class="flex flex-wrap mt-1 mx-4 md:mx-0">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center justify-end mb-8 md:ml-auto">
          <img src="/assets/logo.png" alt="Your Image" class="">
        </div>

        <div class="w-full md:w-1/2 lg:w-2/3 flex items-center justify-center mb-20">
          <div class="max-w-md w-full rounded-lg overflow-hidden shadow-lg">
            <form class="px-6 py-8 bg-red-200">
              <div class="mb-4">
                <BaseInput label="Email" type="email" v-model="loginForm.email" />
              </div>
              <div class="mb-2">
                <BaseInput label="Password" type="password" v-model="loginForm.password" />
              </div>

              <div class="mb-12 flex items-center justify-between">
                <a href="#" class="text-blue-500">Send OTP</a>
                <a href="#" class="text-blue-500">Forgot password?</a>
              </div>

              <div class="flex items-center justify-between mb-8">
                <v-btn :disabled="!loginForm.email" append-icon="$vuetify" color="primary" size="large">Log In
                </v-btn>
              </div>
              <div>
                <p class="text-gray-700">Don't have an account yet? <nuxt-link to="/signuppage"
                    class="text-blue-500">Sign up</nuxt-link>.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

