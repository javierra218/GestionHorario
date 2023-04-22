import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { _MatTabGroupBase } from '@angular/material/tabs';
import { ConfirmComponent } from 'src/app/modules/shared/components/confirm/confirm.component';
import { RecursoService } from 'src/app/modules/shared/services/recurso.service';
import { NewrecursoComponent } from '../newrecurso/newrecurso.component';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent implements OnInit {

  constructor(private recursoService: RecursoService,
   public dialog: MatDialog, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getRecursos();
    
  }
  displayedColumns: string[]=['rec_id','rec_codigo','rec_descripcion','rec_tipo', 'actions'];
  dataSource= new MatTableDataSource<RecursoElement>();


 getRecursos(){
  this.recursoService.getRecursos().subscribe((data:any) =>{

    console.log("respuesta recursos", data );
    this.processRecursosResponse(data);

  },(error)=>{
    console.log("error", error);
  })
 }

 processRecursosResponse( resp:any){
  const dataRecurso: RecursoElement[]=[];

  if( resp.metadata[0].code == "00"){
    let listRecursos= resp.recursoResponse.recurso;

    listRecursos.forEach((element: RecursoElement) => {
      dataRecurso.push(element);
    });

    this.dataSource = new MatTableDataSource<RecursoElement>(dataRecurso);
  }

 }

 openRecursoDialog(){
  const dialogRef = this.dialog.open( NewrecursoComponent , {
    width: '450px'
  });

  dialogRef.afterClosed().subscribe((result:any) => {

    if(result==1){ 
      this.openSnackBar("Recurso Agregado", "Exitosamente");
      this.getRecursos();

    
    }else if (result ==2){
      this.openSnackBar("se produjo un error al agrega recurso ", "Error");

    }
  });

 }
 edit (rec_id:number, rec_codigo: string, rec_descripcion:string, rec_tipo:string){

  const dialogRef = this.dialog.open( NewrecursoComponent , {
    width: '450px',
    data:{rec_id: rec_id, rec_codigo:rec_codigo, rec_descripcion:rec_descripcion, rec_tipo: rec_tipo}
  });

  dialogRef.afterClosed().subscribe((result:any) => {

    if(result==1){ 
      this.openSnackBar("Recurso Actualizada", "Exitosamente");
      this.getRecursos();

    
    }else if (result ==2){
      this.openSnackBar("se produjo un error al actualizar recurso ", "Error");

    }
  });

    
}
  delete(rec_id: any){
    const dialogRef = this.dialog.open( ConfirmComponent , {
      width: '450px',
      data:{rec_id: rec_id}
    });

  
  
    dialogRef.afterClosed().subscribe((result:any) => {
  
      if(result==1){ 
        this.openSnackBar("Recurso Borrado", "Exitosamente");
        this.getRecursos();
  
      
      }else if (result ==2){
        this.openSnackBar("se produjo un error al actualizar recurso ", "Error");
  
      }
    });

   

  }

  buscar (termino: string){
    if( termino.length === 0){
      return this.getRecursos();
    }
    this.recursoService.getRecursosById(termino).subscribe((resp:any)=>{
      this.processRecursosResponse(resp);

    })

  }


 openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar>{
  return this.snackBar.open(message, action,{
    duration: 2000
  })
 }

}
export interface RecursoElement{
  rec_id: number;
  rec_codigo: string;
  rec_descripcion: string;
  rec_tipo:string;
}