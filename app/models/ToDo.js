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
        <p>"Would you like a cookie?"</p>
        <p>-The Oracle</p>
    </div>
  `
  }
}