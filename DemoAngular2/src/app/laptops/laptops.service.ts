import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Laptop} from './laptop.model'
import 'rxjs/add/operator/map'

@Injectable()
export class LaptopsService {

    constructor(private http: Http) { }

    getLaptops() {
        return this.http.get('app/laptops.json')
            .map(response => <Laptop[]>response.json().data);
    }

}
