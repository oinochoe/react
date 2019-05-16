import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

// 리듀서 함수에서 카운터 추가 및 삭제 구현
function counter(state = initialState, action) {
    // 레퍼런스 생성
    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
                counter: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), // 선택한 인덱스의 전 아이템들
                    {
                        ...counters[action.index], // 기존 객체에
                        number: counters[action.index].number + 1 // 새 number 값 덮어 쓰기
                    },
                    ...counters.slice(action.index + 1, counters.length) // 선택한 인덱스의 다음 아이템들
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number -1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state;
    }
}

export default counter;