import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Sistema de Obras Públicas',
      description:
        'Plataforma web destinada a mejorar la transparencia y el acceso a la información pública en el ámbito municipal. El sistema permite gestionar y visualizar de forma centralizada todas las obras públicas del municipio, incluyendo datos clave como montos ejecutados, ubicación geográfica, rubros de inversión, fuente de financiamiento, área ejecutora y año de ejecución.',
      subdesc:
        'Uno de los pilares del proyecto fue la consulta ciudadana: la plataforma permite a cualquier persona explorar obras realizadas o en curso mediante mapas interactivos, filtros dinámicos y una interfaz intuitiva. Su diseño promueve la transparencia, el control ciudadano y fortalece el vínculo entre el municipio y la comunidad.',
      images: [
        'images/projects/obras/sistema_obras_01.png',
        'images/projects/obras/sistema_obras_02.png',
        'images/projects/obras/sistema_obras_03.png',
        'images/projects/obras/sistema_obras_04.png',
        'images/projects/obras/sistema_obras_05.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'devicon-angular-plain', title: 'Angular' },
        { icon: 'devicon-tailwindcss-plain', title: 'TailwindCSS' },
        { icon: 'devicon-firebase-plain', title: 'Firebase' },
      ],
      githubLink: '',
    },

    {
      title: 'Aplicación Web para Registro de Citas de Películas/Series',
      description:
        'Aplicación web full - stack desarrollada con FastAPI y Angular que permite a los usuarios registrarse, iniciar sesión y compartir frases memorables de películas y series de televisión.',
      subdesc:
        'La aplicación está desarrollada con Python y FastAPI en el backend, usando JWT para una autenticación segura. El frontend en Angular ofrece una experiencia fluida y dinámica centrada en la publicación e interacción con frases. MongoDB se utiliza como base de datos NoSQL, ideal para manejar estructuras flexibles como citas y datos de usuario.',
      images: [
        'images/projects/quotes/quote_app_01.png',
        'images/projects/quotes/quote_app_02.png',
        'images/projects/quotes/quote_app_03.png',
      ],
      currentImageIndex: 0,
      techList: [
        { icon: 'devicon-python-plain', title: 'Python' },
        { icon: 'devicon-fastapi-plain', title: 'FastAPI' },
        { icon: 'devicon-mongodb-plain', title: 'MongoDB' },
        { icon: 'devicon-angular-plain', title: 'Angular' },
        { icon: 'devicon-tailwind-plain', title: 'TailwindCSS' },
      ],
      githubLink: 'https://github.com/angelsr16/simple-quote-app',
    },
  ];

  ngOnInit(): void {
    AOS.init();
  }

  handlePreviousImage(project: Project) {
    if (project.currentImageIndex - 1 === -1) {
      project.currentImageIndex = project.images.length - 1;
    } else {
      project.currentImageIndex -= 1;
    }
  }

  handleNextImage(project: Project) {
    if (project.currentImageIndex + 1 === project.images.length) {
      project.currentImageIndex = 0;
    } else {
      project.currentImageIndex += 1;
    }
  }
}
