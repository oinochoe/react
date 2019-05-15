/* action을 만들어내는 함수
action 객체를 만드는 액션 생성 함수들을 선언합니다(action creator)..
여기에서 () => ({})은 function() { return { } }와 동일한 의미입니다.
*/

import * as types from './ActionTypes';

// 카운터를 새로 만들 때 기본 색상을 받을 수 있도록 color가 파라미터로 설정..
export const create = (color) => ({
    type: types.CREATE,
    color
});

// 맨 마지막 카운터를 삭제하기 때문에 따로 index값 없음
export const remove = () => ({
    type: types.REMOVE
});

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = (index, color) => ({
    type: types.SET_COLOR,
    index,
    color
});