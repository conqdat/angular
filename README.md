# LearnAngular

# Data binding

- {{ expression }}
- Properties Binding: `` <input type="text" [value]="user.name" /> ``
- Event Biding: ``  <button (click)="showInfo()">Click me!</button> ``
- Two-binding
    - `` <input type="text" [(ngModel)]="user.name" /> ``
    - `` <input type="text" [ngModel]="user.name" (ngModelChange)="user.name = $event" /> ``

- Binding class: 
    - `` <div [class.warning]="isWarning"> ``
    - `` <div [class.warning]="['1', '2']"> ``
    - `` <div [class.warning]="{'is-Red: isRed'}"> ``    