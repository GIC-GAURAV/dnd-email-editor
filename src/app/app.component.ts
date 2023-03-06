import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drag & Drop in Angular 7';
  website = 'https://samorgill.com';
  controlsData : any = []
  todos = [
    {
      name: 'Section',
      controlType:'section',
      sectionType:1,
      display : false,
      styles:{
        // color:'red',
        // 'background-color':'tranparent'
      }
    },
    {
      name: 'Heading',
      controlType:'heading',
      display : true,
      styles:{
        color:'black',
        'background-color':'transparent',
        'font-size':'32px',
        'font-weight' : 'bold',
        padding: '0px'
      }
    },
    {
      name: 'Paragraph',
      controlType:'paragraph',
      display : true,
      styles:{
        color:'red',
        'background-color':'tranparent'
      }
    },
    {
      name: 'Image',
      controlType:'image',
      display : true,
      src : 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
      styles:{
        width:'130px'
      }
    }
  ];

  sectionList = [{
    controlType:'section',
    sectionType:1,
    sectionName:'First',
    innerItemCount:1,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:2,
    sectionName:'Second',
    innerItemCount:2,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:3,
    sectionName:'three',
    innerItemCount:3,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:4,
    sectionName:'Four',
    innerItemCount:4,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:5,
    sectionName:'Five',
    innerItemCount:5,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:6,
    sectionName:'Six',
    innerItemCount:2,
    display : false,
    component : []
  },
  {
    controlType:'section',
    sectionType:7,
    sectionName:'Seven',
    innerItemCount:2,
    display : false,
    component : []
  }

]

  completed = [];

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
  // drop(event: CdkDragDrop<string[]>) {
    
  //   if (event.previousContainer === event.container) {
  //     //console.log(event)
  //     moveItemInArray(event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   } else {
  //     console.log(event);
  //     console.log(event.container.data[event.container.data.length - 1])
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex, event.currentIndex);
  //       console.log(this.completed)
  //       if(this.todos.length < 4){
  //         this.todos.splice(event.previousIndex, 0, this.completed[event.currentIndex])
  //       }
  //       if(this.sectionList.length < 7){
  //         this.sectionList.splice(event.previousIndex, 0, this.completed[event.currentIndex])
  //       }
  //       this.controlsData.push(event.container.data[event.container.data.length - 1])
  //   }
  //   console.log(this.controlsData)
  // }

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


  resetStyling(){
    this.color = null
    this.bgcolor = null
    this.padding = 0
  }

  getSectionLength(count : any){
    let arr = []
    for(let i = 1; i <= count; i++){
      arr.push('innerItem_'+i)
    }
    return arr;
  }

  retrunArray(){
    return [1,2,3,45]
  }

  selectedDataByHover : any
  onMouseHover(event:any){
    // console.log(event)
    this.selectedDataByHover = event
  }

  addId(data:any, index1:any, index2:any){
    data['id'] = index1 + "_" + index2
    // console.log(data)
  }

  // newdrop(event:any){
  //   console.log(event)
  // }
  drop(event:any){
    event.stopPropagation();
    event.preventDefault();
    console.log(event)
    let data:any = JSON.parse(event.dataTransfer.getData('assciatedData'))
    
    for(let i = 0; i < data.innerItemCount ; i++){
      data.component.push({index:i,values:[]})
    }
    console.log(this.completed)
    this.completed.push(data)
  }

  allowDrop(ev:any){
    ev.stopPropagation();
    ev.preventDefault();
  }

  dragStart(event:any, data:any){
    // console.log(event, data)
    event.dataTransfer.setData('assciatedData', JSON.stringify(data));
    // console.log(JSON.parse(event.dataTransfer.setData('assciatedData')));
    event.stopPropagation();
  }

  Submit(){
    console.log(this.completed)
  }
}
