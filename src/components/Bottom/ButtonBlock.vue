<template>
  <div>
    <MyButton @click="setFilter('all')">ALL</MyButton>
    <MyButton @click="setFilter('active')">ACTIVE</MyButton>
    <MyButton @click="setFilter('completed')">COMPLETED</MyButton>
  </div>
</template>

<script>
import MyButton from '../Universal/MyButton.vue'
export default {
  components: { MyButton },
  methods: {
    setFilter(filter) {
     this.$store.commit('setFilter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
