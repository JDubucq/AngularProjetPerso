import { PnjService } from './../../service/pnj.service';
import { Pnj } from './../../modele/Pnj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  @Input() id!: number;
  pnj!: Pnj;

  constructor(public pnjService : PnjService) { }

  ngOnInit(): void {
    this.pnjService.getOnePnj(this.id).subscribe(data => {
      this.pnj = data;
    })
  }
}
