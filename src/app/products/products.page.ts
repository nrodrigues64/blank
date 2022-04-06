import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from '../model/Product';

import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(public navCtrl: NavController, public restApi: RestApiService) {
    this.restApi.getProducts().subscribe( (products: Product[]) => {
      this.products = products;
    });
    console.log(this.products);
  }
  public products: Product[] = [];
  /**
   * 
   * @param product 
   */
  onCreateProduct(product) {
    this.restApi.createProducts(product)
    .subscribe( (newProduct) => {
      this.products.push(newProduct);
    });
  }
  onUpdate(product) {
    this.restApi.updateProduct(product)
    .subscribe( (updateProduct) => {
      if(this.products.some(pro => { 
        if(pro.id == product.id) {
          pro = product.id;
        }
      })){}
    });
  }

  onRemoveProduct(product) {
    this.restApi.deleteProductById(product.id)
    .subscribe( () => {
      this.products = this.products.filter( (e) => e.id !==product.id);
    });
  }
  ngOnInit() {
  }

}
