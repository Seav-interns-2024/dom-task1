import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', {
  state: () => ({
    firstName: null,
    middleName: null,
    lastName: null,
    suffix: null,
    contactNumber: null,
    dateOfBirth: null,
    age: null,
    gender: null,
    email: null,
    password: null,
    dataPrivacyConsent: false,
    errorMessages: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNumber: '',
      dateOfBirth: ''
    },
    modalOpen: false, 
    form: {} 
  }),

  actions: {
    resetForm() {
      this.firstName = null;
      this.middleName = null;
      this.lastName = null;
      this.suffix = null;
      this.contactNumber = null;
      this.dateOfBirth = null;
      this.age = null;
      this.gender = null;
      this.email = null;
      this.password = null;
      this.dataPrivacyConsent = false;
      this.errorMessages = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        contactNumber: '',
        dateOfBirth: ''
      };
    },
    openModal() {
      
      this.form = {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        suffix: this.suffix,
        contactNumber: this.contactNumber,
        dateOfBirth: this.dateOfBirth,
        age: this.age,
        gender: this.gender,
        email: this.email,
        password: this.password,
        dataPrivacyConsent: this.dataPrivacyConsent
      };
      this.modalOpen = true; 
    },
    closeModal() {
      this.modalOpen = false; 
    }
  }
});
