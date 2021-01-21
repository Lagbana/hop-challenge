import { reactFormatter } from './table';
import { Variant } from '../generated/graphql';

/**
 * Table Column format and options
*/

export const participantColumns = [
  {
    field: 'picture',
    formatter: reactFormatter(<Image />),
    hozAlign: 'center',
    width: 100,
  },
  { title: 'ID', field: '_id' },
  { title: 'Name', field: 'name', hozAlign: 'left', width: 120 },
  {
    title: 'Email',
    field: 'email',
    formatter: (cell: any) => {
      cell._cell.component._cell.element.style.backgroundColor = '#c4c4c4';
      cell._cell.component._cell.element.style.color = 'black';
      cell._cell.component._cell.element.style.fontWeight = 800;
      const value = cell.getValue();
      return `<span style="color: 'orange';">${value} </span>`;
    },
    width: 200,
  },
  { title: 'Company', field: 'company' },
  { title: 'Balance', field: 'balance' },
  { title: 'Purchases', field: 'purchases' },
];

export const productColumns = [
  { title: 'ProductID', field: 'id', width: 120 },
  {
    title: 'Title',
    field: 'title',
    hozAlign: 'left',
    width: 350,
    formatter: (cell: any) => {
      cell._cell.component._cell.element.style.backgroundColor = '#c4c4c4';
      cell._cell.component._cell.element.style.color = 'black';
      cell._cell.component._cell.element.style.fontWeight = 800;
      const value = cell.getValue();
      return `<span>${value} </span>`;
    },
  },
  { title: 'Vendor', field: 'vendor' },
  {
    title: 'Product Type',
    field: 'product_type',
    hozAlign: 'left',
  },
  {
    title: 'Tags',
    field: 'tags',
    width: 150,
    hozAlign: 'left',
    sorter: (a: string[], b: string[]) =>
      a.toString().localeCompare(b.toString()),
  },
  {
    title: 'Weight',
    field: 'variants',
    formatter: (a: any) => `${a._cell.row.data.variants[0].grams} g`,
    sorter: (a: Variant[], b: Variant[]) => b[0].grams - a[0].grams,
  },
  {
    title: 'Price',
    field: 'variants',
    formatter: (a: any) => `$ ${a._cell.row.data.variants[0].price}`,
    sorter: (a: Variant[], b: Variant[]) =>
      Number(b[0].price) - Number(a[0].price),
  },
];

export const allProductsColumns = [
  { title: 'ProductID', field: 'id' },
  { title: 'Title', field: 'title', hozAlign: 'left', width: 150 },
  { title: 'Vendor', field: 'vendor' },
  { title: 'Product Type', field: 'product_type', hozAlign: 'left' },
  {
    title: 'Tags',
    field: 'tags',
    hozAlign: 'left',
    sorter: (a: string[], b: string[]) =>
      a.toString().localeCompare(b.toString()),
  },
  {
    title: 'Weight',
    field: 'variants',
    formatter: (a: any) => `${a._cell.row.data.variants[0].grams} g`,
    sorter: (a: Variant[], b: Variant[]) => b[0].grams - a[0].grams,
  },
  {
    title: 'Price',
    field: 'variants',
    formatter: (a: any) => `$ ${a._cell.row.data.variants[0].price}`,
    sorter: (a: Variant[], b: Variant[]) =>
      Number(b[0].price) - Number(a[0].price),
  },
];

export const allParticipantscolumns = [
  { title: 'ID', field: '_id' },
  { title: 'Name', field: 'name', hozAlign: 'left', width: 150 },
  { title: 'Email', field: 'email' },
  { title: 'Company', field: 'company', hozAlign: 'left' },
  {
    title: 'Balance',
    field: 'balance',
    hozAlign: 'left',
  },
  {
    title: 'Purchases',
    field: 'purchases',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
];

function Image(props: any) {
  const rowData = props.cell._cell.row.data;
  const src = rowData.picture;
  const alt = `Event attendee`;
  return <img src={src} alt={alt} />;
}
export const tableOptions = {
  pagination: 'local',
  paginationSize: 11,
  resizableRows: true,
  responsiveLayout: 'hide',
  
};