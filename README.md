# LearnAngular


## Form

### 1. Template-driven Forms
- ngSubmit & submit
  - ngSubmit ensures that the form do not submit when the handler code throws and causes an actual http post request.
  - submit is html default form submit event, it will call underlying method when form gets submitted.
- ngModel, [ngModel], [(ngModel)]
  - ngModel: 
  - [ngModel]: syntax is used for one-way data binding, where you bind a property from your component to the value of a form control in the template.
  - [(ngModel)]:  syntax combines both one-way and two-way data binding. It allows you to bind a property from your component to the value of a form control in the template, and changes in the form control will also update the component property.

### 2. Reactive Forms
