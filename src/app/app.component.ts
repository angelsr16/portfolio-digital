import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

const TODOS: number = 0;
const DESTACADOS: number = 1;
const SISTEMAS: number = 2;
const SITIO_WEB: number = 3;
const E_COMMERCE: number = 4;

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
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
      title: 'Lotería Mexicana',
      description:
        'Proyecto full-stack (Next.js + Node/Express) que permite jugar Lotería mexicana en línea mediante WebSockets. Los usuarios pueden crear salas privadas, unirse mediante código, ver a otros jugadores conectados y su estado, y jugar en tiempo real con emisión de cartas desde el servidor. El frontend está desplegado en Vercel y el backend en una instancia EC2 con Nginx.',
      paragraphs: [
        // 'El juego permite a los usuarios crear salas y compartir un código único para que otros jugadores se unan, visualizar los nombres de los participantes y prepararse para la partida. Una vez que todos los jugadores se marcan como “listos”, el servidor inicia la partida, emitiendo las cartas de manera sincronizada.',
        // 'Los jugadores van marcando sus cartas a medida que aparecen, y cuando un jugador logra Lotería, puede reclamarla mediante un botón. El servidor valida la jugada y proclama al ganador, asegurando una experiencia de juego justa y en tiempo real.',
        // 'El proyecto destaca por su interactividad multijugador, sincronización precisa de eventos y recreación digital de un juego tradicional mexicano. Fue desplegado profesionalmente, con el backend en una instancia EC2 de AWS y la aplicación Next.js en Vercel, demostrando habilidades en desarrollo full stack y despliegue en la nube.',
      ],
      images: [
        'images/projects/loteria/03.png',
        'images/projects/loteria/01.png',
        'images/projects/loteria/02.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'nextjs', title: 'NextJS' },
        { icon: 'tailwindcss', title: 'TailwindCSS' },
        { icon: 'nodejs', title: 'NodeJS' },
        { icon: 'express', title: 'Express' },
        { icon: 'aws', title: 'AWS' },
        { icon: 'vercel', title: 'Vercel' },
      ],
      githubLink: 'https://github.com/angelsr16/loteria',
      categories: [DESTACADOS],
    },
    {
      title: 'Control de Suscripciones',
      description:
        'Proyecto full stack desarrollado con Next.js en el frontend y Node.js + MongoDB en el backend, diseñado para administrar y recordar suscripciones de manera segura y automatizada. Los usuarios pueden registrar sus suscripciones con detalles como precio, frecuencia y método de pago, y reciben recordatorios automáticos por correo electrónico antes de la fecha de renovación.',
      paragraphs: [
        'El sistema implementa autenticación mediante JWT (JSON Web Tokens) para garantizar sesiones seguras y confiables, además de un proceso de registro validado por códigos OTP gestionados con Redis (Upstash).',
        'Los usuarios pueden registrar sus suscripciones con detalles como precio, frecuencia y método de pago, y reciben recordatorios automáticos por correo electrónico antes de la fecha de renovación. El sistema destaca por su automatización de notificaciones, seguridad en la autenticación, gestión eficiente de datos y experiencia de usuario intuitiva.',
        'El proyecto fue desplegado profesionalmente, con el frontend alojado en Vercel y el backend en una instancia EC2 de AWS. Además, integra varios servicios de AWS para garantizar escalabilidad y disponibilidad, incluyendo AWS SQS para la gestión de colas de envío de correos, y AWS EventBridge junto con una Lambda en Python para ejecutar diariamente los procesos de recordatorio.',
      ],
      images: [
        'images/projects/substracker/01.png',
        'images/projects/substracker/02.png',
        'images/projects/substracker/03.png',
        'images/projects/substracker/04.png',
      ],
      currentImageIndex: 0,
      techList: [
        {
          icon: 'nextjs',
          title: 'NextJS',
        },
        { icon: 'tailwindcss', title: 'Tailwind' },
        {
          icon: 'nodejs',
          title: 'NodeJS',
        },
        {
          icon: 'express',
          title: 'Express',
        },
        {
          icon: 'mongodb',
          title: 'MongoDB',
        },
        {
          icon: 'redis',
          title: 'Redis',
        },
        {
          icon: 'aws',
          title: 'AWS',
        },
        {
          icon: 'vercel',
          title: 'Vercel',
        },
      ],
      githubLink: 'https://github.com/angelsr16/subscription-tracker',
      categories: [DESTACADOS],
    },
    {
      title: 'Conecta 4 Online',
      description:
        'Desarrollo full stack con FastAPI, Angular y MongoDB que permite jugar de forma local u online mediante la creación de partidas privadas con código de acceso. Implementa sistema de puntuación ELO y un leaderboard dinámico con el top 10 de jugadores, ofreciendo una experiencia competitiva y en tiempo real.',
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
        {
          icon: 'tailwind',
          title: 'TailwindCSS',
        },
        { icon: 'mongodb', title: 'MongoDB' },
        { icon: 'python', title: 'Python' },
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

  prevImage(project: Project) {
    project.currentImageIndex =
      (project.currentImageIndex - 1 + project.images.length) %
      project.images.length;
  }

  nextImage(project: Project) {
    project.currentImageIndex =
      (project.currentImageIndex + 1) % project.images.length;
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
