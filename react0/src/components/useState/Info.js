import React, { useState } from 'react'

export const Info = () => {
    const [name, setname] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setname(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};
