;
var books = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
        published: new Date("1949-06-08"),
        available: true,
    },
    {
        id: 2,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        published: new Date("1953-10-19"),
        available: true,
    },
    {
        id: 3,
        title: "The Adventures of Captain Underpants",
        author: "Dav Pilkey",
        published: new Date("1997-09-01"),
        available: true,
    }
];
console.log(books);
function addBook(book) {
    books.push(book);
}
;
addBook({
    id: 4,
    title: "Big Nate: In a Class by Himself",
    author: "Lincoln Peirce",
    published: new Date("2010-10-23"),
    available: true,
});
function findBookById(id) {
    return books.find(function (book) { return book.id === id; });
}
;
console.log(findBookById(3));
var updateBook = function (book) {
    var indexBook = books.findIndex(function (books) { return books.id === book.id; });
    if (indexBook !== -1) {
        books[indexBook] = book;
        return true;
    }
    else {
        return false;
    }
};
console.log(updateBook(books[1]));
function removeBook(id) {
    var indexBook = books.findIndex(function (book) { return book.id === id; });
    if (indexBook !== -1) {
        books.splice(indexBook, 1);
        return true;
    }
    return false;
}
;
console.log(removeBook(1));
console.log(books);
