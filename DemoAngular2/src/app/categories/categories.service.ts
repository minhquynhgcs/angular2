import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Category} from './category.model'
import 'rxjs/add/operator/map'

@Injectable()
export class CategoriesService {

    constructor(private http: Http) { }

    getCategories() {
        return this.http.get('app/categories.json')
            .map(response => <Category[]>response.json().data);
    }

}
