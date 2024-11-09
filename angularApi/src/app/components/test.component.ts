import { Component } from "@angular/core";
import { ServicioTest } from "../services/servicio.service";
import { product } from "../modules/product";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { updateModal } from "../update/updateModal"
@Component({
    selector: 'app-testcomp',
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})

export class TestComponent {
    Product: product = { id: 0, name: '', data: { color: '#ffffff', price: 0 } }

    productList = new Array<product>()

    constructor(private ngModal: NgbModal, private testService: ServicioTest) { }

    ngOnInit(): void {
        this.testService.getAll().subscribe((response) => {
            this.productList = response;
        })
    }

    addProduct(): void {
        console.log(this.Product.name)
        console.log("afaw")
        if (this.Product.name && this.Product.data.price && this.Product.data.color) {
            let id = 0
            for (let producto of this.productList) if (id < producto.id) id = producto.id + 1
            this.Product.id = id

            this.testService.addProduct(this.Product).subscribe(
                (response) => {
                    this.productList.push(response)
                    this.Product = { id: 0, name: '', data: { color: '', price: 0 } }
                },
                (error) => {
                    console.error('Error al agregar el producto:', error);
                }
            )

        }
    }

    deleteProduct(id: number): void {
        this.testService.deleteProduct(id).subscribe(
            (response) => {
                this.productList = this.productList.filter(product => product.id !== id);
            },
            (error) => {
                console.error('Error al borrar el producto:', error);
            }

        )
    }

    updateProduct(selectedProduct: product): void {
        console.log(selectedProduct)
        const copy = JSON.parse(JSON.stringify(selectedProduct));
        const ngModal = this.ngModal.open(updateModal, { backdrop: 'static' });
        ngModal.componentInstance.product = copy

        ngModal.result.then(resultado => {
            if (resultado) {
                this.testService.updateProduct(copy).subscribe((response) => {
                    const index = this.productList.findIndex(p => p.id === response.id);
                    if (index !== -1) {
                        console.log(response)
                        this.productList[index] = response;
                    }
                })
            }
        }).catch((error) => {
            console.error("error", error);
        })
    }
}