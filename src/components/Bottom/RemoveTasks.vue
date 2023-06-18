<template>
<MyButton @click="removeTasks">Clear completed</MyButton>
</template>

<script>
import MyButton from '../Universal/MyButton.vue'
export default {
  components: {
    MyButton
  },
methods : {
  removeTasks(){
    this.$store.commit('removeTasks')
  }
}
}
</script>

<style lang="scss" scoped>

</style>
