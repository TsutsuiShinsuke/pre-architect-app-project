import React, { useEffect, useState, Fragment } from 'react';

const Home = () => {

	// わざわざ外側でLoadDataって別関数として定義してるのは、UseEffect内以外からも呼び出したいからだよ～
	useEffect(() => {
		//LoadData();
	}, []);

	return (
		<div>
            <h1>
                aho
            </h1>
        </div>
	);
};

export default Home;