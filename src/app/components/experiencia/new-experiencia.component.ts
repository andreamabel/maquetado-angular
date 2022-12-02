import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = "";
  descripcionE: string = "";
  msjInformativeAddExp: string[] = ["",""];

  constructor (private sExperiencia: SExperienciaService , private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    this.msjInformativeAddExp[0]="Creando experiencia...";
    this.msjInformativeAddExp[1]="text-success";
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data=>{
        this.msjInformativeAddExp[0]="Experiencia creada con éxito";
        this.msjInformativeAddExp[1]="text-success";
        this.router.navigate(['']);
      }, err =>{
        alert("failed");
        this.msjInformativeAddExp[0]="Error al crear experiencia";
        this.msjInformativeAddExp[1]="text-danger";
        this.router.navigate(['']);
      }
    )
  }

  home(){
    this.router.navigate([''])
  }
}
