var React = require('react'),
    UserController = require('../api/controllers/userController'),
    request = require('request');

class Login extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        var url = `/api/auth/login?data=${encodeURI(JSON.stringify(this.props.req))}`
        return (
            <div>
                <form action={url} method="POST">
                    <span>
                        <label>Email </label>
                        <input
                            type="text"
                            name="email"
                        />
                    </span><br />
                    <span>
                        <label>Password </label>
                        <input
                            name="password"
                            type="password"
                        />
                    </span><br />
                    <span>
                        <button type="submit">
                            Log in
                                </button>
                    </span>
                </form>
            </div>
        );
    }
}

module.exports = Login;