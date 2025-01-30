export class Restaurant {
  image: string
  restaurantName: string
  rating: number
  description: string
  tags: string[]
  id: number

  constructor(
    image: string,
    restaurantName: string,
    rating: number,
    description: string,
    tags: string[],
    id: number
  ) {
    ;(this.image = image),
      (this.restaurantName = restaurantName),
      (this.rating = rating),
      (this.description = description),
      (this.tags = tags),
      (this.id = id)
  }
}

export class Menu {
  image: string
  menu: string
  description: string
  id: number

  constructor(image: string, menu: string, description: string, id: number) {
    ;(this.image = image),
      (this.menu = menu),
      (this.description = description),
      (this.id = id)
  }
}
