<template>
  <div  class="bottom">
    <RemainingTasks/>
    <ButtonBlock/>
    <RemoveTasks/>
  </div>
</template>

<script>
import RemainingTasks from "./RemainingTasks.vue";
import ButtonBlock from "./ButtonBlock.vue";
import RemoveTasks from "./RemoveTasks.vue";

export default {
  components:
      {RemoveTasks, ButtonBlock, RemainingTasks}
}
</script>

<style lang="scss" scoped>
.bottom {
  padding-bottom: 10px;
}
</style>
