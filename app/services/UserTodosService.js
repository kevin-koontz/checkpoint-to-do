import { AppState } from "../AppState.js";
import { UserToDo } from "../models/UserToDo.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class UserToDosService {
  async deleteToDo(myToDosId) {
    const response = await api.delete(`api/todos/${myToDosId}`)
    console.log('DELETED TODO ❌', response.data);

    const toDoIndex = AppState.myToDos.findIndex(todo => myToDosId.id == myToDosId)
    AppState.myToDos.splice(toDoIndex, 1)
  }



  // STUB Edit the todo with a put request
  async editToDo() {
    // Reference spellbook

  }

  async getUserToDos() {
    const response = await api.get('api/todos')
    console.log('GOT TODO 📃', response.data);
    const toDos = response.data.map(toDoData => new UserToDo(toDoData))
    AppState.myToDos = toDos
    console.log('todos', AppState.myToDos);

  }

  // FIXME
  async createToDo(toDoFormData) {
    const response = await api.post('api/todos', toDoFormData)
    const newToDo = new UserToDo(response.data)
    AppState.myToDos.push(newToDo)
  }

}

export const userToDosService = new UserToDosService()