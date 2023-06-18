<template>
  <div>
    <h2>To view ToDo click the button</h2>
    <button @click="redirectToTodo">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToTodo() {
      this.$router.push('/todo');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
