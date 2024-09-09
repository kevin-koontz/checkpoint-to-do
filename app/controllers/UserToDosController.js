import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { userToDosService } from "../services/UserTodosService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class UserToDosController {

  constructor() {
    console.log('📃🎮');
    AppState.on('user', this.getUserToDo)
    AppState.on('todo', this.drawUserToDo)
  }

  async getUserToDo() {
    try {
      await userToDosService.getUserToDo()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawUserToDo() {
    const userToDo = AppState.todo
    let userToDoHTML = ''
    userToDo.forEach(todo => userToDoHTML += todo.userToDosHTMLTemplate)
    setHTML('user-todos', userToDoHTML)
  }


}