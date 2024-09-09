
//NOTE - User Date/Time => User Time => id="user-time"
export class UserDateTime {

  constructor(data) {
    this.date = new Date()

  }

  get dateHTMLTemplate() {
    return `
    <div class="no-select">${this.userTime}</div>
    `
  }

  get userTime() {
    return this.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }
}