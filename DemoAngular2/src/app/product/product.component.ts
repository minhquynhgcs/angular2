import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service'
import { HTTP_PROVIDERS } from '@angular/http'

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['css/bootstrap.min.css', 'css/font-awesome.css',
              'css/shop-homepage.css', '/js/jquery.js',
              'js/bootstrap.min.js']
  providers: [ProductService, HTTP_PROVIDERS]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
