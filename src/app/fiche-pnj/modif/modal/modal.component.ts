import { Menu } from './../../../modele/Menu';
import { Pnj } from './../../../modele/Pnj';
import { PnjService } from './../../../service/pnj.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id!: number;
  pnj!: Pnj;

  modifForm : FormGroup;
  forcesList : Array<Menu> = [];
  faiblesseList : Array<Menu> = [];

  modifierpnj(){
    if(this.modifForm.valid){
      this.pnjService.updatePnj(this.modifForm.value).subscribe();
    }
  }

  constructor(public pnjService: PnjService, private builder: FormBuilder) {
    this.modifForm = builder.group({
      id: new FormControl(this.pnj.id),
      nom: new FormControl(this.pnj.nom, [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      niveau: new FormControl(this.pnj.niveau),
      forces : new FormControl(this.pnj.forces),
      faiblesse : new FormControl(this.pnj.faiblesse)
    });
   }

  ngOnInit(): void {
    this.pnjService.getOnePnj(this.id).subscribe(data => {
      this.pnj = data;
    })

    this.pnjService.getMenuForces().subscribe(data => {
      this.forcesList = data;
    })

    this.pnjService.getMenuFaiblesse().subscribe(data => {
      this.faiblesseList = data;
    })

  }

}
