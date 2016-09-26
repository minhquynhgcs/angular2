import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Mobile} from './mobile.model'
import 'rxjs/add/operator/map'

@Injectable()
export class LaptopsService {

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('app/mobiles.json')
            .map(response => <Mobile[]>response.json().data);
    }

}
