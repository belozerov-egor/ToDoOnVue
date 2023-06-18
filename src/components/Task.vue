<template>
    <li class="task">
        <input
            type="checkbox"
            :checked="task.completed"
            @change="checkTask(task.id, $event)"
        />
        <div>
            <span v-if="!isEditing" @dblclick="toggleEditing">{{
                editedTitle
            }}</span>
            <input
                v-else
                type="text"
                v-model="editedTitle"
                @blur="updateTask"
                @keyup.enter="updateTask"
                ref="input"
                autofocus
            />
        </div>
        <MyButton @click="removeTask(task.id)">X</MyButton>
    </li>
</template>

<script>
import MyButton from "./Universal/MyButton.vue";
export default {
    components: { MyButton },
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isEditing: false,
            editedTitle: this.task.title,
        };
    },
    methods: {
        removeTask(taskId) {
            this.$store.commit("removeTask", taskId);
        },
        checkTask(taskId, event) {
            const checked = event.target.checked;
            this.$store.commit("checkTask", { id: taskId, checked });
        },
        toggleEditing() {
            this.isEditing = true;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        updateTask() {
            const newTitle = this.editedTitle.trim();
            if (newTitle !== "") {
                this.$store.commit("updateTitle", {
                    id: this.task.id,
                    title: newTitle,
                });
                this.isEditing = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.task {
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 20px 10px;
    div {
        margin-right: 15px;
    }
    input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        margin-right: 10px;
        background-color: transparent;
        border: 2px solid #c4c4c4;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;
    }
    input[type="checkbox"]:checked::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 6px;
        height: 12px;
        border: solid #33cc33;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        border-radius: 2px;
    }
    input {
        width: 100%;
        height: 60px;
        border: none;
        outline: none;
        font-size: 18px;
    }
}
</style>
