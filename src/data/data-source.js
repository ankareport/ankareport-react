export const dataSource = [
  { label: "Header 1", field: "header1" },
  { label: "Header 2", field: "header2" },
  {
    label: "Content",
    field: "content",
    children: [
      { label: "Name", field: "name" },
      { label: "Surname", field: "surname" },
      {
        label: "Prices",
        field: "prices",
        children: [
          { label: "Id", field: "id" },
          { label: "Price", field: "price" },
        ],
      },
    ],
  },
  { label: "Footer 1", field: "footer1" },
  { label: "Footer 2", field: "footer2" },
];
