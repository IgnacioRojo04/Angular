import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioTest } from "../services/servicio.service";
import { product } from "../model/product";



@Component({
  selector: 'app-update-modal',
  templateUrl: './updateModal.html',
  styleUrls: ['./updateModal.css']
})
export class updateModal {
  @Input() product!: product;

  colo: boolean = false
  constructor(public activeModal: NgbActiveModal, private testSevice: ServicioTest) { }
  newProduct: product = {
    id: 0,
    name: "",
    data: {
      color: "",
      price: 0,
    }
  };

  ngOnInit() {
    this.newProduct = this.product
    if (this.product.data.color) {
      if (this.product.data.color[0] == "#") {
        this.colo = true
      }
    }
    else this.newProduct.data.color = "No color"
    if (!this.product.data.price) this.newProduct.data.price = 0

  }
//
  saveChanges(): void {
    
    this.testSevice.updateProduct(this.product);
    this.activeModal.close(true);
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
}