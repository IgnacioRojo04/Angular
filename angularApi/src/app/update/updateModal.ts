import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioTest } from "../services/servicio.service";
import { product } from "../modules/product";


@Component({
  selector: 'app-update-modal',
  templateUrl: './updateModal.html',
  styleUrls: ['./updateModal.css']
})
export class updateModal {
  @Input() product!: product;

  colo: boolean = false
  constructor(public activeModal: NgbActiveModal, private testSevice: ServicioTest) { }
  producta: product;
  ngOnInit() {
    if (this.product.data.color) {
      if (this.product.data.color[0] == "#") {
        this.colo = true
        console.log("dsfdsfsdfsdg")
      }
    }
    else this.product.data.color = "No color"
    if (!this.product.data.price) this.product.data.price = 0
    //this.product = {id: this.productMandado.id, name: this.productMandado.name, data: {color: this.productMandado.data.color, price: this.productMandado.data.price}}
  }

  saveChanges(): void {
    this.testSevice.updateProduct(this.product);
    this.activeModal.close(true); // Devuelve true si la actualización fue exitosa
  }

  closeModal(): void {
    console.log(product)
    this.activeModal.dismiss();
  }
}
// <input id="color"  class="form-control" placeholder="Color"  type="color" required [(ngModel)]="product.data.color" name="color">