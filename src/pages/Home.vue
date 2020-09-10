<template>
  <div>
    <div class="container grid-xs py-2">
      <form @submit.prevent="addList(todo)">
        <div class="input-group">
          <input
            v-model="todo.description"
            type="text"
            class="form-input"
            placeholder="Novo Todo"
          />
          <button class="btn btn-primary input-group-btn" :class="{ loading }">
            Criar
          </button>
        </div>
      </form>
      <ListaTodo
        :todoList="todoList"
        @eventListaTodo="checkTodoItemAction"
        @removeTodoItem="removerTodoAction"
      />
    </div>
  </div>
</template>

<script>
import ListaTodo from "../components/ListaTodo";
import { mapActions } from "vuex";

export default {
  components: {
    ListaTodo,
  },
  data: () => ({
    todo: { id: null, description: "", checked: false },
  }),

  computed: {
    todoList() {
      return this.$store.state.listaTodo;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    ...mapActions([
      "removerTodoAction",
      "checkTodoItemAction",
      "addListTodoAction",
    ]),

    addList(todoItem) {
      const inputPreenchido = (item) => item.description != "";

      if (inputPreenchido(todoItem)) {
        this.loading = true;
        /* todoItem.id = Math.random(); */
        this.addListTodoAction(todoItem);
        this.todo = { id: null, description: "", checked: false };
        this.loading = false;
      } else {
        alert("inserir a descrição");
      }
    },
  },
};
</script>
