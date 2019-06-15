import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  title = 'My Tech Skills';
  max: number = 10;

  getType(rating: number) {
    let type: string;
 
    if (rating >= 8) {
      type = 'success';
    } else if (rating >= 6) {
      type = 'info';
    } else if (rating >= 4) {
      type = 'warning';
    } else {
      type = 'danger';
    }
    
    return type;
  }

  skills = [ { 
    id: 1,
    sec: 'Programming Languages', 
    items: [ 
      { id: 1, nm: 'c#', rt: 9},
      { id: 2, nm: 'Javascript', rt: 8},
      { id: 3, nm: 'HTML5', rt: 7},
      { id: 4, nm: 'Java', rt: 4},
      { id: 5, nm: 'C/C++', rt: 5},
      { id: 6, nm: 'SQL', rt: 7},
      { id: 7, nm: 'R', rt: 7}
    ]
  }, {
    id: 2,
    sec: 'Backend Development',
    items: [
      { id: 1, nm: 'ASP.NET MVC', rt: 8 },
      { id: 2, nm: 'Entity Framework', rt: 7 }
    ]
  }, {
    id: 3,
    sec: 'Frontend Development',
    items: [
      { id: 1, nm: 'Angular', rt: 8 },
      { id: 2, nm: 'Vue.js', rt: 8 }
    ]
  }, {
    id: 4,
    sec: 'Database',
    items: [
      { id: 1, nm: 'SQL Server', rt: 6},
      { id: 2, nm: 'Oracle', rt: 5}
    ]
  } ];
}