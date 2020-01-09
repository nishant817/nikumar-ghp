import { Component } from '@angular/core';

@Component({
  selector: 'prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent {
  title = 'Professional Summary';
  profData = [
    { id: 1, text: "An experienced and accomplished Software Engineering with 15+ years of demonstrated history of design & development of enterprise level applications and services" },
    { id: 2, text: "•	Full-Stack software development with Diverse skill set" },
    { id: 2, text: "•	Specialized in Object-Oriented design and implementation" },
    { id: 2, text: "•	10+ years of experience in .NET technologies like WCF, ASP.NET, Entity framework" },
    { id: 2, text: "•	Proficient and skilled in Front-end web development using ASP.NET and JavaScript frameworks like AngularJS, Angular, Vue.Js" },
    { id: 2, text: "•	REST API (RESTful Services) and Webservice development using ASP.NET, WCF, Node.js" },
    { id: 2, text: "•	Have worked with different databases including SQL Server, Oracle and Sybase" },
    { id: 2, text: "•	Highly experienced in Agile/Scrum methodologies as well as Waterfall model" },
    { id: 2, text: "•	Skilled in SDLC, configuration management, requirement specification, application design, release management" },
    { id: 2, text: "•	Out of the box thinking and Creative drive towards improvement and optimization at any stage from design to deployment" },
    { id: 2, text: "•	Fast learner and open to new technologies and work environment" }
  ]
}