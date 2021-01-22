import { PnjService } from './../../service/pnj.service';
import { Pnj } from './../../modele/Pnj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carac',
  templateUrl: './carac.component.html',
  styleUrls: ['./carac.component.css']
})
export class CaracComponent implements OnInit {
  @Input() id!: number;
  pnj!: Pnj;

  constructor(public pnjService : PnjService) { }

  ngOnInit(): void {
    this.pnjService.getOnePnj(this.id).subscribe(data => {
      this.pnj = data;
    })
  }

}
