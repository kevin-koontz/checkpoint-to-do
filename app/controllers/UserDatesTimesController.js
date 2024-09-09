import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { userDatesTimesService } from "../services/UserDatesTimesService.js";
import { UserDateTime } from "../models/UserDateTime.js";

export class UserDatesTimesController {

  constructor() {
    console.log('📅⌚🎮');
    this.drawUserDatesTimes()

  }

  drawUserDatesTimes() {
    const time = new UserDateTime()
    setHTML('user-time', time.dateHTMLTemplate)

    setInterval(() => {
      time.date = new Date()
      setHTML('user-time', time.dateHTMLTemplate)
    }, 1000)
  }
}