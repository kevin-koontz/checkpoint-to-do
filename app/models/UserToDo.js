import { AppState } from "../AppState.js"

//NOTE - Sandbox => api/todos => id="user-todos"
export class UserToDo {

  constructor(data) {
    this.id = this.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
  }


  get userToDosHTMLTemplate() {
    return `
        <div class="m-2">
          <input type="checkbox">
          <span class="px-1">${this.description}</span>
        </div>
        <div>
          <span class="mdi mdi-delete-forever user-todo-delete"></span>
        </div>
    `
  }
}