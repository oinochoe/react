import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>?</h2>
            <button onClick={()=> {
                history.push('/about/javascript')
            }}> 자바스크릡트 사용하여 이동 </button>
        </div>
    );
};

export default Home;
