import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {}
  updateData(item: any) {
    console.warn(item);
    this.data = item;
  }
}
