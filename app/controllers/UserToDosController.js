import { AppState } from "../AppState.js";
import { UserToDo } from "../models/UserToDo.js";
import { api } from "../services/AxiosService.js";
import { userToDosService } from "../services/UserTodosService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";

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

  createToDo() {
    event.preventDefault()
    console.log('CREATE TODO 📃');
    const toDoForm = event.target
    const toDoFormData = this.getFormData(toDoForm)
    console.log('FORM DATA', toDoFormData);

    userToDosService.createToDo(toDoFormData)

  }

  async saveToDo() {
    console.log('SAVE TODO',);
    try {
      await userToDosService.saveToDo()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }


  }


}