import vueController from './controllers/vue';
import es6Controller from './controllers/es6';
import pugController from './controllers/pug';

export const AppRoutes = [{
  path: '/vue',
  method: 'get',
  action: vueController
}, {
  path: '/es6',
  method: 'get',
  action: es6Controller
}, {
  path: '/pug',
  method: 'get',
  action: pugController
}];