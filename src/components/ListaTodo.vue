<template>
  <div class="todo-list">
    <div v-for="item in todoList" :key="item.id">
      <div class="tile flex-centered" :class="{ checkedClass: item.checked }">
        <div class="tile-icon">
          <i
            class="icon"
            :class="item.checked ? 'icon-check' : 'icon-time'"
          ></i>
        </div>
        <dir class="tile-content">
          <div class="tile-subtitle">
            {{ item.description }}
          </div>
        </dir>
        <div class="tile-action">
          <button @click="$emit('eventListaTodo', item)" class="btn btn-link">
            <span v-if="!item.checked">Concluido</span>
            <span v-if="item.checked">Desmarcar</span>
          </button>
          <button class="btn btn-link">
            <span @click="$emit('removeTodoItem', item)" class="text-error"
              >Remover</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoList:{
      type:Array,
      required:true
    }
  },
  methods: {
    concluir() {
      console.log("teste");
    },
    modificarLista() {
      return this.listaTodo;
    },
  },
};
</script>

<style lang="scss">
.checkedClass {
  text-decoration: line-through;
  color: green;
}
</style>
