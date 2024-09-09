import { AppState } from "../AppState.js";
import { UserToDo } from "../models/UserToDo.js";
import { api } from "./AxiosService.js";

class UserToDosService {
  async getUserToDo() {
    const response = await api.get('api/todos')
    console.log('GOT TODO 📃', response.data);
    const toDo = response.data.map(toDoData => new UserToDo(toDoData))
    AppState.todo = toDo
  }

}

export const userToDosService = new UserToDosService()