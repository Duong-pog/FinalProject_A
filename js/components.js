const components = {};
components.welcomeScreen = `
    <h1>This is my Screen</h1>
    <div>This is welcomeScreen to learn this web</div>
    <input type="text">
`;

// toan bộ code html sẽ ở trong components.js này
components.registerScreen = `
<div class="register-container">
<div class="aside-right">
  <div class="header">
    <h3>Snakeion</h3>
  </div>

  <!-- code phan input -->
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="First name" />
        <div class="error" id="first-name-error"></div>
      </div>

      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Last name" />
        <div class="error" id="last-name-error"></div>
      </div>
    </div>

    <!-- code the email -->
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email..." />
      <div class="error" id="email-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="password"
        placeholder="Please input your password"
      />
      <div class="error" id="password-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="confirmPassword"
        placeholder="Please input your password again"
      />
      <div class="error" id="confirm-password-error"></div>
    </div>

    <!-- da xong cac truong input -->
    <div class="form-action">
      <span class = "cursor-pointer" id="redirect-to-login"> Already have an account? Login </span>

      <button class="btn" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`;

components.loginScreen = `
<div class="login-container">
      <div class="aside-right">
        <div class="header">
          <h3>Snakeion</h3>
        </div>

        <!-- code phan input -->
        <form id="login-form">
          <!-- code the email -->
          <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email..." />
            <div class="error" id="email-error"></div>
          </div>

          <div class="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Please input your password"
            />
            <div class="error" id="password-error"></div>
          </div>

          <!-- da xong cac truong input -->
          <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">
              Don't have an account? register
            </span>
            <button class="btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>`;


  components.homeScreen = `
  <div class="welcome">
        <h1>WELCOME TO GAMERIC</h1>
      </div>
      <div class="introduction">
        <h3>What is Gameric?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Gameric’s mission is to bring the world together through gaming. This website has the best deals for gamers and geeks. </p>
        <h3>How popular?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Gameric is ranked as one of the top online shopping platforms for audiences of all age based on average monthly visits and time spent (Comscore). Our popularity is driven purely by the community with millions of people signing up through word of mouth every month.</p>
        <h3>Reliable tech for gamers</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Gameric is considered to be the most reliable marketting place for gamers. Gameric is the ultimate destination for playing, discussing, and creating games.</p>
      </div>
      

      <div class="about">
        <div class="about_text">
          <h1>Join the Community</h1>
          <h3>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stop.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/forum.html">Visit the Forum</a>
        </div>
        <div class="about_image">
          <img src="../images/forum_image.png" width="600px" height="350px" alt="">
        </div>
      </div>


      <div class="about">
        <div class="about_image">
          <img src="../images/electronics_image.png" width="600px" height="350px" alt="">
        </div>
        <div class="about_text">
          <h1>Upgrade your gaming setup</h1>
          <h3>Get yourself ready to buy some of the most amazing gaming devices as well as electronics for your house.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/electronics.html">Visit the Electronics shop</a>
        </div>
      </div>

      <div class="about">
        <div class="about_text">
          <h1>Install add-ons for gaming experience</h1>
          <h3>Download some of the most reliable softwares in the world. They help boosting your gaming experience as well as detecting viruses.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/softwares.html">Visit the Software</a>
        </div>
        <div class="about_image">
          <img src="../images/software_image.png" width="600px" height="350px" alt="">
        </div>
      </div>

      <div class="introduction login">
        <h3>Join us in bringing the world together with the best gaming experience</h3>
        <a class="special" href="../html/signup.html">Create an account</a>
      </div>
  `