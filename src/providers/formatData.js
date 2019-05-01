import image from "../assets/no-photo.png";

export const formatProducts = products => {
  return products.map(product => {
    product["image"] = image;
    product["category"] = "Technology";
    product["dimensions"] = "3.5mm";
    product["brand"] = "Logitech";
    product["stock"] = true;
    return product;
  });
};
