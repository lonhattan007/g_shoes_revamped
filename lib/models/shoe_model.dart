class Shoe {
  final int id;
  final String name;
  final String imageUrl;
  final String description;
  final double price;
  final String color;

  Shoe(this.id, this.name, this.imageUrl, this.description, this.price,
      this.color);

  Shoe.fromJson(Map<String, dynamic> json)
      : id = json['id'] as int,
        name = json['name'] as String,
        imageUrl = json['image'] as String,
        description = json['description'] as String,
        price = json['price'] as double,
        color = json['color'] as String;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'image': imageUrl,
        'description': description,
        'price': price,
        'color': color
      };

  @override
  String toString() {
    return """
      Shoe ID: $id
      name: $name
      description: $description
      price: $price
      ---------------------------
    """;
  }
}

