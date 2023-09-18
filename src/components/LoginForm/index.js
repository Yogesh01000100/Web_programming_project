import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './index.css'
import { PuffLoader } from 'react-spinners'
import axios from 'axios'
import styled, { keyframes } from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderColor: '#c3e6cb',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

Modal.setAppElement('#root');

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const dotsAnimation = keyframes`
    0% { content: '.'; }
    33% { content: '..'; }
    66% { content: '...'; }
    100% { content: ''; }
  `;

const LoadingText = styled.span`
    display: inline-block;
    animation: ${dotsAnimation} 1.5s infinite;
  `;
const AnimatedText = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS'
}

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    signupSuccess: false,
    errorMsg: '',
    SignUpMsg: '',
    apiStatus: apiStatusConstants.initial,
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value })
  }

  onChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  onSubmitSuccess = jwtToken => {
    const { history } = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg }, () => {
      console.log(errorMsg); // Log the error message
    });
  }
  onSignupSuccess = SignUpMsg => {
    this.setState({ signupSuccess: true, SignUpMsg }, () => {
      console.log(SignUpMsg);
    });
  };




  submitForm = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    setTimeout(() => {
      axios
        .post('http://localhost/web_program/login.php', userDetails)
        .then(response => {
          console.log('Response data:', response.data);

          if (response.data.message === "User does not exist!") {
            console.log('Login failure:', response.data.message);
            this.onSubmitFailure(response.data.message);
            this.setState({
              apiStatus: apiStatusConstants.failure,
            });
          } else if (response.data.message === "Incorrect password or Username!") {
            console.log('Login failure:', response.data.message);
            this.onSubmitFailure(response.data.message);
            this.setState({
              apiStatus: apiStatusConstants.failure,
            });
          } else {
            console.log('Login success');
            this.onSubmitSuccess(response.data.token);
            this.setState({
              apiStatus: apiStatusConstants.success,
            });
          }
        })
        .catch(error => {
          console.error('An error occurred:', error);
          this.onSubmitFailure("No respopnse from server!");
          this.setState({
            apiStatus: apiStatusConstants.failure,
          });
        });
    }, 1500);
  };













  signUp = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    setTimeout(() => {
      axios
        .post('http://localhost/web_program/signup.php', userDetails)
        .then(response => {
          console.log(response.data.message)
          if (response.data.message === "User already exists!") {
            this.onSubmitFailure(response.data.message);
            this.setState({ apiStatus: apiStatusConstants.failure, })
          }
          else if (response.data.message === "User registered successfully!") {
            //this.onSignupSuccess(response.data.message);
            this.setState({
              signupSuccess: true
            });
            this.setState({
              apiStatus: apiStatusConstants.success,
            });

          }
          if (this.state.signupSuccess) {
            const alertStyle = {
              padding: '20px',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderColor: '#c3e6cb',
              borderRadius: '4px',
              marginBottom: '20px',
              fontWeight: 'bold',
            };

            alert("User registered successfully!", { style: alertStyle });
          }

        })
        .catch(error => {
          console.error('An error occurred:', error);
          this.onSubmitFailure('An error occurred');
          this.setState({
            apiStatus: apiStatusConstants.failure,
          });
        });

    }, 1000);
  };









  renderLoadingView = () => (
    <div className="loader-container">
      <AnimatedText>
        <PuffLoader color="#0b69ff" size={70} />
      </AnimatedText>
    </div>
  );

  renderPasswordField = () => {
    const { password } = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const { username } = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }
  render() {
    const { showSubmitError, errorMsg, apiStatus, signupSuccess, SignUpMsg } = this.state;
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      case apiStatusConstants.success:
        return <Redirect to="/" />;
      default:
        return (
          <div className="ims">
            <div className="login-form-container">
              <form className="form-container">
                <div className="input-container">{this.renderUsernameField()}</div>
                <div className="input-container">{this.renderPasswordField()}</div>


                <div className='hjk'>
                  <button onClick={this.submitForm} className="login-button">
                    Login
                  </button>
                  <button onClick={this.signUp} className="login-button">
                    Sign-Up
                  </button>
                </div>

                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                <Modal
                  isOpen={signupSuccess}
                  onRequestClose={() => this.setState({ signupSuccess: false })}
                  style={customStyles}
                >
                  <h2>Alert</h2>
                  <p>User registered successfully!</p>
                  <button onClick={() => this.setState({ signupSuccess: false })}>Close</button>
                </Modal>


              </form>
            </div>
          </div>
        );
    }
  }

}

export default LoginForm
