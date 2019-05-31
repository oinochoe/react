import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';

// 미들웨어가 여러 개일 때는 파라미터로 전달하면 됩니다. 예 : applyMiddleware(a,b,c)
// 미들웨어 순서는 여기에서 전달한 파라미터 순서대로 지정합니다.
const store = createStore(modules, applyMiddleware(loggerMiddleware))

export default store;