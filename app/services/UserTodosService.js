import { AppState } from "../AppState.js";
import { UserToDo } from "../models/UserToDo.js";
import { api } from "./AxiosService.js";

class UserToDosService {
  async saveToDo() {
    // const toDoSave = AppState.todo
    const response = await api.post('api/todos', AppState.todo)
    console.log('SAVED TODO 💾📃', response.data);
    // const newToDo = new UserToDo(response.data)
    // AppState.todo = newToDo

  }

  async getUserToDo() {
    const response = await api.get('api/todos')
    console.log('GOT TODO 📃', response.data);
    const toDo = response.data.map(toDoData => new UserToDo(toDoData))
    AppState.todo = toDo
    console.log('todos', AppState.myToDo);

  }

  //confused if toDo is single object or array
  // async getUserToDo() {
  //   const response = await api.get('api/todos')
  //   console.log('GOT TODO 📃', response.data);
  //   const newToDo = new UserToDo(response.data)
  //   AppState.todo = newToDo
  // }

  createToDo(toDoFormData) {
    const toDo = AppState.todo
    const newToDo = new UserToDo(toDoFormData)
    toDo.push(newToDo)

    this.saveToDo()
  }

}

export const userToDosService = new UserToDosService()