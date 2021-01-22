import { PnjService } from './../service/pnj.service';
import { Pnj } from './../modele/Pnj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-pnj',
  templateUrl: './fiche-pnj.component.html',
  styleUrls: ['./fiche-pnj.component.css']
})
export class FichePnjComponent implements OnInit {

  pnjList : Array<Pnj> = [];

  constructor(public pnjService : PnjService) { }

  ngOnInit(): void {
    this.pnjService.getAllPnj().subscribe(
      data => {
      this.pnjList = data;
      }
    )
  }

}
