<template>
  <div>
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      title: state => state.todo.title
    })
  }
}
</script>

<style>
</style>
