import { Injectable , EventEmitter} from "@angular/core";

import { LogService } from './../shared/log.service';


@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap']

  constructor(private LogService: LogService){
    console.log('PIMBA');
  }

  getCursos(){
    this.LogService.consoleLog('obetendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string){
    this.LogService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
