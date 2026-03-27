export interface Location {
  id: string
  city: string
  neighborhood: string
  address: string
  hours: string
  stateCode: string  // código do estado para destacar no mapa
  coordinates: [number, number]  // [longitude, latitude] do centro do estado
}

export const locations: Location[] = [
  {
    id: 'manaus',
    city: 'Manaus',
    neighborhood: 'Adrianópolis',
    address: 'Av. Mário Ypiranga, 3400 - Sala 501',
    hours: 'Seg-Sex: 8h às 18h',
    stateCode: 'AM',          // Amazonas — região Norte
    coordinates: [-60.02, -3.1]
  },
  {
    id: 'recife',
    city: 'Recife',
    neighborhood: 'Boa Viagem',
    address: 'Av. Boa Viagem, 1616 - Conjunto 82',
    hours: 'Seg-Sex: 8h às 18h',
    stateCode: 'PE',          // Pernambuco — região Nordeste
    coordinates: [-35.0, -8.1]
  },
  {
    id: 'sao-paulo',
    city: 'São Paulo',
    neighborhood: 'Jardins',
    address: 'Rua Augusta, 2150 - Conjunto 83',
    hours: 'Seg-Sex: 8h às 18h',
    stateCode: 'SP',          // São Paulo — região Sudeste
    coordinates: [-46.63, -23.55]
  }
]
