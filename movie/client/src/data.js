import { generate as id } from "shortid";

const films = [
  {
    _id: "123",
    title: "Legend of the Seeker",
    director: "Stephen Tolkin",
    duration: 93,
    price: 48.3,
    img: "/img/seeker.jpg",
    featured: true,
    description:
      "After the mysterious murder of his father, a son's search for answers begins a momentous fight against tyranny.",
  },
  {
    _id: id(),
    title: "Gnomebook",
    director: "Murray Fahey",
    duration: 88,
    price: 31.2,
    img: "/img/gnomebook.jpg",
    featured: true,
    description:
      "A colourful array of characters compete at the Annual Australian Garden Gnome Convention. Once a year 2000 garden gnomes and 10,000 gnome carers gather in the sleepy mountain hamlet of Glenbrook, for the annual Gnome convention; the gnomes arrive by road, train, plane, foot and post",
  },
  {
    _id: id(),
    title: "Rise of the Legend",
    director: "Teng Bee",
    duration: 110,
    price: 55.2,
    img: "/img/rise.jpg",
    featured: false,
    description:
      "RISE OF THE LEGEND is a story about Lee Chong Wei, who was born in a poor family. He has the talent of playing badminton and went through a lot of difficulties with the spirit of never giving up, finally he becomes a national player.",
  },
];

export const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve(films), 1000));
};
