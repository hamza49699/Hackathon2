
// import { defineQuery } from "next-sanity";

// export const Allproducts =defineQuery(`
// *[_type == "product"] {
//     _id,
//     productName, 
//     description,
//     price,
//     category,
//     inventory,
//     colors,
//     status,
//     image,
//     "imageUrl": image.asset->url
// }` 
   
// )

// export const categories =defineQuery(`
// *[_type == "product"][0..7] {
//     _id,
//     productName, 
//     description,
//     price,
//     category,
//     inventory,
//     colors,
//     status,
//     image,
//     "imageUrl": image.asset->url
// }` 
   
// )

import { defineQuery } from "next-sanity";

export const Allproducts = defineQuery(`
*[_type == "product"] {
    _id,
    productName, 
    description,
    price,
    category,
    inventory,
    colors,
    status,
    image,
    "imageUrl": image.asset->url
}`)

export const categories = defineQuery(`
*[_type == "product"] {
    _id,
    productName, 
    description,
    price,
    category,
    inventory,
    colors,
    status,
    image,
    "imageUrl": image.asset->url
}`) 
