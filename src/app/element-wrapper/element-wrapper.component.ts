import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-wrapper',
  templateUrl: './element-wrapper.component.html',
  styleUrls: ['./element-wrapper.component.css']
})
export class ElementWrapperComponent implements OnInit {

  @Input('values') values : any
  constructor() { }

  ngOnInit() {
  }

  onSelection(event, index){
    console.log(event, index)
    // this.resetStyling()
    // this.selectedElement = JSON.parse(JSON.stringify(event))
    // this.selectedIndex = index
  }

}
