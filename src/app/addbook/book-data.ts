import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';



export class BookData implements InMemoryDbService {

  createDb() {
    const books: Book[] = [
      {
        'id': 1,
        'Title':'messi',
        'Author':'husen',
        'Year':2016
      },
      {
        'id': 2,
        'Title':'iniesta',
        'Author':'sandy',
        'Year':2015
      },
      {
        'id': 5,
        'Title':'suarez',
        'Author':'shiva',
        'Year':2017
      },
      {
        'id': 8,
        'Title':'xavi',
        'Author':'pasane',
        'Year':2017
        
      },
      
    ];
    return { books };
  }
}
