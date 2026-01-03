import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  public formProduct!: FormGroup;
  public products: {title: string, price: number}[] = [];
  constructor(private _fb: FormBuilder, private productService: ProductsService) {
  }

  public ngOnInit() {
    this.formProduct = this._fb.group({
      price: ['', [Validators.required]],
      title: ['', [Validators.required]]
    })
    this.productService.get().subscribe(
      res => this.products = res
    )
  }

 public createProduct() {
    this.productService.create({title: this.formProduct.controls['title'].value, price: Number(this.formProduct.controls['price'].value)})
      .pipe(take(1)).subscribe()
   this.productService.get().subscribe(
     res => this.products = res
   )
  }

}
