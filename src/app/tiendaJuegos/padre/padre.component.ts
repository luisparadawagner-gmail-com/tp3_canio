import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: [ './padre.component.css' ]
})
export class PadreComponent implements OnInit {
	varPadre: string = 'Vengo del componente padre';
	varPadreAlias: string = 'Vengo del padre usando siglas en el componente hijo';

	siglas: string;

	constructor() {}

	ngOnInit(): void {}

	onSiglas(siglas) {
    debugger;
		this.siglas = siglas;
	}
}