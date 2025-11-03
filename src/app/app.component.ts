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
    // Substracker
    {
      title: 'Control de Suscripciones',
      description:
        'Proyecto full stack desarrollado con Next.js en el frontend y Node.js + MongoDB en el backend, diseñado para administrar y recordar suscripciones de manera segura y automatizada. Los usuarios pueden registrar sus suscripciones con detalles como precio, frecuencia y método de pago, y reciben recordatorios automáticos por correo electrónico antes de la fecha de renovación.',
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
    // Obras
    {
      title: 'Sistema de Obras Públicas',
      description:
        'Plataforma web destinada a mejorar la transparencia y el acceso a la información pública en el ámbito del gobierno municipal. El sistema permite gestionar y visualizar de forma centralizada todas las obras públicas del municipio, incluyendo datos clave como montos ejecutados, ubicación geográfica, rubros de inversión, fuente de financiamiento, área ejecutora y año de ejecución.',

      images: [
        'images/projects/obras/01.jpg',
        'images/projects/obras/02.jpg',
        'images/projects/obras/03.jpg',
        'images/projects/obras/04.jpg',
        'images/projects/obras/05.jpg',
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
    // Lotería
    {
      title: 'Lotería Mexicana',
      description:
        'Proyecto full-stack (Next.js + Node/Express) que permite jugar Lotería mexicana en línea mediante WebSockets. Los usuarios pueden crear salas privadas, unirse mediante código, ver a otros jugadores conectados y su estado, y jugar en tiempo real con emisión de cartas desde el servidor. El frontend está desplegado en Vercel y el backend en una instancia EC2 con Nginx.',
      images: [
        'images/projects/loteria/03.jpg',
        'images/projects/loteria/01.jpg',
        'images/projects/loteria/02.jpg',
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
    // Connect 4
    {
      title: 'Conecta 4 Online',
      description:
        'Desarrollo full stack con FastAPI, Angular y MongoDB que permite jugar de forma local u online mediante la creación de partidas privadas con código de acceso. Implementa sistema de puntuación ELO y un leaderboard dinámico con el top 10 de jugadores, ofreciendo una experiencia competitiva y en tiempo real.',
      images: [
        'images/projects/connect-4/01.jpg',
        'images/projects/connect-4/02.jpg',
        'images/projects/connect-4/03.jpg',
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

  prevGalleryImage() {
    if (!this.currentProjectGallery) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.currentProjectGallery.images.length) %
      this.currentProjectGallery.images.length;
  }

  nextGalleryImage() {
    if (!this.currentProjectGallery) return;
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.currentProjectGallery.images.length;
  }
}
