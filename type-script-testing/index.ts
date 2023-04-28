interface Book {
    id : number
    title: string
    author: string
    published: Date
    available: boolean
};

let books: Book[] = [
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

console.log(books)

function addBook(book: Book): void {
    books.push(book);
};

addBook(
    {
        id: 4,
        title: "Big Nate: In a Class by Himself",
        author: "Lincoln Peirce",
        published: new Date("2010-10-23"),
        available: true,
    }
);


function findBookById(id: number): Book | undefined {
    return books.find(book => book.id === id)
};

console.log(findBookById(3));

let updateBook = (book: Book): boolean =>{
    let indexBook = books.findIndex((books) => books.id === book.id)
    if (indexBook !== -1 )
    {books[indexBook] = book
        return true 
    }
    else{
        return false
    }
};

  console.log(updateBook(books[1]));

  function removeBook(id: number): boolean {                 
    const indexBook = books.findIndex((book) => book.id === id);  
    if (indexBook !== -1) {
      books.splice(indexBook, 1);    
      return true;                
    }
    return false;                 
  };

console.log(removeBook(1));

console.log(books);
  