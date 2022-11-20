import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Fault } from 'src/app/fault';
import { FaultComponent } from './fault/fault.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //@ViewChild('addFaults', { read: ViewContainerRef, static: true })
  //addFaults!: ViewContainerRef;
  title = 'FEF_project_2k22-23';

  selectedValue: number = 0;
  students: string[] = ["Alexander", "Kilian", "Sebastiaan", "Ward", "XYZ"];

  faults: Fault[] = [
    { weger: 1, name: 'fout 1', checked: false },
    { weger: 2, name: 'fout 2', checked: true },
    { weger: 0.5, name: 'fout 3', checked: false },
    { weger: 0, name: 'fout 4', checked: false },
  ];

  addFault(name: string) {
    //const component = this.addFaults.createComponent(FaultComponent);
    //component.instance.fname = name;
    name = name.trim();
    if (name) {
      if (!this.faults.some(f => f.name === name)) {
        this.faults.push({ weger: 1, name: name, checked: true });
      };
    };
  };
}
