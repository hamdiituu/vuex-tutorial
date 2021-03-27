<template>
  <div>
    <h1>This is a Math Page</h1>
    <h2> {{ number1 }} </h2>
    <h2> {{ sumNumbers }} </h2>
    <input type="number" v-model="number">
    <button @click="changeNumber1">Change Number 1 </button>
    <button @click="changeNumber(1,3)"> Number1&Number2 Change </button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: "Math",
  data() {
    return {
      number : 0
    }
  },
  computed :{
    ...mapState({
      number1 : state => state.math.number1
    }),
    ...mapGetters({
      sumNumbers  : 'math/sumNumbers'
    })
  },
  methods:{
    ...mapMutations({
      setNumber1 : 'math/setNumber1',
    }),
    ...mapActions({
      changeNumber : 'math/changeNumber'
    }),
    changeNumber1(){
      this.setNumber1(this.number);
    }
  },

}
</script>

<style scoped>

</style>
