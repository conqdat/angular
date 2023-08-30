import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childName!: string;
  @Input() childAge !: number;
  @Output() emitName: EventEmitter<string> = new EventEmitter<string>();

  handleClickMe(childName: string) {
    this.emitName.emit(childName)
  }
}
