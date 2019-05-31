import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/*  로그 미들웨어를 만들 때 커스터마이징 할 수 있습니다.
    https://github.com/evgenyrodionov/redux-logger#options
 */

const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, ReduxThunk))

export default store;