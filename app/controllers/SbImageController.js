import { AppState } from "../AppState.js";
import { sbImagesService } from "../services/SbImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SbImagesController {

  constructor() {
    console.log('🖼️🎮');
    AppState.on('image', this.drawSbImages)
    this.getSbImages()
  }

  async getSbImages() {
    try {
      await sbImagesService.getSbImages()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawSbImages() {
    const image = AppState.image
    setHTML('image-of-the-day', image.quoteHTMLTemplate)
    document.body.style.backgroundImage = `url(${image.largeImgUrl})`
    //NOTE - draw large image from api to background ^
    setHTML('image-copyright', `Image by ${image.author}`)
    //NOTE - draw image author from api ^
  }
}