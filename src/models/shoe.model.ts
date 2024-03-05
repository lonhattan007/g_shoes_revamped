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

  static fromJson(props: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    color: string;
  }): Shoe {
    return new Shoe(props.id, props.image, props.name, props.description, props.price, props.color);
  }
}

export default Shoe;
