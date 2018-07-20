import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>Parties to the Deal section (HTML part) in {{name}}!</h3>`,
  styles: [`h3 { font-family: Lato; text-align:center}`]
})
export class HelloComponent  {
  @Input() name: string;
  

 

}
