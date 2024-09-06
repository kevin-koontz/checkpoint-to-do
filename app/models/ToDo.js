export class ToDo {

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
  `
  }

  get todoHTMLTemplate() {
    return /*html*/ `
    <div class="d-flex">
        <span>></span>
        <span>3 Todos remaining</span>
    </div>
    `
  }
}