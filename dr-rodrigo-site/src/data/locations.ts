export interface Location {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  phone: string;
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
    phone: '+55 11 98765-4321',
    coordinates: { x: 50, y: 45 }
  },
  {
    id: 'campinas',
    city: 'Campinas',
    neighborhood: 'Cambuí',
    address: 'Av. Norte-Sul, 789 - Sala 102',
    phone: '+55 19 99876-5432',
    coordinates: { x: 48, y: 55 }
  },
  {
    id: 'santos',
    city: 'Santos',
    neighborhood: 'Gonzaga',
    address: 'Av. Ana Costa, 456 - 5º andar',
    phone: '+55 13 99765-4321',
    coordinates: { x: 52, y: 65 }
  }
];
