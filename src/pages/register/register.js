import './register.css';

export const Register = () => {
  
    return (
        <div className="register">
            <div className="register_label">Register</div>
            <div className="form_register">
                <div className="main_form">
                    <form>
                        <label for="email">Email</label>
                        <br/>
                        <input id="email" type="text" placeholder="Enter your email" />
                        <br/>
                        <label for="password_1" >Passoword</label>
                        <br/>
                        <input id="password_1" type="password" placeholder="Enter your password"/>
                        <br/>
                        <label for="password_2">Confirm password</label>
                        <br/>
                        <input id="password_2" type="password" placeholder="Confirm password"/>
                        <br/>
                        <button className="btn_register">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};