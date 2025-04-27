import React, { useEffect, useState, Fragment } from 'react';
import Link from 'next/link';

const Top = () => {

	// わざわざ外側でLoadDataって別関数として定義してるのは、UseEffect内以外からも呼び出したいからだよ～
	useEffect(() => {
		//LoadData();
	}, []);

	return (
		<div>
            <h1>
                もうパチンコしない　2024/11／24
				今日から開発再開　2025/04/05
				再開発　2025/04/27
            </h1>
			<Link href="/login">
        ここ
      </Link>
        </div>
	);
};

export default Top;