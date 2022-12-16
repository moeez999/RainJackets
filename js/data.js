let data = [
  {
    productimg: "./images/22.png",
    productname: "Red Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "99",
    description: "  ",
    id: "p1",
  },
  {
    productimg: "./images/RainyDays_Jacket1 2.png",
    productname: "Orange Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "199",
    description: "  ",
    id: "p2",
  },

  {
    productimg: "./images/RainyDays_Jacket6 1.png",
    productname: "Grey Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "399",
    description: "  ",
    id: "p3",
  },
  {
    productimg: "./images/RainyDays_Jacket2 1.png",
    productname: "Silver Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "499",
    description: "  ",
    id: "p4",
  },
  {
    productimg: "./images/RainyDays_Jacket5 1.png",
    productname: "Gray Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "599",
    description: "  ",
    id: "p5",
  },
  {
    productimg: "./images/RainyDays_Jacket4 2.png",
    productname: "White Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "699",
    description: "  ",
    id: "p6",
  },
  {
    productimg: "./images/RainyDays_Jacket7 1.png",
    productname: "Brown Wind Jacket",
    productdescription: "Recycled Materia",
    productprice: "799",
    description: "  ",
    id: "p7",
  },
];

function showData() {
  return data;
}

let getProductById = (id) => {
  let item = data.filter((s) => s.id == id);
  return item[0];
};
