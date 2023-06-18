<template>
  <div class="todo">
    <div class="tasks">
    <AddForm/>
    <Todo/>
    <BottomBlock/>
    </div>
  </div>
</template>

<script>
import AddForm from "./AddForm.vue";
import Todo from "./Todo.vue";
import BottomBlock from "./Bottom/BottomBlock.vue";

export default {
  components: {BottomBlock, AddForm, Todo},
}
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 20px 0;
  background-color: lightgray;
  font-size: 20px;
  @media screen and (max-width: 750px) {
    max-width: 360px;
  }
  .tasks{
    width: 80%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
}
</style>
