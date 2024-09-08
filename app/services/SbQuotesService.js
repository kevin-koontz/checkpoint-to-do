import { AppState } from "../AppState.js";
import { SbQuote } from "../models/SbQuote.js";
import { api } from "./AxiosService.js";

class SbQuotesService {

  async getSbQuotes() {
    const response = await api.get('api/quotes')
    console.log('GOT QUOTES 🗣️', response.data);

    const newQuote = new SbQuote(response.data)
    AppState.quote = newQuote

  }


}

export const sbQuotesService = new SbQuotesService()