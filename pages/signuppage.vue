<script>
import { useFormStore } from '@/store'; 

export default {
  setup() {
    const formStore = useFormStore();
    const suffixes = ['Jr.', 'Sr.', 'II', 'III', 'IV'];
    const genders = ['Male', 'Female', 'Other'];

    const submit = () => {
      const {
        firstName,
        lastName,
        email,
        password,
        contactNumber,
        dateOfBirth,
        dataPrivacyConsent
      } = formStore;

      if (!firstName) {
        formStore.errorMessages.firstName = 'First Name is required';
      } else {
        formStore.errorMessages.firstName = '';
      }

      if (!lastName) {
        formStore.errorMessages.lastName = 'Last Name is required';
      } else {
        formStore.errorMessages.lastName = '';
      }

      if (!email) {
        formStore.errorMessages.email = 'Email is required';
      } else if (!validateEmail(email)) {
        formStore.errorMessages.email = 'Invalid email format';
      } else {
        formStore.errorMessages.email = '';
      }

      if (!password) {
        formStore.errorMessages.password = 'Password is required';
      } else {
        formStore.errorMessages.password = '';
      }

      if (!contactNumber) {
        formStore.errorMessages.contactNumber = 'Contact Number is required';
      } else {
        formStore.errorMessages.contactNumber = '';
      }

      if (!dateOfBirth) {
        formStore.errorMessages.dateOfBirth = 'Date of Birth is required';
      } else {
        formStore.errorMessages.dateOfBirth = '';
      }

      if (!dataPrivacyConsent) {
        //
      }

      if (!Object.values(formStore.errorMessages).some(error => error !== '')) {
        formStore.openModal();
      }
    };

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const getErrorMessage = (fieldName) => {
      return formStore.errorMessages[fieldName] || '';
    };
    

    return {
      formStore,
      suffixes,
      genders,
      submit,
      validateEmail,
      getErrorMessage
    };
  }
};
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="8" sm="10">
      <v-card class="rounded-lg shadow-lg">
        <v-card-text>
          <h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>
          
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formStore.firstName"
                :error-messages="getErrorMessage('firstName')"
                :rules="[() => !!formStore.firstName || 'First Name is required']"
                label="First Name"
                required
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formStore.middleName"
                label="Middle Name"
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="4">
              <v-text-field
                v-model="formStore.lastName"
                :error-messages="getErrorMessage('lastName')"
                :rules="[() => !!formStore.lastName || 'Last Name is required']"
                label="Last Name"
                required
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="formStore.suffix"
                :items="suffixes"
                label="Suffix"
                outlined
                class="mb-4"
              ></v-select>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formStore.contactNumber"
                :error-messages="getErrorMessage('contactNumber')"
                :rules="[() => !!formStore.contactNumber || 'Contact number is required']"
                required
                label="Contact Number"
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="6">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="formStore.dateOfBirth"
                    label="Date of Birth"
                    :error-messages="getErrorMessage('dateOfBirth')"
                    :rules="[() => !!formStore.dateOfBirth || 'Date of birth is required']"
                    required
                    v-on="on"
                    outlined
                    class="mb-4"
                    type="date"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="formStore.dateOfBirth" @input="$refs.menu.save($event)"></v-date-picker>
              </v-menu>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formStore.age"
                label="Age"
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="formStore.gender"
                :items="genders"
                label="Gender"
                outlined
                class="mb-4"
              ></v-select>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-text-field
                v-model="formStore.email"
                :error-messages="getErrorMessage('email')"
                :rules="[() => !!formStore.email || 'Email is required', () => validateEmail(formStore.email) || 'Invalid email format']"
                label="Email"
                required
                outlined
                class="mb-4"
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-text-field
            v-model="formStore.password"
            :error-messages="getErrorMessage('password')"
            :rules="[() => !!formStore.password || 'Password is required']"
            label="Password"
            type="password"
            required
            outlined
            class="mb-4"
          ></v-text-field>
          
          <v-checkbox
            v-model="formStore.dataPrivacyConsent"
            label="I agree to the data privacy policy"
            required
            class="mb-4"
          ></v-checkbox>
          
        </v-card-text>
        <v-divider class="mt-6"></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="blue darken-2" @click="formStore.resetForm" class="mr-4">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="submit">
            Submit
          </v-btn>
        </v-card-actions>
        
      </v-card>
      <p class="text-center text-gray-600 mt-6">
        Already have an account? <router-link to="/loginpage" class="text-blue-500">Go to login page</router-link>
      </p>
    </v-col>
  </v-row>

  <v-dialog v-model="formStore.modalOpen" max-width="600">
    <v-card>
      <v-card-title class="headline">User Details</v-card-title>
      <v-card-text>
        <div>
          <strong>First Name:</strong> {{ formStore.firstName }}
        </div>
        <div>
          <strong>Middle Name:</strong> {{ formStore.middleName }}
        </div>
        <div>
          <strong>Last Name:</strong> {{ formStore.lastName }}
        </div>
        <div>
          <strong>Suffix:</strong> {{ formStore.suffix }}
        </div>
        <div>
          <strong>Contact Number:</strong> {{ formStore.contactNumber }}
        </div>
        <div>
          <strong>Date of Birth:</strong> {{ formStore.dateOfBirth }}
        </div>
        <div>
          <strong>Age:</strong> {{ formStore.age }}
        </div>
        <div>
          <strong>Gender:</strong> {{ formStore.gender }}
        </div>
        <div>
          <strong>Email:</strong> {{ formStore.email }}
        </div>
        <div>
          <strong>Password:</strong> {{ formStore.password }}
        </div>
        <div>
          <strong>Data Privacy Consent:</strong> {{ formStore.dataPrivacyConsent ? 'Agreed' : 'Not Agreed' }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-2" @click="formStore.closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog> 
</template>
