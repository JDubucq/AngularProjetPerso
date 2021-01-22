import { Menu } from './../../modele/Menu';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Pnj } from './../../modele/Pnj';
import { PnjService } from './../../service/pnj.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  @Input() id: number;
  pnj: Pnj =  {
    "id": 7,
    "nom": "Alex",
    "niveau": 1,
    "forces": {
        "id": 36,
        "nom": "Fascinant",
        "caracteristique": "Cha"
    },
    "faiblesse": {
        "id": 2,
        "nom": "Maigrichon",
        "caracteristique": "Con"
    },
    "race": {
        "id": 3,
        "nom": "Elfe",
        "vitesse": 9,
        "descriptif": null,
        "forc": 0,
        "dex": 2,
        "con": 0,
        "inte": 0,
        "sag": 0,
        "cha": 0,
        "capacites": [
            {
                "id": 14,
                "nom": "Vision dans le noir",
                "descriptif": "Vision jusqu'à 18m dans l'obscurité"
            },
            {
                "id": 15,
                "nom": "Ascendance féerique",
                "descriptif": "Avantage pour JDS charmer, ne peut pas être endormi"
            },
            {
                "id": 18,
                "nom": "Transe",
                "descriptif": "Besoin de 4h de repos au lieu de 8h"
            }
        ]
    },
    "archetype": {
        "id": 10,
        "nom": "Guerrier tribal",
        "dangerosite": "1/8 (25px)",
        "ca": 12,
        "pv": 11,
        "descriptif": null,
        "forc": 13,
        "dex": 11,
        "con": 12,
        "inte": 8,
        "sag": 11,
        "cha": 8,
        "sens": 10,
        "armes": [
            {
                "id": 14,
                "nom": "Lance",
                "style": "Spécial",
                "toucher": 3,
                "portee": 18,
                "nombreDeCible": 1,
                "degats": 4,
                "nombreDeDegats": "1d6/1d8+1",
                "typeDeDegats": "Perforant"
            }
        ],
        "capacites": [
            {
                "id": 12,
                "nom": "Tactique de groupe",
                "descriptif": "Avantage lors du jet d'attaque si allié à 1,50m ou moins de la cible"
            }
        ]
    }
};
  modifForm : FormGroup;
  forcesList : Array<Menu> = [];
  faiblesseList : Array<Menu> = [];

  modifierpnj(){
    if(this.modifForm.valid){
      this.pnjService.updatePnj(this.modifForm.value).subscribe();
    }
  }

  supprimerpnj(idToDelete:number){
    this.pnjService.deletePnj(idToDelete).subscribe();
  }

  constructor(public pnjService : PnjService, private builder: FormBuilder) {
    this.modifForm = builder.group({
      id: new FormControl(this.pnj.id),
      nom: new FormControl("", [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      niveau: new FormControl(1),
      forces : new FormControl(null),
      faiblesse : new FormControl(null)
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
