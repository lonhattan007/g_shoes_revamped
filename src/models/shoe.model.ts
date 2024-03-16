import Item from './item.model';

class Shoe implements Item {
  id: number;
  image: string;
  name: string;
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
    this.image = imageUrl;
    this.description = description;
    this.price = price;
    this.color = color;
  }

  static fromJson(props: ShoeDTO): Shoe {
    return new Shoe(props.id, props.image, props.name, props.description, props.price, props.color);
  }
}

interface ShoeDTO {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

export default Shoe;
