import initModel from './Model'
import update from './Update'
import app from './App'
import view from './View'

const node = document.querySelector('#app');

app(initModel,update,view,node);