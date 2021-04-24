export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-ready microservices",
      author: "Susan Fowler",
      price: 32,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Release it ",
      author: "Michael t. nygard ",
      price: 45,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "The Minds of Billy Milligan ",
      author: "Daniel Keyes",
      price: 23,
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360229756i/1391817._UY461_SS461_.jpg",
    },
    {
      id: 4,
      title: "Atlas Shrugged ",
      author: "Ayn Rand",
      price: 56,
      coverImage:
        "http://blogs-images.forbes.com/meghancasserly/files/2011/04/Atlas-Shrugged-Movie-Poster_e.jpg",
    },
    {
      id: 5,
      title: "Where Rainbows End",
      author: "Cecelia Ahern",
      price: 23,
      coverImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/CeceliaAhern_WhereRainbowsEnd.jpg/220px-CeceliaAhern_WhereRainbowsEnd.jpg",
    },
    {
      id: 6,
      title: "Forrest Gump",
      author: "Winston Groom",
      price: 28,
      coverImage:
        "https://www.britishbook.ua/upload/iblock/d22/kniga_forrest_gump.png",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.99) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
