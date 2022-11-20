import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[fault]',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.scss']
})
export class FaultComponent implements OnInit {
  @Input() fname: string = "";
  @Input() weger: number = 0;
  @Input() checked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
