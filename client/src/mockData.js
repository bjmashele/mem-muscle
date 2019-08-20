import geography from './assets/geography.png';
import music from './assets/music.jpeg';

export const data = {
  decks: [
    {
      id: 1,
      name: 'Geography',
      img: geography,
    },
    {
      id: 2,
      name: 'Music',
      img: music,
    },
  ],
  cards: [
    {
      id: 1,
      front: 'Name a city that is in two continents',
      back: 'Istanbul',
      projectId: 1,
    },
    {
      id: 2,
      front: "Which group had a hit song titled 'Fields of Gold'",
      back: 'Sting',
      projectId: 2,
    },
    {
      id: 3,
      front: 'Which country has the highest biodiversity ',
      back: 'Madagasca',

      projectId: 1,
    },
  ],
};
