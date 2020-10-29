import React, { useState } from 'react'

export const Counter = () => {
    const [value, setValue] = useState(0); // 배열 비구조화 할당
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}
