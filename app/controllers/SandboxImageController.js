import { AppState } from "../AppState.js";
import { sandboxImageService } from "../services/SandboxImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxImagesController {

  constructor() {
    console.log('🖼️🎮');
    AppState.on('image', this.drawSandboxImage)
    this.getSandboxImage()
  }

  async getSandboxImage() {
    try {
      await sandboxImageService.getSandboxImage()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawSandboxImage() {
    const image = AppState.image
    setHTML('image-of-the-day', image.quoteHTMLTemplate)
    document.body.style.backgroundImage = `url(${image.largeImgUrl})`
    //NOTE - draw large image from api to background ^
    setHTML('image-copyright', `Image by ${image.author}`)
    //NOTE - draw image author from api ^
  }
}