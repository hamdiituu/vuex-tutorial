<template>
  <div>
    <h1>
      This is a Test Page
    </h1>
    <h4> {{ message }} - {{ username }}</h4>
    <h5> {{ welcomeMessage }} </h5>
    <hr>
    <input type="text" v-model="name">
    <button @click="updateName"> Update Name</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "Test",
  data() {
    return {
      name: 'hamditug',
    }
  },
  computed: {
    ...mapState(['message', 'username']),
    ...mapGetters(['welcomeMessage'])
  },
  methods: {
    ...mapActions(['updateUsername']),
    updateName() {
      console.log(this.name);
      this.updateUsername(this.name);
    },

  }
}
</script>

<style scoped>

</style>
