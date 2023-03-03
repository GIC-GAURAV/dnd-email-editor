import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-item',
  templateUrl: './inner-item.component.html',
  styleUrls: ['./inner-item.component.css']
})
export class InnerItemComponent implements OnInit {

  constructor() { }
  @Input('completed') completed : any
  @Input('todos') todos : any
  controlsData : any = []
  selectedElement:any
  color:any
  bgcolor:any
  padding:any
  width:any
  border_radius:any
  inputTypes = [
    'text',
    'date',
    'file',
    'number'
  ]
  inputtype:any
  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      console.log(event)
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        console.log(this.completed)
        this.todos.splice(event.previousIndex, 0, this.completed[event.currentIndex])
        this.controlsData.push(event.container.data[event.container.data.length - 1])
    }
  }


  
  Apply(){
    console.log(this.selectedElement)
    let temp:any =  JSON.parse(JSON.stringify(this.completed[this.selectedIndex]))
    console.log(temp)
    temp!.styles['color'] = this.color ? this.color : temp!.styles.color
    temp!.styles['background-color'] = this.bgcolor ? this.bgcolor : temp!.styles['background-color']
    temp!.styles['padding'] = this.padding ? this.padding+'px' : temp!.styles['padding']
    temp!.styles['width'] = this.width ? this.width+'px' : temp!.styles['width']
    temp!.styles['border-radius'] = this.border_radius ? this.border_radius+'%' : temp!.styles['border-radius']
    this.completed.splice(this.selectedIndex, 1, temp)
  }

  selectedIndex:any
  onSelection(event, index){
    console.log(event, index)
    this.resetStyling()
    this.selectedElement = JSON.parse(JSON.stringify(event))
    this.selectedIndex = index
  }

  resetStyling(){
    this.color = null
    this.bgcolor = null
    this.padding = 0
  }
}
