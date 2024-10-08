import { AuthController } from './controllers/AuthController.js';
import { SbImagesController } from "./controllers/SbImageController.js";
import { SbQuotesController } from "./controllers/SbQuotesController.js";
import { UserDatesTimesController } from "./controllers/UserDatesTimesController.js";
import { UserToDosController } from "./controllers/UserToDosController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  SbImagesController = new SbImagesController()

  SbQuotesController = new SbQuotesController()

  UserDatesTimesController = new UserDatesTimesController()

  UserToDosController = new UserToDosController()



  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
