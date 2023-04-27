// Movie class

// Title
// Director
// Genre
// Release year
// Rating

// getOverview()
// <movie>, a <genre> film directed by <director> was released in <releaseYear>. It received a rating of <rating>."

class Movie {
    constructor(title, director, genre, year, rating){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.year = year;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.year}. It received a rating of ${this.rating}.`
    }
}

const myMovie = new Movie("The Godfather", "Francis Ford Coppola", "Crime, Drama", 1972, 9.2);

console.log(myMovie.getOverview()); // logs "The Godfather, a Crime, Drama film directed by Francis Ford Coppola was released in 1972. It received a rating of 9.2."
