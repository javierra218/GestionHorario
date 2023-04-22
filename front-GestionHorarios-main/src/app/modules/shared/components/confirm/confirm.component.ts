import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecursoService } from '../../services/recurso.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private RecursoService: RecursoService) { }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close(3);

  }
  delete(){
    if(this.data != null){

      this.RecursoService.deleteRecursos(this.data.rec_id)
      .subscribe( (data: any)=>{
        this.dialogRef.close(1);


      }, (error: any)=>{

        this.dialogRef.close(2);

      })
      
    }else{
      this.dialogRef.close(3);
    }
  }

}
