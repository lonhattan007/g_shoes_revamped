import Item from './item.model';

class Shoe extends Item {
  image: string;
  description: string;
  color: string;

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    price: number,
    color: string,
  ) {
    super(id, name, price);
    this.image = image;
    this.description = description;
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
