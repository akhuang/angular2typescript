import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
  selector: 'auction-product-item',
  templateUrl: './app/components/product-item/product-item.html',
  styleUrls: ['./app/components/product-item/product-item.css'],
})
export default class ProductItemComponent {
  @Input() product: Product;
}
