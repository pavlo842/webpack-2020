export default class Post { // чтобы не прописывать порядок файлов в html нужно прописать export default - экспорт класса по умолчанию
    
    constructor(title, img) {
        this.title = title;
        this.img = img;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img,
        }, null, 2)
    }

    getUpperCaseTitle() {
        return this.title.toUpperCase()
    }

}
