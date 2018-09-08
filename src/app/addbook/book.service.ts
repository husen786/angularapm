import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError, ErrorObserver } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { BookError } from './bookerror';



@Injectable({
  providedIn: 'root'
})
export class BookService {
  private productUrl='api/books';
  
    constructor(private http:HttpClient){

    }
    getAllBooks(): Observable<Book[]> {
      let getHeader:HttpHeaders=new HttpHeaders ({
        'Accept':'Application/json',
        'Authorization':'my-token'

      });
      return this.http.get<Book[]>(this.productUrl,{
        headers:getHeader,
      }).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        
      );
    }
  
    getBookById(id: number): Observable<Book | undefined> {
      const url = `${this.productUrl}/${id}`;
      return this.http.get<Book>(url)
      .pipe(
        tap(data => console.log('getBook: ' + JSON.stringify(data))),
        
      );
    }
    BoBookService
      

    createBook(book: Book): Observable<Book> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      book.id = null;
      return this.http.post<Book>(this.productUrl, book, { headers: headers })
        .pipe(
          tap(data => console.log('createBook: ' + JSON.stringify(data))),
          
        );
    }

    updateBook(book:Book): Observable<Book> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.productUrl}/${book.id}`;
      return this.http.put<Book>(url, book, { headers: headers })
        .pipe(
          tap(() => console.log('updateProduct: ' + book.id)),
          // Return the product on an update
          map(() => book),
         
        );
    }

    deleteBook(bookId:number):Observable<void>{
      const url = `${this.productUrl}/${bookId}`;

      return this.http.delete<void>(url);
    }

      
 
    private handleHttpError(error:HttpErrorResponse):Observable<BookError>{
      let dataError=new BookError();
      dataError.errorNumber=100;
      dataError.message=error.statusText;
      dataError.friendlyMessage='an error occured while receiving the data';
      return throwError(dataError);
      
    }
  
}
