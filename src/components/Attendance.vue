<template>
  <div>
    <h1>{{ message }}</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="formData.name" placeholder="Name" required><br><br>
      <input type="email" v-model="formData.email" placeholder="Email" required><br><br>
      <input type="tel" v-model="formData.phone" placeholder="Phone"><br><br>
      <input type="submit" :value="submitButtonLabel">
    </form>
  </div>
</template>

<script>
export default {
  name: 'AttendancePage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
      },
      message: '',
      submitButtonLabel: 'Submit'
    };
  },
  methods: {
    handleSubmit() {
      this.submitButtonLabel = 'Submitting...';
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);

      fetch('https://script.google.com/macros/s/AKfycbyc0WzsRSncIAaQ_FVGrIRo2gf4baZLr7CCMFWTyJYTcoaYARFKVnyA7j5Ldaze51KX/exec', {
        method: 'POST',
        body: formData
      })
      .then(res => res.text())
      .then(data => {
        this.message = data;
        this.submitButtonLabel = 'Submit';
      });
    }
  }
};
</script>

<style scoped>
/* Add any styling here */
</style>
