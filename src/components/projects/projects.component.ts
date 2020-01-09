import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects = [
    {
      id: 6,
      clientId: "efm",
      clientName: "Enterprise Fleets",
      responsibilities: [
        "Develop RESTful APIs using .NET framework for microservice application",
        "Develop web based Single Page Application using AngularJS, Angular and Vue.js",
        "Code client side unit test using NodeJS, Jasmine & Karma and server side unit test using C# and Microsoft Fakes framework",
        "Design data model and application",
        "Develop data warehouse reports and dashboards using OBI (Oracle Business Intelligence)",
        "Develop SSIS packages and SQL Server Jobs",
        "Follow Agile methodology for Requirements, Estimation, development and peer review",
        "Perform load testing and performance testing and analysis of application and services using Visual Studio, Soap UI and Fiddler",
        "Follow Agile methodologies",
      ],
      technologies: [
        ".NET 4.6, C#, WCF, ASP.NET MVC, AngularJS, Angular, Vue.js, NodeJS, Jasmine, Karma, JavaScript, HTML, CSS, Entity Framework, SoapUI, Fiddler,",
        "SQL Server, State Machine, SSIS, OBI, TFS, Git",
        "Agile Methodologies, Jira, Kanban, Confluence"
      ],
      applications: [{
        name: "Citation Management Service development",
        overview: `
The project primarily involves the development of REST APIs and web based applications for Electronic Citations Management System. 
REST APIs for Microservices are developed in C# and .NET and are used for serving Web Applications as well as for interfacing with external services. Web based SPA is developed using AngularJS, Angular, Vue.js, Javascript, Node, HTML5 and Foundation CSS. Unit tests are writted using Karma and Jasmine. SSIS packages are developed to process heavy loads. OBI (Oracle Business Intelligence) reports are developed to interface with Data Warehouse and generate reports & dashboards.
The developed system will be used to manage, process and payment of citations (traffic violations) of fleet vehicles. The citations are issues by different agencies. They are processed by the digital scanner and fed to the system. They undergo a series of validations before processing for the payment. Once validated, the payment is processed using either check or credit card issued by external bank and then a payment is issued to the bank for credit card usage and bill.
        `
      }]
    },
    
    {
      id: 5,
      clientId: "ameren",
      clientName: "Ameren",
      responsibilities: [
        "Lead and Mentor the development team",
        "Design & Develop web applications using AngularJS and ASP.NET MVC.",
        "Develop Windows Service using .NET framework and C#",
        "Develop Windows Surface application using Microsoft WPF framework",
        "Gather Requirements. Estimate, Impact Analysis and Design",
        "Unit Test. Integrate User Interface, Data Access layer, Webservice",
        "Integrate business application",
        "Deploy and configure web applications on IIS server",
        "Peer review of the code",
        "Follow Agile methodologies",
      ],
      technologies: [
        ".NET 4.5, .NET 4.6.1, C#, ADO.NET, WCF, ASP.NET MVC, Java, WPF, XAML, Microsoft Surface SDK 2.0, Prism, Unity, Entity Framework, ADO.NET, ",
        "HTML, AngularJS, JavaScript, CSS, ",
        "SQL Server 2008 R2, Oracle 11g, Sybase"

      ],
      applications: [{
        name: "Ameren’s internal & external websites Development",
        overview: "Development, enhancement and maintenance of Ameren’s customer facing website (www.ameren.com), several internal websites used by business personnel and several external web application used by various organizations like companies, vendors, suppliers, etc. Most of these applications were developed in ASP.NET MVC with Oracle at backend and COBOL business layer."
      },{
        name: "EMPRV-Primavera Interface Rewrite",
        overview: "The development of middleware interface to transfer data from EMPRV (A PowerBuilder based system with Sybase database) to Primavera (Java based system with Oracle database). Additionally, the development of a website using ASP.NET and AngularJS where users can monitor transactions status, view transfer logs & error reports, and take corrective actions & re-initiate failed transactions."
      },{
        name: "Application development for Tabletop Surface Device",
        overview: `
        Design and development of a document management and version control application with a front-end to allow engineers to view and edit documents. Documents and Books consisted of large and high-resolution blueprints and design sketches of machineries and factories. The front end was developed using C#, Microsoft WPF and Microsoft Surface SDK to run mainly on large screen (3 feet x 4 feet) Table-Top Surface devices. Touch controls and various motion gestures were developed to enable browsing, viewing and editing the documents.
        `
      },
      ]
    },
    
    {
      id: 4,
      clientId: "winchester",
      clientName: "Winchester Ammunition",
      responsibilities: [
        "Develop Windows based applications using Microsoft WPF framework",
        "Develop Data Access layer and Webservice using WCF",
        "Application integration and unit testing ",
        "Gather Requirements. Estimate, Impact Analysis and Design",
        "Peer review of the code",
      ],
      technologies: [
        ".NET 4, C#, WPF, XAML, Entity Framework, WCF, Microsoft SQL Server 2008 R2"
      ],
      applications: [{
        name: "QDMS Application Development",
        overview: "The development of Quality Data Management System (QDMS) used by Quality Systems to track, monitor and report on product non-conformances within the supply chain, during manufacturing and post-production."
      }
      ]
    },
    
    {
      id: 3,
      clientId: "aspect",
      clientName: "Aspect Software",
      responsibilities: [
        "Develop Microsoft Lync plug-in app using Microsoft Silverlight",
        "Develop SQL Server Report using SSRS",
        "Gather Requirements. Estimate, Impact Analysis and Design",
        "Unit Test and Integrate User Interface",
      ],
      technologies: [
        ".NET 4, C#, SSRS 2008, SQL Server 2008   .NET 4, C#, Silverlight, XAML, Entity Framework, WCF, SQL Server 2008 R2"
      ],
      applications: [{
        name: "Reporting application for NGCC",
        overview: "The development of Case priority reports using SQL Server Reporting Service 2008 (SSRS) for Next Generation Customer Care (NGCC). The reports were generated using the SSRS Bubble chart and the tables."
      }
      ]
    },
    
    {
      id: 2,
      clientId: "equifax",
      clientName: "Equifax",
      responsibilities: [
        "Develop Windows based application using Microsoft WPF and CCA (Customer Care Accelerator) framework",
        "Develop web application using ASP.NET MVC 3",
        "Develop data access layer using Entity Framework and SQL server.",
        "Gather Requirements. Estimate, Impact Analysis and Design",
        "Peer review of the code",
      ],
      technologies: [
        ".NET 4, C#, WPF, XAML, Entity Framework, WCF, Microsoft SQL Server 2008 R2 "
      ],
      applications: [{
        name: "CSA Application development",
        overview: "Rewriting of an existing CSR application using WPF, Microsoft Dynamics CRM and CCA framework in order to improve the efficiency of customer service representative and to reduce the average call handling time."
      }
      ]
    },
    
    {
      id: 1,
      clientId: "att",
      clientName: "AT&T",
      responsibilities: [
        "Design and architect the applications",
        "Understand business requirements. Propose efficient solutions.",
        "Impact Analysis, Estimation and cost analysis",
        "Implement best practices, design patterns in the code",
        "Develop and unit test applications using C#, .NET framework and web technologies",
        "Integrate business applications",
        "Integrate User Interface, Data Access layer, Webservice",
        "Deploy and configure of web applications on IIS",
        "Peer Review and cross project review the code to ensure quality and scalability",
        "Performance testing using Visual Studio Team System",
        "Team mentoring and technical guidance",
      ],
      technologies: [
        ".NET 2.0, .NET 3.0, C#, ASP.NET, ADO.NET, Web Service, WCF , AJAX, Enterprise Library, C/C++, VC++",
        "SQL server, Oracle, Tandem, Windows 2003 server, IIS 7.0, Tortoise SVN"
      ],
      applications: [{
        name: "ASSET application design & development",
        overview: "ASSET is a productivity improvement tool which uses PROTON framework to integrate and automate multiple business applications. It enhances the productivity by workflow automation and context passing. It also generates a 360-degree view of the application and automates the data analysis."
      },{
        name: "PROTON Framework design & development",
        overview: "PROTON is a framework to integrate and automate the customer care applications. It can be used to build productivity improvement tool which integrates and automates the business application to save the agent’s time. It also extracts the critical data from different LOB applications and analyses them together to present a 360-degree view."
      },{
        name: "ExecuStar application development and maintenance",
        overview: "ExecuStar is a suite of applications which integrates various business application used at different layers of telecom industry. It provides single-sign-on, emulation for mainframe and UNIX based applications. It can also integrate with various windows based and web application providing a seamless experience to users and avoid frequent switching between multiple systems. The project involved the development of the new applications, emulations as well as enhancement and maintenance of existing ones."
      }
      ]
    }
  ]
}