import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
  educacion: Educacion = null;
  msjInformativeEditEdu: string[] = ["",""];

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al editar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    this.msjInformativeEditEdu[0]="Actualizando...";
    this.msjInformativeEditEdu[1]="text-success";
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.msjInformativeEditEdu[0]="Educación actualizada con éxito";
        this.msjInformativeEditEdu[1]="text-success";
        this.router.navigate(['']);
      }, err => {
        this.msjInformativeEditEdu[0]="Error al actualizar educación";
        this.msjInformativeEditEdu[1]="text-danger";
        this.router.navigate([''])
      }
    )
  }

  home(){
    this.router.navigate([''])
  }
}
