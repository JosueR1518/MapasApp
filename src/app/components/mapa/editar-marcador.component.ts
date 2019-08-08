import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-marcador',
  templateUrl: './editar-marcador.component.html',
  styleUrls: ['./editar-marcador.component.css']
})
export class EditarMarcadorComponent implements OnInit {


  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarMarcadorComponent>,
    @Inject(MAT_DIALOG_DATA)  data: any) {

      this.forma = fb.group({
        titulo: data.titulo,
        desc: data.desc
      });
    }

  ngOnInit() {
  }


  guardarCambios() {

    if (this.forma.valid) {
      this.dialogRef.close(this.forma.value);

    }

  }


  cancelar() {
    this.dialogRef.close();
  }

}
