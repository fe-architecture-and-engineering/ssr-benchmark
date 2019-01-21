import Vue from 'vue';
import * as Render from 'vue-server-renderer';
import { data } from '../data';

const renderer = Render.createRenderer();

const app = new Vue({
  data(){
    return {
      list: data
    };
  },
  template: `<div>
  <table>
  <tbody>
    <tr>
      <th>UUID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
    </tr>
    <tr v-for="item in list">
      <td>{{ item.uuid }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.age }}</td>
    </tr>
  </tbody>
  </table>
  </div>`
});


export default async context => {
  renderer.renderToString(app).then(html => {
    context.body = html;
  }).catch(err => {
    console.error(err)
  })
}