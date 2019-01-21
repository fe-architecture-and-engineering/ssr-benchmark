import { data } from '../data';

export default async context => {
  context.body = `<div>
    <table>
    <tbody>
      <tr>
        <th>UUID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Age</th>
      </tr>
      ${ data.map( item => {
        return `<tr>
          <td>${ item.uuid }</td>
          <td>${ item.name }</td>
          <td>${ item.address }</td>
          <td>${ item.age }</td>
        </tr>`
        }).join('')}
    </tbody>
    </table>
    </div>
    `
}