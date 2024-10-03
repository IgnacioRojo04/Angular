import { Component } from "@angular/core";
import { ServicioTest } from "../services/servicio.service";
import { product } from "../modules/product";

@Component({
    selector: 'app-testcomp',
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})

export class TestComponent {
    productList = new Array<product>()

    constructor(private testService: ServicioTest){}

    ngOnInit(): void {
        this.testService.getAll().subscribe((response) => {
            this.productList = response;
        })
    }
}