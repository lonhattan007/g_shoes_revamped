class Shoe {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    price: number,
    color: string,
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.color = color;
  }
}

export default Shoe;
