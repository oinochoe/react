import { handleActions, createAction } from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';

/* redux-pender의 액션 구조는 Flux standard action(https://github.com/acdlite/flux-standard-action)을
   따르기 때문에, createAction으로 액션을 만들 수 있습니다.
   두 번째로 들어가는 파라미터는 Promise를 반환하는 함수여야 합니다.
*/
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
	// 요청이 진행 중인지, 오류가 발생했는지 여부는 더 이상 직접 관리할 필요가 없습니다.
	// penderReducer가 담당합니다.
	data: {
		title:'',
		body:''
	}
}

const reducer = handleActions({
	// 다른 일반 액션들을 관리...
	// pender로도 관리 가능하지만 applyPenders로 많은 penders를 관리할 수 있다.
	...pender({
		
	})
	
}, initialState);

export default applyPenders(reducer, [
	{	
		type: GET_POST, // type이 주어지면 이 type에 접미사를 붙인 액션 핸들러들이 담긴 객체를 만듭니다.
		/* 요청 중일 때와 실패했을 때 추가로 해야할 작업이 있다면
		   이렇게 onPending과 onFailure를 추가하면 됩니다.
		   onPending: (state, action) => state,
		   onFailure: (state, action) => state
		*/
		onSuccess: (state, action) => {
			// 성공 했을 때 해야할 작업이 따로 없으면 이 함수 또한 생략이 가능합니다.
			const { title, body } = action.payload.data;
			return {
				data: {
					title,
					body
				}
			}
		},
		onCancel: (state, action) => {
			return {
				data: {
					title: '취소됨',
					body: '취소됨'
				}
			}
		}
		// 함수를 생략했을 때 기본 값으로는 (state, action) => state를 설정합니다.
		// (state를 그대로 반환한다는 말임..)
	},
	/* 다른 pender 액션들
	 { type: GET_SOMETHING, onSuccess: (state, action) => ...},
	 { type: GET_SOMETHING, onSuccess: (state, action) => ...}
	*/
]);