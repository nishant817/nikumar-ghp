import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  title = 'Technical Skills';
  max: number = 10;

  getType(rating: number) {
    let type: string;
 
    if (rating >= 8) {
      type = 'bg-success';
    } else if (rating >= 6) {
      type = 'bg-info';
    } else if (rating >= 4) {
      type = 'bg-warning';
    } else {
      type = 'bg-danger';
    }
    
    return type;
  }

  skills = [ { 
    id: 1,
    sec: 'Programming Languages', 
    items: [ 
      { id: 1, nm: 'c#', rt: 9},
      { id: 2, nm: 'Javascript', rt: 8},
      { id: 3, nm: 'HTML5', rt: 8},
      { id: 4, nm: 'SQL', rt: 7},
      { id: 5, nm: 'R', rt: 7},
      { id: 6, nm: 'C/C++', rt: 5},
      { id: 7, nm: 'Java', rt: 4}
    ]
  }, {
    id: 2,
    sec: 'Backend Development',
    items: [
      { id: 1, nm: 'ASP.NET MVC', rt: 8 },
      { id: 2, nm: 'Entity Framework', rt: 8 },
      { id: 3, nm: 'LINQ', rt: 8 },
      { id: 4, nm: 'ADO.NET', rt: 7 },
      { id: 5, nm: 'Node.js/Express', rt: 6 }
    ]
  }, {
    id: 3,
    sec: 'Frontend Development',
    items: [
      { id: 1, nm: 'Angular', rt: 8 },
      { id: 2, nm: 'Angularjs', rt: 8 },
      { id: 3, nm: 'Vue.js', rt: 8 },
      { id: 4, nm: 'ASP.NET', rt: 7 },
      { id: 5, nm: 'Jasmine/Karma', rt: 7 },
      { id: 6, nm: 'CSS', rt: 7 },
      { id: 7, nm: 'Bootstrap', rt: 7 },
      { id: 8, nm: 'WPF', rt: 8 }
    ]
  }, {
    id: 4,
    sec: 'Database',
    items: [
      { id: 1, nm: 'SQL Server', rt: 7 },
      { id: 2, nm: 'Oracle', rt: 6 },
      { id: 3, nm: 'Sybase', rt: 6 },
      { id: 4, nm: 'SSIS', rt: 6 },
      { id: 5, nm: 'OBI', rt: 6 },
      { id: 6, nm: 'MongoDB', rt: 3 }
    ]
  }, {
    id: 4,
    sec: 'Others',
    items: [
      { id: 1, nm: 'OOAD Concepts', rt: 8 },
      { id: 2, nm: 'Design patterns', rt: 6 },
      { id: 3, nm: 'Dependency Injections', rt: 7 },
      { id: 4, nm: 'UML diagrams', rt: 6 },
      { id: 5, nm: 'Cloud concepts', rt: 6 }
    ]
  } ];
}