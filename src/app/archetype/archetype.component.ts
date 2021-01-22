import { Component, OnInit } from '@angular/core';
import { Pnj } from './../modele/Pnj';
import { PnjService } from './../service/pnj.service';
import { Menu } from '../modele/Menu';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css']
})
export class ArchetypeComponent implements OnInit {
  /*
  pnjList : Array<Pnj> = [];
  archetypeList : Array<Menu> = [];
  raceList : Array<Menu> = [];
  forcesList : Array<Menu> = [];
  faiblesseList : Array<Menu> = [];
  pnjForm : FormGroup;
  modifForm : FormGroup;

  generer(): void{
    if (this.pnjForm.valid){
      this.pnjService.addPnj(this.pnjForm.value).subscribe(data => this.pnjService.getAllPnj().subscribe(data => {
        this.pnjList = data;
      }));
    }
  }

  supprimerpnj(id:number){
    this.pnjService.deletePnj(id).subscribe(data => this.pnjService.getAllPnj().subscribe(data => {
      this.pnjList = data;
    }));

  }
  modifierpnj(){
    if(this.modifForm.valid){
      this.pnjService.updatePnj(this.modifForm.value).subscribe(data => this.pnjService.getAllPnj().subscribe(data => {
        this.pnjList = data;
      }));
    }
  }*/

  constructor(/*public pnjService: PnjService, private builder: FormBuilder*/) {
    /*
      this.pnjForm = builder.group({
        nom: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
        niveau: new FormControl(1),
        race: new FormControl(null,[]),
        archetype: new FormControl(null)
      });

      this.modifForm = builder.group({
        id: new FormControl(Number),
        nom: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
        niveau: new FormControl(1),
        forces : new FormControl(null),
        faiblesse : new FormControl(null)
      });
      */
  }

  ngOnInit(): void {

  }


}
