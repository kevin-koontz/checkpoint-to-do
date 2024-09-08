//CREATE MODEL + CONTROLLER + SERVICE => IMAGE + QUOTES + TODO + WEATHER
//IMAGE COMPLETED => UPDATE MODEL/CONTROLLER/SERVICE from SandboxImageX to ImageX / ToDo => Image



//NOTE - Sandbox => api/images => id="image-of-the-day" + id="image-copyright"
export class SbImage {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = data.largeImgUrl

  }

  get imageHTMLTemplate() {
    return ` `
  }

  // get todoHTMLTemplate() {
  //   return /*html*/ `
  //   <div>
  //       <span>></span>
  //       <span>3 Todos remaining</span>
  //   </div>
  //   `
  // }
}