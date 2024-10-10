import { Component } from "@angular/core";
import { ServicioTest } from "../services/servicio.service";
import { product } from "../modules/product";

@Component({
    selector: 'app-testcomp',
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})

export class TestComponent {
    Product: product = {id:0, name:'', data:{color:'#ffffff', price:0}}
    
    productList = new Array<product>()

    constructor(private testService: ServicioTest){}

    ngOnInit(): void {
        this.testService.getAll().subscribe((response) => {
            this.productList = response;
        })
    }

    addProduct():void{
        if(this.Product.name && this.Product.data.price && this.Product.data.color){
            let id = 0
            for (let producto of this.productList) if (id < producto.id) id = producto.id +1
            this.Product.id = id
            this.testService.addProduct(this.Product).subscribe(
                (response) => {
                    this.productList.push(response)

                },
                (error) => {
                    console.error('Error al agregar el producto:', error);
                }
            )
            this.Product = { id: 0, name: '', data: { color: '', price: 0 } }
        }
    }

    deleteProduct(id: number): void{
        this.testService.deleteProduct(id).subscribe(
            (response) =>{
                this.productList = this.productList.filter(product => product.id !== id);
            },
            (error) => {
                console.error('Error al borrar el producto:', error);
            }

        )
    }


}