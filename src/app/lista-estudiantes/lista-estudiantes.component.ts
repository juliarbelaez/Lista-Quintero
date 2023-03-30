import { Component } from '@angular/core';

class Estudiante {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public email: string,
    public curso: string,
    public fechainicio: Date
  ) {}
}

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css'],
})
export class ListaEstudiantesComponent {
  ListaEstudiantesComponent: Estudiante[];
  constructor() {
    this.ListaEstudiantesComponent = [
      new Estudiante(
        1,
        'Juan',
        'Pérez',
        17,
        'juan@gmail.com',
        'Inglés A1',
        new Date('2022-04-20')
      ),
      new Estudiante(
        2,
        'María',
        'García',
        16,
        'maria@gmail.com',
        'Inglés A1',
        new Date('2022-08-29')
      ),
      new Estudiante(
        3,
        'Pedro',
        'Ramírez',
        24,
        'pedro@gmail.com',
        'Inglés A2',
        new Date('2021-05-20')
      ),
      new Estudiante(
        4,
        'Luisa',
        'Martínez',
        32,
        'luisa@gmail.com',
        'Inglés B1',
        new Date('2019-07-19')
      ),
      new Estudiante(
        5,
        'Carlos',
        'Rodríguez',
        41,
        'carlos@gmail.com',
        'Inglés C1',
        new Date('2015-04-01')
      ),
      new Estudiante(
        6,
        'Gabriel',
        'Ramirez',
        42,
        'gabriel@gmail.com',
        'Inglés B1',
        new Date('2016-08-22')
      ),
      new Estudiante(
        7,
        'Alejandro',
        'Arcila',
        14,
        'alejandro@gmail.com',
        'Inglés C2',
        new Date('2008-04-17')
      ),
      new Estudiante(
        8,
        'Claudia',
        'Arango',
        16,
        'claudia@gmail.com',
        'Inglés B2',
        new Date('2021-08-01')
      ),
      new Estudiante(
        9,
        'Irma',
        'Ardila',
        25,
        'irma@gmail.com',
        'Inglés A1',
        new Date('2018-05-29')
      ),
      new Estudiante(
        10,
        'Alejandra',
        'Buitrago',
        32,
        'alejandra@gmail.com',
        'Inglés B1',
        new Date('2010-12-29')
      ),
      new Estudiante(
        11,
        'Andrés',
        'Vasquez',
        39,
        'andres@gmail.com',
        'Inglés C1',
        new Date('2017-07-29')
      ),
      new Estudiante(
        12,
        'Juliana',
        'Pérez',
        50,
        'juliana@gmail.com',
        'Inglés A1',
        new Date('2021-07-29')
      ),
      new Estudiante(
        13,
        'María',
        'Quintero',
        19,
        'maria@gmail.com',
        'Inglés A2',
        new Date('2014-06-18')
      ),
      new Estudiante(
        14,
        'Pedro',
        'Arbeláez',
        22,
        'pedro@gmail.com',
        'Inglés C1',
        new Date('2023-01-29')
      ),
      new Estudiante(
        15,
        'Nancy',
        'Martínez',
        32,
        'nancy@gmail.com',
        'Francés A1',
        new Date('2019-12-12')
      ),
      new Estudiante(
        16,
        'Dairo',
        'Ramirez',
        45,
        'dairo@gmail.com',
        'Inglés C1',
        new Date('2021-11-11')
      ),
      new Estudiante(
        17,
        'Angela',
        'Ruiz',
        41,
        'angela@gmail.com',
        'Inglés A1',
        new Date('2011-11-11')
      ),
      new Estudiante(
        18,
        'Adriana',
        'Monteria',
        18,
        'adriana@gmail.com',
        'Francés A2',
        new Date('2020-08-22')
      ),
      new Estudiante(
        19,
        'Gilberto',
        'Zapata',
        19,
        'gilberto@gmail.com',
        'Inglés B2',
        new Date('2020-01-21')
      ),
      new Estudiante(
        20,
        'Yeison',
        'Hernandez',
        20,
        'yeison@gmail.com',
        'Francés B1',
        new Date('2018-03-21')
      ),
      new Estudiante(
        21,
        'Samanta',
        'Vargas',
        21,
        'samanta@gmail.com',
        'Inglés C1',
        new Date('2023-03-21')
      ),
      new Estudiante(
        22,
        'Sara',
        'Botero',
        29,
        'sara@gmail.com',
        'Inglés B1',
        new Date('2021-03-29')
      ),
      new Estudiante(
        23,
        'Leidy',
        'Petro',
        38,
        'leidy@gmail.com',
        'Inglés A2',
        new Date('2018-03-21')
      ),
      new Estudiante(
        24,
        'Monica',
        'Urrego',
        32,
        'monica@gmail.com',
        'Inglés B1',
        new Date('2019-07-07')
      ),
      new Estudiante(
        25,
        'Diana',
        'Cardenas',
        42,
        'diana@gmail.com',
        'Francés A1',
        new Date('2019-08-29')
      ),
      new Estudiante(
        26,
        'David',
        'Casablanca',
        18,
        'david@gmail.com',
        'Francés A2',
        new Date('2017-12-20')
      ),
      new Estudiante(
        27,
        'Jose',
        'Sandander',
        14,
        'jose@gmail.com',
        'Francés B1',
        new Date('2019-05-20')
      ),
      new Estudiante(
        28,
        'Carla',
        'Medellin',
        15,
        'carla@gmail.com',
        'Inglés A2',
        new Date('2019-04-25')
      ),
      new Estudiante(
        29,
        'Carlos',
        'Ruiz',
        25,
        'carlos@gmail.com',
        'Inglés B2',
        new Date('2018-02-27')
      ),
      new Estudiante(
        29,
        'Susana',
        'Zuluaga',
        34,
        'susana@gmail.com',
        'Francés A1',
        new Date('2018-09-15')
      ),
    ];
  }
}
