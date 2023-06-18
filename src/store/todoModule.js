import {v1} from "uuid";

export const todoModule = {
    state: () => ({
        title: "TODO",
        tasks: [
            {
                id: v1(),
                title: "Сравнить React и Vue",
                completed: false,
            },
            {
                id: v1(),
                title: "Сравнить Redux и Vuex",
                completed: false,
            },
            {
                id: v1(),
                title: "Вникнуть в документацию",
                completed: false,
            },
        ],
        filter: "all",
    }),
    mutations: {
        addTask(state, title) {
            let newTask = {id: v1(), title: title, completed: false}
            state.tasks.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        removeTask(state, taskId) {
            const index = state.tasks.findIndex(task => task.id === taskId)
            if (index !== -1) {
                state.tasks.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        removeTasks(state) {
            state.tasks = state.tasks.filter(task => !task.completed);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        checkTask(state, payload) {
            const index = state.tasks.findIndex(task => task.id === payload.id);
            if (index !== -1) {
                state.tasks[index].completed = payload.checked;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        },
        updateTitle(state, id, title) {
            const index = state.tasks.findIndex(task => task.id === id);
            if (index!== -1) {
                state.tasks[index].title = title;
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
            }
        }
        ,

        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setFilter(state, filter) {
            state.filter = filter;
        }
    },
    getters: {
        filteredTasks: (state) => {
            if (state.filter === "completed") {
                return state.tasks.filter((task) => task.completed);
            } else if (state.filter === "active") {
                return state.tasks.filter((task) => !task.completed);
            } else {
                return state.tasks;
            }
        }
    },
    actions: {
        loadTasksFromStorage({ commit }) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            commit("setTasks", tasks);
        }
    }
}


