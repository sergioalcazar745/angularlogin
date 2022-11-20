import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  @Input("empleado") empleado!: Empleado
  @Output() saludoEmpleado: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  enviarSaludo(){
    this.saludoEmpleado.emit({apellido: this.empleado.apellido, prueba: "Hola"})
  }

}
