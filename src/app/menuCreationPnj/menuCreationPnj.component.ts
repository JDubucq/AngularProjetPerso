import { PnjService } from './../service/pnj.service';
import { Menu } from './../modele/Menu';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menuCreationPnj',
  templateUrl: './menuCreationPnj.component.html',
  styleUrls: ['./menuCreationPnj.component.css']
})
export class MenuCreationPnjComponent implements OnInit {

  pnjForm : FormGroup;
  archetypeList : Array<Menu> = [];
  raceList : Array<Menu> = [];

  generer(): void{
    if (this.pnjForm.valid){
      this.pnjService.addPnj(this.pnjForm.value).subscribe();
    }
  }

  constructor(public pnjService: PnjService, private builder: FormBuilder) {
    this.pnjForm = builder.group({
      nom: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      niveau: new FormControl(1),
      race: new FormControl(null,[]),
      archetype: new FormControl(null)
    });
   }

   ngOnInit(): void {
    this.pnjService.getMenuArchetype().subscribe(data => {
      this.archetypeList = data;
    })

    this.pnjService.getMenuRace().subscribe(data => {
      this.raceList = data;
    })
  }

}
