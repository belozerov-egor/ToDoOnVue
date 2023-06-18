<template>

  <ul>
    <Task v-for="task in filteredTasks" :key="task.id" :task="task"></Task>
  </ul>
</template>

<script>
import Task from "./Task.vue";
import {mapGetters, mapState} from "vuex";

export default {
  mounted() {
    this.$store.dispatch("loadTasksFromStorage");

  },
  components: {Task},
  computed: {
    ...mapGetters((['filteredTasks']))

  }
}
</script>

<style lang="scss" scoped>

</style>
