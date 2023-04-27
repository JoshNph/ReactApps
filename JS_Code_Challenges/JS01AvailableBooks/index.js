// 1. Title
// 2. Author
// 3. ISBN
// 4. numCopies

// getAvailability() => "out of stock" if 0 available copies
// "low stock" if<10 copies
// "in stock" otherwise

// sell(numSold)
// default 1

// restock(numCopies)
// default 5

// JavaScript classes
// getter

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


const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565", 25);

console.log(myBook.getAvailability()); // logs "in stock"
myBook.sell(10);
console.log(myBook.getAvailability()); // logs "in stock"
myBook.sell(15);
console.log(myBook.getAvailability()); // logs "low stock"