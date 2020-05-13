import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: [ './padre.component.css' ]
})
export class PadreComponent implements OnInit {
	varPadre: string = 'El nombre de la tienda es Valkyrie';
	
	siglas: string;

	constructor() {}

	ngOnInit(): void {}

	onSiglas(siglas) {
    debugger;
		this.siglas = siglas;
	}
}