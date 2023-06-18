<template>


  <div class="addForm">
    <input type="text" v-model="newTaskTitle" placeholder="Add title new task"  @keyup.enter="addTask">
    <MyButton @click='addTask'>Add</MyButton>
    <!-- <button @click="addTask">Add</button> -->
  </div>
</template>

<script>
import MyButton from './Universal/MyButton.vue';
export default {
  components:  { MyButton },
  data() {
    return {
      newTaskTitle: "", // Хранит заголовок новой задачи
    };
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim() !== "") {
        this.$store.commit("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addForm {
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  button {
    margin-right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover {
    border: 1px solid #29b7e5;
  }
  input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    font-size: 18px;
  }
  input::placeholder {
    font-style: italic;
    font-size: 20px;
  }
}
</style>
