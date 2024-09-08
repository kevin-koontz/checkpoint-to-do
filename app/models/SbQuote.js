
//NOTE - Sandbox => api/quotes => id="quote-of-the-day"
export class SbQuote {

  constructor(data) {
    this.content = data.content
    this.author = data.author
    this.authorSlug = data.authorSlug
    this.length = data.length
    this.dateAdded = data.dateAdded
    this.dateModified = data.dateModified

  }

  get quoteHTMLTemplate() {
    return `
    <div>
      <div class="fs-3 text-center">
        <span>"${this.content}"</span>
      </div>
      <div class="fs-6 text-center">
        <span>-${this.author}</span>
      </div>
    </div>
  `
  }


}