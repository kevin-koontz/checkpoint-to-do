import { AppState } from "../AppState.js";
import { UserToDo } from "../models/UserToDo.js";
import { api } from "./AxiosService.js";

class UserToDosService {
  async getUserToDo() {
    const response = await api.get('api/todos')
    console.log('GOT TODO 📃', response.data);
  }

}

export const userToDosService = new UserToDosService()