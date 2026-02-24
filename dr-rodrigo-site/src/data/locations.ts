export interface Location {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  coordinates: {
    x: number;
    y: number;
  };
}

export const locations: Location[] = [
  {
    id: 'sao-paulo',
    city: 'São Paulo',
    neighborhood: 'Jardins',
    address: 'Rua Augusta, 2150 - Conjunto 83',
    coordinates: { x: 50, y: 45 }
  },
  {
    id: 'campinas',
    city: 'Campinas',
    neighborhood: 'Cambuí',
    address: 'Av. Norte-Sul, 789 - Sala 102',
    coordinates: { x: 48, y: 55 }
  },
  {
    id: 'santos',
    city: 'Santos',
    neighborhood: 'Gonzaga',
    address: 'Av. Ana Costa, 456 - 5º andar',
    coordinates: { x: 52, y: 65 }
  }
];
