import { PnjService } from './../../service/pnj.service';
import { Pnj } from './../../modele/Pnj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.css']
})
export class ArmeComponent implements OnInit {

  @Input() id!: number;
  pnj!: Pnj;

  constructor(public pnjService : PnjService) { }

  ngOnInit(): void {
    this.pnjService.getOnePnj(this.id).subscribe(data => {
      this.pnj = data;
    })
  }

}
