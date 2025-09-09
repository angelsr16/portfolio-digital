import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

const TODOS: number = 0;
const DESTACADOS: number = 1;
const SISTEMAS: number = 2;
const SITIO_WEB: number = 3;
const E_COMMERCE: number = 4;

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  filterData: any = {
    category: DESTACADOS,
  };

  currentProjectGallery?: Project;
  currentImageIndex: number = 0;

  projectsListToShow: Project[] = [
    {
      title: 'Conecta 4 Online',
      description:
        'Desarrollo full stack con FastAPI, Angular y MongoDB que permite jugar de forma local u online mediante la creación de partidas privadas con código de acceso. Implementa sistema de puntuación ELO y un leaderboard dinámico con el top 10 de jugadores, ofreciendo una experiencia competitiva y en tiempo real.',
      images: [],
      currentImageIndex: 0,
      techList: [
        { icon: 'angular', title: 'Angular' },
        {
          icon: 'tailwind',
          title: 'TailwindCSS',
        },
        { icon: 'mongodb', title: 'MongoDB' },
        { icon: 'fastapi', title: 'FastAPI' },
        { icon: 'docker', title: 'Docker' },
      ],
      githubLink: 'https://github.com/angelsr16/online-connect-4',
      categories: [DESTACADOS],
    },
    {
      title: 'Sistema de Obras Públicas',
      description:
        'Plataforma web destinada a mejorar la transparencia y el acceso a la información pública en el ámbito del gobierno municipal. El sistema permite gestionar y visualizar de forma centralizada todas las obras públicas del municipio, incluyendo datos clave como montos ejecutados, ubicación geográfica, rubros de inversión, fuente de financiamiento, área ejecutora y año de ejecución.',

      images: [
        'images/projects/obras/sistema_obras_01.png',
        'images/projects/obras/sistema_obras_02.png',
        'images/projects/obras/sistema_obras_03.png',
        'images/projects/obras/sistema_obras_04.png',
        'images/projects/obras/sistema_obras_05.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'angular', title: 'Angular' },
        { icon: 'tailwind', title: 'TailwindCSS' },
        { icon: 'firebase', title: 'Firebase' },
      ],
      githubLink: '',
      categories: [DESTACADOS, SISTEMAS],
    },
    {
      title: 'Construpacc',
      description:
        'Desarrollé el sitio web informativo de Construpacc, empresa constructora dedicada también a la renta de andamios, maquinaria ligera y venta de materiales para la construcción. El sitio presenta los servicios de forma clara, con una interfaz responsiva creada en Angular y desplegada con Firebase, optimizada para atraer clientes y facilitar el contacto.',
      images: [
        'images/projects/construpacc/01.png',
        'images/projects/construpacc/02.png',
        'images/projects/construpacc/03.png',
        'images/projects/construpacc/04.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'angular', title: 'Angular' },
        { icon: 'firebase', title: 'Firebase' },
        { icon: 'tailwind', title: 'TailwindCSS' },
      ],
      githubLink: '',
      categories: [DESTACADOS, SITIO_WEB],
      websiteLink: 'https://construpacc.com/',
      websiteTitle: 'www.construpacc.com',
    },
    {
      title: 'SOINSA',
      description:
        'Desarrollé el sitio web informativo de Soinsa, empresa especializada en tratamiento de agua y mantenimiento industrial. Implementé una interfaz moderna y responsiva con Angular, y utilicé Firebase para hosting y gestión de contenido. El sitio comunica eficazmente los servicios y permite una navegación clara y profesional.',
      images: [
        'images/projects/soinsa/01.png',
        'images/projects/soinsa/02.png',
        'images/projects/soinsa/03.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'angular', title: 'Angular' },
        { icon: 'firebase', title: 'Firebase' },
        { icon: 'tailwind', title: 'TailwindCSS' },
      ],
      githubLink: '',
      categories: [TODOS, SITIO_WEB],
    },
    // {
    //   title: 'Sistema de reparto de pizzas (En desarrollo)',
    //   description:
    //     'Una plataforma moderna de reparto de pizzas desarrollada con Angular, TailwindCSS, Firebase y componentes independientes. Esta aplicación incluirá autenticación de usuarios, acceso basado en roles (administrador, personal, repartidor), gestión de productos y procesamiento de pedidos.',
    //   images: [
    //     'images/projects/pizza/pizza_01.png',
    //     'images/projects/pizza/pizza_05.png',
    //     'images/projects/pizza/pizza_02.png',
    //     'images/projects/pizza/pizza_03.png',
    //     'images/projects/pizza/pizza_04.png',
    //   ],
    //   currentImageIndex: 0,
    //   techList: [
    //     {
    //       icon: 'angular',
    //       title: 'Angular',
    //     },
    //     {
    //       icon: 'firebase',
    //       title: 'Firebase',
    //     },
    //     {
    //       icon: 'tailwind',
    //       title: 'TailwindCSS',
    //     },
    //   ],
    //   githubLink: 'https://github.com/angelsr16/pizza-delivery-app',
    //   categories: [DESTACADOS, E_COMMERCE],
    // },
    // {
    //   title: 'Finance Tracker (En progreso)',
    //   description:
    //     'Aplicación full-stack para el seguimiento de finanzas personales, diseñada para gestionar el uso de tarjetas de crédito, pagos y compras a plazos. Este proyecto en desarrollo tiene como objetivo proporcionar una visión clara de los gastos mensuales y fomentar una administración financiera responsable, ayudando a evitar cargos por intereses.',
    //   images: [
    //     'images/projects/finance-tracker/finance_01.png',
    //     'images/projects/finance-tracker/finance_02.png',
    //     'images/projects/finance-tracker/finance_03.png',
    //   ],
    //   currentImageIndex: 0,
    //   techList: [
    //     { icon: 'angular', title: 'Angular' },
    //     { icon: 'tailwind', title: 'TailwindCSS' },
    //     { icon: 'python', title: 'Python' },
    //     { icon: 'fastapi', title: 'FastAPI' },
    //     { icon: 'mysql', title: 'MySQL' },
    //   ],
    //   githubLink: 'https://github.com/angelsr16/credit-card-tracker',
    //   categories: [DESTACADOS, SISTEMAS],
    // },
    // {
    //   title: 'Aplicación Web para Registro de Citas de Películas/Series',
    //   description:
    //     'Aplicación web full - stack desarrollada con FastAPI y Angular que permite a los usuarios registrarse, iniciar sesión y compartir frases memorables de películas y series de televisión.',
    //   // subdesc:
    //   //   'La aplicación está desarrollada con Python y FastAPI en el backend, usando JWT para una autenticación segura. El frontend en Angular ofrece una experiencia fluida y dinámica centrada en la publicación e interacción con frases. MongoDB se utiliza como base de datos NoSQL, ideal para manejar estructuras flexibles como citas y datos de usuario.',
    //   images: [
    //     'images/projects/quotes/quote_app_01.png',
    //     'images/projects/quotes/quote_app_02.png',
    //     'images/projects/quotes/quote_app_03.png',
    //   ],
    //   currentImageIndex: 0,
    //   techList: [
    //     { icon: 'python', title: 'Python' },
    //     { icon: 'fastapi', title: 'FastAPI' },
    //     { icon: 'mongodb', title: 'MongoDB' },
    //     { icon: 'angular', title: 'Angular' },
    //     { icon: 'tailwind', title: 'TailwindCSS' },
    //   ],
    //   githubLink: 'https://github.com/angelsr16/simple-quote-app',
    //   categories: [SISTEMAS],
    // },
  ];

  ngOnInit(): void {
    AOS.init();
  }

  displayProjectGallery(project: Project) {
    this.currentProjectGallery = project;
    this.currentImageIndex = 0;
  }

  hideProjectGallery() {
    this.currentProjectGallery = undefined;
    this.currentImageIndex = 0;
  }

  prevImage() {
    if (!this.currentProjectGallery) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.currentProjectGallery.images.length) %
      this.currentProjectGallery.images.length;
  }

  nextImage() {
    if (!this.currentProjectGallery) return;
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.currentProjectGallery.images.length;
  }

  // filterProjects(category: number) {
  //   this.filterData.category = category;
  //   this.projectsListToShow = this.projects.filter((project) => {
  //     if (this.filterData.category === TODOS) return true;
  //     return project.categories.includes(this.filterData.category);
  //   });
  // }

  // handlePreviousImage(project: Project) {
  //   if (project.currentImageIndex - 1 === -1) {
  //     project.currentImageIndex = project.images.length - 1;
  //   } else {
  //     project.currentImageIndex -= 1;
  //   }
  // }

  // handleNextImage(project: Project) {
  //   if (project.currentImageIndex + 1 === project.images.length) {
  //     project.currentImageIndex = 0;
  //   } else {
  //     project.currentImageIndex += 1;
  //   }
  // }
}
