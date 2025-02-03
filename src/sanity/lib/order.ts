export const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerFirstName",
      title: "Customer First Name",
      type: "string",
    },
    {
      name: "customerLastName",
      title: "Customer Last Name",
      type: "string",
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "customerPhone",
      title: "Customer Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "locality",
      title: "Locality",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productName", title: "Product Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "imageUrl", title: "Product Image URL", type: "string" }, // Store image URL as string
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
  ],
};
