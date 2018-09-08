import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Book } from './book';
import { BookError } from './bookerror';
import { BookService } from './book.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class BookresolverServices implements Resolve <Book[] | BookError>{

    constructor(private bookService:BookService){

    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Book[] | BookError>{
        return this.bookService.getAllBooks().
        pipe(
            catchError(err=>of(err))
        );

    }
}