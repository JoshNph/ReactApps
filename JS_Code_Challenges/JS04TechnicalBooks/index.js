class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if (this.numCopies === 0 ) {
            return "out of stock";
        } else if (this.numCopies < 10 ) {
            return "low stock";
        } else {
            return "in stock";
        }
    } 

    sell(numSold = 1) {
        this.numCopies -= numSold;
    }

    restock(numCopies = 5) {
        this.numCopies += numCopies;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return this.edition;
    }
}

// create an instance of TechnicalBook
const technicalBook = new TechnicalBook("The Pragmatic Programmer", "Andrew Hunt and David Thomas", "978-0201616224", 10, "2nd");

// get the book's title
console.log(technicalBook.title); // "The Pragmatic Programmer"

// get the book's availability
console.log(technicalBook.getAvailability()); // "in stock"

// sell 3 copies of the book
technicalBook.sell(3);

// get the book's availability after selling 3 copies
console.log(technicalBook.getAvailability()); // "low stock"

// restock the book with 7 copies
technicalBook.restock(7);

// get the book's availability after restocking
console.log(technicalBook.getAvailability()); // "in stock"

// get the book's edition
console.log(technicalBook.getEdition()); // "2nd"
