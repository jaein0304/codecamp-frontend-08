import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

/* updateProduct(
productId: ID
updateProductInput: UpdateProductInput!
): Return 
number: Int
writer: String
title: String
contents: String */

// export const UPDATE_PRODUCT = gql`
//   mutation updateProduct($productId: ID, $UpdateProductInput:updateProductInput!) {
//     updateProduct(name : $name, detail: $detail, price: $price) {
//       _id
//       number
//       message
//     }
//   }

// `

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: ID
    $updateProductInput: UpdateProductInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
    ) {
      _id
      number
      message
    }
  }
`;
