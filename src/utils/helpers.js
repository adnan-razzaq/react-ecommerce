/// Featured products

export const featuredProducts = (products) => {
  return products.filter((product) => product.featured === true);
};

//Flatten products for image fix

export const flattenProducts = (data) => {
  return data.map((item) => {
    let data = item.image;
    let img = data.map((item) => item.url);
    //local image fix
    let image = `http://localhost:1337${img}`;

    return { ...item, image };
  });
};
