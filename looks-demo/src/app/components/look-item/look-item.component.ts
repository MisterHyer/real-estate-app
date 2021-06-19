import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Look } from 'src/app/models/Look';

@Component({
  selector: 'app-look-item',
  templateUrl: './look-item.component.html',
  styleUrls: ['./look-item.component.css']
})
export class LookItemComponent implements OnInit {
  @Input() look!: Look  ;
  constructor() { }

  ngOnInit(): void {
  }

}
