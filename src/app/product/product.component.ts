import { Component, OnInit } from '@angular/core';
import { Product} from './product.model.ts'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  private products:Product[] = [];
  constructor() {
    
    this.products.push(new Product(1,'Product 1', 'ProductDescription'));
    this.products.push(new Product(2,'Product 2', 'ProductDescription'));
    this.products.push(new Product(3,'Product 3', 'ProductDescription'));
    this.products.push(new Product(4,'Product 4', 'ProductDescription'));
    this.products.push(new Product(5,'Product 5', 'ProductDescription'));
    this.products.push(new Product(6,'Product 6', 'ProductDescription'));
    this.products.push(new Product(7,'Product 7', 'ProductDescription'));
    this.products.push(new Product(8,'Product 8', 'ProductDescription'));
 
   }

  ngOnInit() {
    }


  productClickListener(index:number, product:Product) {
    // console.log((event.srcElement).);
    console.log(index);
    this.products.splice(index, 1);
  }

  addProduct() {
    this.products.push(new Product(8,'Temp Product', 'ProductDescription'));
 
  }

  onOptionSelectedListener(optionId:number) {
    console.log(this.products[optionId]);
  }
}