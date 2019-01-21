import * as Pug from 'pug';
import { data } from '../data';

const fn = Pug.compile(`div
  table
    tbody
      tr
        th UUID
        th Name
        th Address
        th Age
      each item in data
        tr
          td= item.uuid
          td= item.name
          td= item.address
          td= item.age`);

export default async context => {
  context.body = fn({
    data
  });
}