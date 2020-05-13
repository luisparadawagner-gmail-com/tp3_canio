import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: [ './hijo.component.css' ]
})

export class HijoComponent implements OnInit {
	@Input() varHijo: string;
	@Input('aliasJuego') varHijo2: string;

	@Output() siglas = new EventEmitter<string>();

    constructor(private fb: FormBuilder) {}
    
    nombre = new FormControl();

    juegoForm = this.fb.group({
        nombre: ['', Validators.required],
        duracion: [''],
        fechaEstreno: [''],
        descripcion: [''],
        generos: this.fb.array([this.fb.control('')])
    });



    get generos(){
        return this.juegoForm.get('generos') as FormArray;
    }

    addGenero(){
        this.generos.push(this.fb.control(''));
    }



	ngOnInit(): void {}

	siglasJuego(nombre: FormControl) {
		debugger;
		if (nombre.value === 'Resident Evil 2') {
			this.siglas.emit('RE2');
		} else {
			this.siglas.emit('No pueden generarse las siglas para este juego');
		}
    }

    
    submit(){
        debugger;
        this.juegoForm.value;

        //this.juegoForm.setValue({
            //nombre: '',
            //duracion: '',
            //fechaEstreno: '',
            //descripcion: '',
            //generos: this.generos.value
        //});

        this.juegoForm.patchValue({duracion: 500});
    }

}