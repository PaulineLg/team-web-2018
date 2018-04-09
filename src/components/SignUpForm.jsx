import React, {Component} from 'react';

import logo from '../crepe.png';

class SignUpForm extends Component {
  render() {
    return (<form action="action_page.php">

        <div class="container">
          <h1>Sign In</h1>
          <p>Welcome back ! It's always a pleasure to see you !</p>
          <hr/>

          <label for="email">
          </label>
          <input type="text" placeholder="Enter Email" name="email" required="required" />

          <label for="psw">
          </label>
          <input type="password" placeholder="Enter Password" name="psw" required="required" />
          <a href="#" >Forgot password ? </a>


          <div class="clearfix">
            <button type="submit" class="signinbtn">Log In</button>
          </div>
       </div>


      <div class="container">

        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>

          <label for="firstname">
          </label>
          <input type="text" placeholder="First name" name="firstname" required="required" />

          <label for="lastname">
          </label>
          <input type="text" placeholder="Last name" name="lastname" required="required" />

          <label for="email">
          </label>
          <input type="text" placeholder="Enter Email" name="email" required="required" />

          <label for="psw">
          </label>
          <input type="password" placeholder="Enter Password" name="psw" required="required" />

          <label for="psw-repeat">
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
          </div>

  

      </form>
              );
    }
}

export default SignUpForm;
