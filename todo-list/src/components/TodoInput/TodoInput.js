import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/* input과 버튼이 함께 있는 컴포넌트 입니다.
 * val;ue: input 값
 * onChnage : input 변경 이벤트
 * onInsert 추가 버튼 클릭 이벤트
 */

 const TodoInput = ({value, onChange, onInsert}) => {

    // Enter 키가 눌리면 on Instert를 실행합니다.
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
 };

 export default TodoInput;