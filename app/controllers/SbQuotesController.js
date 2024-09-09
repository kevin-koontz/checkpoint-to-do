import { AppState } from "../AppState.js";
import { sbQuotesService } from "../services/SbQuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SbQuotesController {

  constructor() {
    console.log('🗣️🎮');
    AppState.on('quote', this.drawSbQuotes)
    this.getSbQuotes()
  }

  async getSbQuotes() {
    try {
      await sbQuotesService.getSbQuotes()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawSbQuotes() {
    const quote = AppState.quote
    setHTML('quote-of-the-day', quote.quoteHTMLTemplate)
  }


}