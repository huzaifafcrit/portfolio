export const USER_DATA = {
    About: {
        name: 'Huzaifa Anjum',
        occupation: 'FULL STACK DEVELOPER & DYNAMICS 365 CUSTOMIZER',
        details: [
            {
                title: 'Age',
                value: 23
            },
            {
                title: 'Address',
                value: 'Mumbai Suburban district, Maharashtra, India.'
            },
            {
                title: 'Email',
                value: 'huzaifafcrit@gmail.com'
            },
            {
                title: 'Phone',
                value: '+91 8879539141'
            }
        ]
    },
    interests: {
        title: 'Interests',
        value: [
            {
                name: 'Music',
                icon: 'headset',
                color: 'royalblue'
            },
            {
                name: 'Gaming',
                icon: 'games',
                color: 'crimson'
            },
            {
                name: 'Reading',
                icon: 'book',
                color: 'goldenrod'
            },
            {
                name: 'Sports',
                icon: 'sports_soccer',
                color: 'forestgreen'
            },
            {
                name: 'Travel',
                icon: 'flight_takeoff',
                color: 'purple'
            },
            {
                name: 'Photography',
                icon: 'photo_camera',
                color: 'grey'
            }
        ]
    }
};


export const TIMELINE_DATA = [
    {
        id: 1,
        duration: '2019 - Present' ,
        title: 'Full Satck Developer & Dynamics 365 Customizer at Willis Towers Watson' ,
        description: 'Developing and delivering production ready, enterprise grade applications which helps the organization in reducing effort, perform effeciently and save time & money. Continuosly adding new and valuable featuers and functionality to the application in each sprint. Monitoring and improving the performance of application. Also working as a D365 CRM Customizer.',
        footer : {
            licon: 'fa-building',
            lname: '1 year 1 month',
            lvalue: '',
            ricon: 'fa-certificate',
            rname: 'Certificates : ',
            rvalue: '13'
        },
        link: {
            name : 'LinkedIn',
            displayName: 'Link to LinkedIn Profile',
            value: 'https:\/\/in.linkedin.com\/in\/huzaifa-anjum-90b117133?trk=public_profile_browsemap_mini-profile_title'
        }
    },
    {
        id: 2,
        duration: '2019' ,
        title: 'Internship at Reliance Industries, developed a MEAN stack application',
        description: 'Developed a Full Stack Application which helps project managers to manage employees and projects. The application was developed using 3-tier architecture where Angular, html, css, bootstrap4 were used for front-end. Express Server and NodeJS for the middleware api and MongoDb as the database. Authentication was provided using JWT (Json Web Token). The application was made responsive in design. The application consisted of following components: home, login, register, dashboard, employee, project, report. The application was also checked on android by using an app which took URL generated by NgRok as input and loaded the application as a web View inside the app on android smartphone.',
        footer : {
            licon: 'fa-tools',
            lname: 'Projects : ',
            lvalue: '01',
            ricon: 'fa-certificate',
            rname: 'Certificates : ',
            rvalue: '01'
        },
        link: {
            name : 'Github',
            displayName: 'Link to Github Repository',
            value: 'https:\/\/github.com\/huzaifaanjum\/ProjectManagementSystem.git'
        }
    },
    {
        id: 3,
        duration: '2015 - 2019' ,
        title: 'Bachelor of Engineering - BE, Information Technology from Mumbai University',
        description: 'Graduated with a CGPA of 8.96 in Bachelor of Engineering - BE, Information Technology from Mumbai University. During the graduation period I got to work on several Projects and Mini-Projects, organized a fest, attended and conducted technical workshops for CSI and won several football tournaments.',
        footer : {
            licon: 'fa-tools',
            lname: 'Projects : ',
            lvalue: '04',
            ricon: 'fa-certificate',
            rname: 'Certificates : ',
            rvalue: '06'
        }
    },
    {
        id: 4,
        duration: '2015',
        title: 'Higher Secondary Education from Central Board of Secondary Education (CBSE)',
        description: 'Completed Higher Secondary Education from Central Board of Secondary Education (CBSE). Explored various subjects available in the field of science such as Physics, Chemistry, Mathematics and Computers. Learned to code in C and C++.',
        footer : null
    }
];

export const CAROUSEL_IMAGES_DETAILS = [
    {
        id: 1,
        title: 'Angular Cli',
        category: 'mfst',
        src: '../../../../assets/img/certificate/AngularCertificate/Angular - Angular CLI course completion certificate-1.png'
    },
    {
        id: 5,
        title: 'Azure Fundamentals',
        category: 'pluralsight',
        src: '../../../../assets/img/certificate/mfst/Azure Fundamentals Certificate-1.jpg'
    },
    {
        id: 2,
        title: 'Angular forms',
        category: 'pluralsight',
        src: '../../../../assets/img/certificate/AngularCertificate/Angular - Angular Forms course completion certificate-1.png'
    },
    {
        id: 3,
        title: 'Angular Getting Started',
        category: 'pluralsight',
        src: '../../../../assets/img/certificate/AngularCertificate/Angular - Getting Started course completion certificate-1.png'
    },
    {
        id: 6,
        title: 'dotnet core 3.1',
        category: 'udemy',
        src: '../../../../assets/img/certificate/general/dotnet_core3.1_certificate.jpg'
    },
    {
        id: 4,
        title: 'Angular Big Picture',
        category: 'pluralsight',
        src: '../../../../assets/img/certificate/AngularCertificate/Angular - The Big Picture course completion certificate-1.png'
    }
];



