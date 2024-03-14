import Item from './item.model';

class Shoe implements Item {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  color: string;

  constructor(
    id: number,
    imageUrl: string,
    name: string,
    description: string,
    price: number,
    color: string,
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.color = color;
  }

  static fromJson(props: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    color: string;
  }): Shoe {
    return new Shoe(props.id, props.image, props.name, props.description, props.price, props.color);
  }
}

export default Shoe;
