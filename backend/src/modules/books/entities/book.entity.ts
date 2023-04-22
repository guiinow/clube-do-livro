export class BookEntity {
    id: number;
    buyinfo: number;
    title: string;
    author: string;
    description: string;
    publisher: string;
    cover: string;

    constructor(book?: Partial<BookEntity>) {
        this.id = book?.id;
        this.buyinfo = book?.buyinfo;
        this.title = book?.title;
        this.author = book?.author;
        this.description = book?.description;
        this.publisher = book?.publisher;
        this.cover = book?.cover;
    }
}
