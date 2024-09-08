//CREATE MODEL + CONTROLLER + SERVICE => IMAGE + QUOTES + TODO + WEATHER
//IMAGE COMPLETED => UPDATE MODEL/CONTROLLER/SERVICE from SandboxImageX to ImageX / ToDo => Image
//NOTE - Sandbox => api/images
export class SbImage {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = data.largeImgUrl

  }

  get quoteHTMLTemplate() {
    return /*html*/ `
    <div>
      <div class="fs-3">
        <span>"Would you like a cookie?"</span>
      </div>
      <div class="fs-6 text-end">
        <span>-The Oracle</span>
      </div>
    </div>
  `
  }

  get todoHTMLTemplate() {
    return /*html*/ `
    <div>
        <span>></span>
        <span>3 Todos remaining</span>
    </div>
    `
  }
}