import { useRef, useState } from 'react';
import './profile.css';

export const Profile = () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password_1 , setPassword_1] = useState(null);
    const [password_2, setPassword_2] = useState(null);
    
    const handleOnChange = (e, type) => {
        const value = e.target.value;
        if (type === 'username') setUsername(value);
        if (type === 'email') setEmail(email);
        if (type === 'password_1') setPassword_1(value);
        if (type === 'password_2') setPassword_2(value);
    };

    // nếu dữ liệu trống thì mặc định là theo giá trị cũ
    const handleClick = e => {

    };

    return (
        <div className="profile_container">
            <div className="avatar_background">
                <div className="background">

                </div>
                <div className="avatar">

                </div>
            </div>
            <div className="information_header">
                Chỉnh sửa thông tin tài khoản
            </div>
            <div className="information">
                <div className="element username">
                    <div className="label">
                        Username
                    </div>
                    <input className="input_information" type="text" onChange={e => handleOnChange(e, 'username')} />
                </div>
                <div className="element email">
                    <div className="label">
                        Email
                    </div>
                    <input className="input_information" type="email" onChange={e => handleOnChange(e, 'email')} />
                </div>
                <div className="element password_1">
                    <div className="label">
                        Password
                    </div>
                    <input className="input_information" type="password" onChange={e => handleOnChange(e, 'password_1')}/>
                </div>
                {
                    password_1 && password_1 !== '' && (
                        <div className="element password_2">
                            <div className="label">
                                Confirm password
                            </div>
                            <input className="input_information" type="password" onChange={e => handleOnChange(e, 'password_2')}/>
                        </div>
                    )
                }
                <div className="btn_update">
                    <button type="button" onClick={handleClick}>Update</button>
                </div>
            </div>
        </div>
    );
};