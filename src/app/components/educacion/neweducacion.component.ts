import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  nombreE: string;
  descripcionE: string;
  msjInformativeAddEdu: string[] = ["",""];

  constructor(private educacionS: EducacionService, private router: Router){  }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    this.msjInformativeAddEdu[0]="Creando educación..";
    this.msjInformativeAddEdu[1]="text-success";
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data => {
        this.msjInformativeAddEdu[0]="Educación creada con éxito";
        this.msjInformativeAddEdu[1]="text-success";
        this.router.navigate(['']);
      }, err => {
        this.msjInformativeAddEdu[0]="Error al crear educación";
        this.msjInformativeAddEdu[1]="text-danger";
        this.router.navigate(['']);
      }
    )
  }

  home(){
    this.router.navigate([''])
  }
}
