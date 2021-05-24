import { Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'CursoPlatzi';

  items = ['oriana', 'angie', 'gladys'];

  power = 10;

  addItem(){
    this.items.push('nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index,1);
  }
}
