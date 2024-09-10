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
    AppState.on('user', this.getUserToDos)
    AppState.on('myToDos', this.drawUserToDos)
  }

  async getUserToDos() {
    try {
      await userToDosService.getUserToDos()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawUserToDos() {
    const userToDo = AppState.myToDos
    let userToDoHTML = ''
    userToDo.forEach(todo => userToDoHTML += todo.userToDosHTMLTemplate)
    setHTML('user-todos', userToDoHTML)

    const completedToDos = userToDo.filter(todo => todo.completed)
    setHTML('todo-count', `${completedToDos.length}`)
  }

  async createToDo() {
    try {
      event.preventDefault()
      console.log('CREATE TODO 📃');
      const toDoForm = event.target
      const toDoFormData = getFormData(toDoForm)
      console.log('FORM DATA', toDoFormData);

      await userToDosService.createToDo(toDoFormData)

    } catch (error) {
      console.error(error)
    }
  }

  async deleteToDo(myToDosId) {
    try {
      const toDoDelete = await Pop.confirm("Are you sure you would like to delete this ToDo?")

      if (!toDoDelete) return

      await userToDosService.deleteToDo(myToDosId)

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async updateToDos(myToDosId) {
    console.log('updated todo', myToDosId);
    try {
      await userToDosService.updateToDos(myToDosId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }


  }


}