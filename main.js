// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.
//  Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price.
// Override the display method to include the book price.
//  Create an instance of the 'Ebook' class and display its details.


class Book{
    constructor(title,author,publicationYear){
       this.title=title
       this.author=author
       this.publicationYear=publicationYear
    }
    bookdetails(){
        document.write("Title : "+this.title+"<br>", "<br>");
        document.write("Author : "+this.author+"<br>","<br>");
        document.write("This book is published in the year of "+this.publicationYear+"<br>","<br>");
    }
}
let book=new Book("Harry Potter","J.K. Rowling",1997)

class Ebook extends Book{
    constructor(title,author,publicationYear,bookprice){
        super(title,author,publicationYear)
        this.bookprice=bookprice
    }
    books(){
        document.write("Book price : Rs "+this.bookprice,"<br>","<br>");
    }
}
let ebook=new Ebook("Harry Potter","J.K. Rowling",1997,500);
let ebook1=new Ebook("wings of fire","A.P.J.Abdul Kalam",1999,600)
ebook.bookdetails()
ebook.books()
ebook1.bookdetails()
ebook1.books()