import React from 'react';

class ConditionalRendering extends React.Component {
    render() {
        return (
            <>
                <LoginControl />
                <Page />
            </>
        );
    }

}

function UserGreeting(props) {
    return <h1>Welcome Back</h1>;
}

function GuestGreeting(props) {
    return <h1>please sign up</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    const count = 0;
    return (
        <div>
            <h1>Hello prince</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    you have {unreadMessages.length} unread Messages.
                </h2>


            }
            {count && <h1>messages: count</h1>}
        </div>

    );
}

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        let messages = ['prince', 'hardik', 'saksham'];
        const Login = this.state.isLoggedIn;
        let button;

        if (Login) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={Login} />
                <Mailbox unreadMessages={messages} />
                {button}
            </div>
        );
    }
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
    }

    handleToggleClick = () => {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'show'}
                </button>
            </div>
        );
    }
}



export default ConditionalRendering;