import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: [ './hijo.component.css' ]
})

export class HijoComponent implements OnInit {
    
  
	@Input() varHijo: string;
    @Output() siglas = new EventEmitter<string>();
    
    //Property Binding
    imagenJuego : string = 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-01-22-09-29/resident-evil-2-remake-recensione-1548149360164.jpg/EG11/thumbnail/750x422/format/jpg/quality/60';
    nameImage = 'RE2';
    alto = '200';
    ancho = '300';

    //Event Binding
    eventBinding(){
        this.varHijo = "Devil May Cry 5";
    }

    //Two Way Binding
    juego : string = 'Horizon Zero Dawn';

    constructor(private fb: FormBuilder) {}
    
    nombre = new FormControl();


    juegoForm = this.fb.group({
        nombre: ['Resident Evil 2', Validators.required],
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

        this.juegoForm.setValue({
            nombre: 'Red Dead Redemption 2',
            duracion: '95',
            fechaEstreno: 10/28/2018,
            descripcion: 'Estados Unidos, 1899. El ocaso del Salvaje Oeste ha comenzado y las fuerzas de la ley dan caza a las últimas bandas de forajidos. Los que no se rinden o sucumben, son asesinados. ',
            generos: this.generos.value
        });

        this.juegoForm.patchValue({duracion: 60});
    }

}