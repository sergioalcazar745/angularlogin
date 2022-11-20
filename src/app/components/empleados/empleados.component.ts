import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public empleados!: Array<Empleado>;
  public autorizado!: boolean;
  public empleado!: Empleado;

  constructor(private _service: EmpleadoService) {}

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
      this.autorizado = true;
    }, error =>{
      if(error.status == 401){
        this.autorizado = false
      }
    });
  }

  detalleEmpleado(id:number){
    this.empleado = this.empleados[id];
  }

  metodoPadreAlerta(event: any){
    alert("Saludos para: " + event.apellido + "Prueba: " + event.prueba)
  }

}
