const initialState = {
  products: [
      {
        "id": 1,
        "inventory": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140",
        //styles
        "product_id": 1,
        "results": [
          {
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": 1,
            "photos": [
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              },
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              }
            ]
          }]
      },
      {
        "id": 2,
        "inventory": 4,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": "69",
        "product_id": 2,
        "results": [
          {
            "style_id": 2,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": 1,
            "photos": [
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              },
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              }
            ]
          }]
      },
      {
        "id": 3,
        "inventory": 9,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40",
        "product_id": 3,
        "results": [
          {
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": 1,
            "photos": [
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              },
              {
                "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                "url": "urlplaceholder/style_1_photo_number.jpg"
              }
            ]
          }]
      },
  ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;
