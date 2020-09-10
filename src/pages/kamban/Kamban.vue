<template>
  <div class="container-board ">
    <div class=" columns">
      <div class="panel column col-4 mr-2">
        <div class="panel-header">
          <div class="panel-title flex-centered">To do</div>
        </div>
        <div class="panel-body">
          <ListaTodo
            :todoList="unchecked"
            @eventListaTodo="checkTodoItemAction"
            @removeTodoItem="removerTodoAction"
          />
        </div>
        <div v-if="unchecked.length > 0" class="panel-footer">
          <button
            @click="allDone"
            class="btn btn-link"
            style="margin-left:158px"
          >
            Concluir Todos
          </button>
        </div>
      </div>
      <div class="panel column col-4">
        <div class="panel-header">
          <div class="panel-title flex-centered">Done</div>
        </div>
        <div class="panel-body">
          <ListaTodo
            :todoList="checked"
            @eventListaTodo="checkTodoItemAction"
            @removeTodoItem="removerTodoAction"
          />
        </div>
        <div v-if="checked.length > 0" class="panel-footer">
          <div>
            <div>
              <button  @click="desmarcarTodos" class="btn btn-link floatLeft">Desmarcar Todos</button>
            </div>
            <div>
              <button @click="removerTudo" style ="color:red;" class=" btn btn-link floatLeft">Remover Todos</button>
            </div>
          </div>
          <!--  <button @click="desmarcarTodos" class="btn btn-link" style="margin-left:158px">Desmarcar Todos</button>
           <button @click="desmarcarTodos" class="btn btn-link" style="margin-left:158px">Desmarcar Todos</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaTodo from "@/components/ListaTodo";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ListaTodo,
  },
  computed: {
    ...mapGetters(["unchecked", "checked"]),
  },
  methods: {
    ...mapActions(["checkTodoItemAction", "removerTodoAction","removerTudo"]),
    ...mapMutations(["allDone", "desmarcarTodos"]),
  },
};
</script>

<style scoped>
.container-board {
  height: calc(100vh - 100px);
  padding: 10px;
}
.columns {
  height: 100%;
}
.floatLeft {
  float: left;
}
</style>
