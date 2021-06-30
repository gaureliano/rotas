import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursoRoutingModule } from './cursos.routing.module';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule
    // RouterModule
  ],
  exports: [],
  providers: [CursosService]
})
export class CursosModule { }
