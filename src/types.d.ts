declare type Restaurantes = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  id: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

declare type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
