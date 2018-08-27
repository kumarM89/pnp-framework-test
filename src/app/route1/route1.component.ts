import { Component, OnInit } from '@angular/core';
import { sp } from "@pnp/sp";

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    sp.web.lists.getByTitle('Yearly data').items.getAll().then((result: any[]) => {
      console.log(result);
    });
  }

}
