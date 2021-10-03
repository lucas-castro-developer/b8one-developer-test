import imageExample1 from "./assets/images/image-for-test.png";
import imageExample2 from "./assets/images/image-for-test.png";

export const ProductList = [
  {
    productId: 1,
    imageSrc: imageExample1,
    productName:
      "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    productPrice: {
      listPrice: 2813.99,
      sellingPrice: 2599.0,
    },
    productInstallments: {
      numberOfInstallments: 10,
      installmentsPrice: 259.9,
    },
    wishList: false,
    addedToCart: false,
  },
  {
    productId: 2,
    imageSrc: imageExample2,
    productName:
      "Monitor LED 40'' Gamer Curvo Samsung 2560 x 1280 FHD 240 Hz HDMI, DP, Gsync Série CRG55",
    productPrice: {
      listPrice: 3257.99,
      sellingPrice: 2996.85,
    },
    productInstallments: {
      numberOfInstallments: 8,
      installmentsPrice: 374.61,
    },
    wishList: false,
    addedToCart: false,
  },
];
