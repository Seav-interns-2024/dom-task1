<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const countries = [
      'boomlupet','Philippines'
    ];

    const name = ref(null);
    const email = ref(null);
    const password = ref(null);
    const address = ref(null);
    const city = ref(null);
    const state = ref(null);
    const zip = ref(null);
    const country = ref(null);
    const errorMessages = ref('');
    const formHasErrors = ref(false);

    const form = computed(() => ({
      name: name.value,
      email: email.value,
      password: password.value,
      address: address.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      country: country.value
    }));

    const addressCheck = () => {
      errorMessages.value = address.value && !name.value ? `Hey! I'm required` : '';
      return true;
    };

    const resetForm = () => {
      errorMessages.value = '';
      formHasErrors.value = false;
      [name, email, password, address, city, state, zip, country].forEach(field => {
        field.value = null;
      });
    };

    const submit = () => {
      formHasErrors.value = false;
      [name, email, password, address, city, state, zip, country].forEach(field => {
        if (!field.value) formHasErrors.value = true;
      });
    };

    const getErrorMessage = (fieldName) => {
      return fieldName === 'address' ? errorMessages.value : '';
    };

    watch(name, () => {
      errorMessages.value = '';
    });

    return {
      countries,
      form,
      errorMessages,
      formHasErrors,
      addressCheck,
      resetForm,
      submit,
      getErrorMessage,
      name,
      email,
      password,
      address,
      city,
      state,
      zip,
      country
    };
  }
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            v-model="name"
            :error-messages="getErrorMessage('name')"
            :rules="[() => !!name || 'This field is required']"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            type="email"
            :error-messages="getErrorMessage('email')"
            :rules="[() => !!email || 'This field is required']"
            label="Email"
            placeholder="Example@gmail.com"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :error-messages="getErrorMessage('password')"
            :rules="[() => !!password || 'This field is required']"
            label="Password"
            placeholder="password"
            required
          ></v-text-field>

          <v-text-field
            v-model="address"
            :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
            counter="25"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            required
          ></v-text-field>
          <v-text-field
            v-model="city"
            :rules="[() => !!city || 'This field is required', addressCheck]"
            label="City"
            placeholder="El Paso"
            required
          ></v-text-field>
          <v-text-field
            v-model="state"
            :rules="[() => !!state || 'This field is required']"
            label="State/Province/Region"
            placeholder="TX"
            required
          ></v-text-field>
          <v-text-field
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            label="ZIP / Postal Code"
            placeholder="79938"
            required
          ></v-text-field>
          <v-autocomplete
            v-model="country"
            :items="countries"
            :rules="[() => !!country || 'This field is required']"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text" @click="resetForm">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" location="left">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="my-0" icon v-bind="attrs" v-on="on" @click="resetForm">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
