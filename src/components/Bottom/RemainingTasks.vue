<template>
  <div>
    <span>{{ tasks }} active tasks</span>
  </div>
</template>

<script>
import { mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      tasks: state => state.todo.tasks.filter(task => !task.completed).length
    })
  }

}
</script>

<style lang="scss" scoped>

</style>
