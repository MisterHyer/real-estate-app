import { Component, OnInit } from '@angular/core';
import { LookService } from '../../services/look.service';
import { Look } from '../../models/Look';

@Component({
  selector: 'app-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent implements OnInit {
  looks: Look[] = [];

  constructor(private lookService: LookService) { }

  ngOnInit(): void {
    this.lookService.getLooks().subscribe((looks) => this.looks = looks);
  }

}
