import React, { Component } from'react';
import getAjaxResult from'./getAjaxResult';

class Login extends Component {
    state = {
        login_username: null,
        login_password: null
    };

    handleChange = (e) => {
        //console.log(e.target);
        //console.log(e.target.value)
        this.setState ({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        
        let userName = '';
        let pass = '';
        for(let s in this.state) {
            if(s.includes('password'))
                pass = this.state[s];

            if(s.includes('username'))
                userName = this.state[s];
        }

        console.log('In Login:');
        console.log(`${userName}\n${pass}`);

        
    //url: `https://localhost:44361/api/jwt/createJwtToken`,
        const headers = {
            type: "POST",
			contentType: "application/json",
			dataType: "json",
        };
        const url = `https://localhost:44361/api/jwt/createJwtToken`;
        const data = {
            "username": userName,
            "password": pass
        };

        getAjaxResult(url, data, headers).
        then(res => {
            console.log('In Login - responce');
            console.log(res);
            alert(JSON.stringify(res.data));
        });


    }

    render() {
        return(
        <div>

            <form onSubmit={this.handleSubmit}>
                <table border ="1"  class="FlightsTable">
                <tr>
                    <td>
                        User Name:
                    </td>
                    <td>
                        <input type="text" id="login_username" onChange={this.handleChange} />
                    </td>
                </tr> 
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="text" id="login_password"  onChange={this.handleChange} />
                    </td>
                </tr>
                </table>
                
                <br />
                <button>Login</button>
            </form>
            <br />

                {/*<!-- th all following code is for Google autentication -->*/}
            <script src="https://apis.google.com/js/platform.js" async defer></script>

                {/*		"align-items: center; justify-content: center;"	 */}
            <div onclick="pullAllCustomers();" style={{alignItems: 'center', justifyContent: 'center'}} id="my-signin2" class="g-signin2" data-onsuccess="onSignIn"  data-ux_mode="redirect"  data-longtitle="true"></div>

            <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>

        </div>
        );

    }
}

export default Login;