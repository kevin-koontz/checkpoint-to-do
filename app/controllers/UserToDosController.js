import { AppState } from "../AppState.js";
import { userToDosService } from "../services/UserTodosService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class UserToDosController {

  constructor() {
    console.log('📃🎮');
    this.getUserToDo()
  }

  async getUserToDo() {
    try {
      await userToDosService.getUserToDo()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


}