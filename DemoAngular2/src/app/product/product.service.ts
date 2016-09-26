import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Course} from './course.model'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('app/products.json')
            .map(response => <Product[]>response.json().data);
    }

}
