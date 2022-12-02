import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  msjInformativeEditExp: string[] = ["",""];

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err =>{
        alert("Error al editar experiencia");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void{
    this.msjInformativeEditExp[0]="Actualizando...";
    this.msjInformativeEditExp[1]="text-success";
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data=> {
        this.msjInformativeEditExp[0]="Experiencia actualizada con éxito";
        this.msjInformativeEditExp[1]="text-success";
        this.router.navigate([''])
      }, err =>{
        this.msjInformativeEditExp[0]="Error al actualizar experiencia";
        this.msjInformativeEditExp[1]="text-danger";
        this.router.navigate([''])
      }
    )
  }

  home(){
    this.router.navigate([''])
  }
}
