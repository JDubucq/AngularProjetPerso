import { Pnj } from './../../modele/Pnj';
import { PnjService } from './../../service/pnj.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() id!: Number;
  pnj!: Pnj;

  constructor(public pnjService : PnjService) { }

  ngOnInit(): void {
    this.pnjService.getOnePnj(this.id).subscribe(data => {
      this.pnj = data;
    })
  }

}