export const PROJECTS = [
    {
        id: 1,
        title : 'Portfolio',
        imgSrc : '../../../../assets/img/projects/portfolio.png',
        year: '2020',
        shortDescription : 'Personal Portfolio',
        technologies: ['Angular', 'TypeScript', 'Firebase', 'Azure DevOps', 'Angular Material', 'Bootstrap', 'Html 5', 'Css 3', 'Scss'],
        description : 'Developed and hosted my own portfolio site. This was a personal project which speaks volumes about my journey as a web application developer and a person. It was a fun and thrilling ride working on this website. The site in manyways demonstrates my creativity in terms of UI/UX. The site is optimized for delivering a great overall user experience. The site can be viewed on devices of all shapes, sizes and resolutions thanks to bootstrap, css3 and media queries. The site is easily maintainable thanks to Angular and Firebase. CI/CD through Azure DevOps has eased the deployment task. Use of Google Tag Manager and Google Analytics for monitoring site traffic has played a crucial part in understanding the behavior of users visiting the site.'
    },
    {
        id: 2,
        title : 'Dynamics CRM',
        class: 'my-4',
        imgSrc : '../../../../assets/img/projects/crm.png',
        year: '2020',
        shortDescription : 'CRM System',
        technologies: ['Not Applicable'],
        description : 'Have a short experience as a Dynamic CRM customizer. Creating/Editing forms, creating buisness rules and process flows and automated workflows, creating cascaded dropdowns, editing system setting, creating dashboards, fullfilling requirements using javascript which are not available out of box. Creating and editing new security roles.'
    },
    {
        id: 3,
        title : 'EMS',
        imgSrc : '../../../../assets/img/projects/ems.png',
        year: '2019',
        shortDescription : 'Expense Management System',
        technologies: ['Asp.net Webforms', 'ADO.Net', 'MsSqlServer', 'C#', 'Html5', 'Css3', 'Bootstrap 4'],
        description : 'Developed a web application for managing expenses of employees travelling abroad for work. The site was developed to facilitate the reimbursement process. The application was developed in a team of two, in the time period of a one week. The employees could select the time period of their travel and add expenses for each day along with the scanned images of bills. After uploading the details a requests was raised to the manager for approval. Once approved by the line manager, an auto generated mail was sent to the finance team requesting for reimbursement for the employee with the expense details. If the request was not approved a mail was generated to the employee providing the reason (provided by manager) and suggested changes. THe employee can then edit the expense information accordingly and submit for around approval. The dashboard provided several statistical information such as request status, expenditure areas, payment done using and more.'
    },
    {
        id: 4,
        title : 'RilPMS',
        imgSrc : '../../../../assets/img/projects/rilpms.png',
        year: '2019',
        shortDescription : 'Project Management System',
        technologies: ['Angular', 'Express', 'Node.js', 'MongoDB', 'JWT', 'GitLab', 'Bootstrap 4', 'Html 5', 'Css 3', 'NgRok'],
        description : 'Developed a Full Stack Application which helps project managers to manage employees and projects. The application was developed using 3-tier architecture where Angular, html, css, bootstrap4 were used for front-end. Express Server and NodeJS for the middleware api and MongoDb as the database. Authentication was performed by use of JWT (Json Web Token). The application was made responsive in design. The application consisted of following components: home, login, register, dashboard, employee, project, report. The application was also checked on android by using an app which took URL generated by NgRok as input and loaded the application as a web View inside the app on android smartphone.'
    },
    {
        id: 5,
        title : 'BuyIt',
        imgSrc : '../../../../assets/img/projects/buyit.png',
        year: '2018',
        shortDescription : 'E-Commerce Web Application',
        technologies: ['Php', 'Ajax', 'JavaScript', 'Xampp', '000webhost', 'My Sql', 'Bootstrap 4', 'Html 5', 'Css 3'],
        description : 'Developed a shopping web application for selling clothes. This was a mini project on which I worked on during my graduation in B.E IT. The application had the following sections: Products (Men, Women), Wishlist, Cart and orders. Php Mailer was used for email verification. The application was developed so that it could be viewed on various devices of different shapes, sizes and resolutions. The site was hosted on 000webhost.com. Google maps was embeded into the site as a mashup. SEO were done for better reach. And Google analytics for monitoring traffic.'
    },
    {
        id: 6,
        title : 'College Site',
        imgSrc : '../../../../assets/img/projects/college.png',
        year: '2018',
        shortDescription : 'College Site',
        technologies: ['Php', 'Ajax', 'JavaScript', 'Xampp', 'My Sql', 'Html 5', 'Css 3'],
        description : 'Contributed towards development of college website. Created forms to record data. Added styling to the webpages.'
    },
];
