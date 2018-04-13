import React, {Component} from 'react';

import logo from '../crepe.png';

class SignUpForm extends Component {
  render() {
    return (<form action="action_page.php">
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required="required" />

            <label for="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required="required" />

              <label for="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required="required" />

                <label>
                  <input type="checkbox" checked="checked" name="remember" />
                    Remember me
                  </label>

                  <p>By creating an account you agree to our
                    <a href="#" > Terms & Privacy</a>.
                  </p>

                  <div class="clearfix">
                    <button type="submit" class="signupbtn">Sign Up</button>
                  </div>

                  <p> Already have an account? <a href="#" >Sign in</a>. </p>
          </div>

      </form>
              );
    }
}

export default SignUpForm;
