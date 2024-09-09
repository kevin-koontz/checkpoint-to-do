import { SbImage } from "./models/SbImage.js"
import { SbQuote } from "./models/SbQuote.js"
import { UserDateTime } from "./models/UserDateTime.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {SbImage} */
  image = null

  /**@type {SbQuote} */
  quote = null

  /**@type {UserDateTime} */
  date = null

  todo

}

export const AppState = createObservableProxy(new ObservableAppState())