import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>?</h2>
            <button onClick={()=> {
                history.push('/about/javascript')
            }}> ?????? ???? ?? </button>
        </div>
    );
};

export default Home;
