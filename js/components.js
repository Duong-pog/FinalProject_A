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
  <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <a href="#" class="nav-link">
            <span class="link-text logo-text">Gameric</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
            <span class="link-text">Home</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M15.137 3.945c-.644-.374-1.041-1.07-1.04-1.82v-.003c0-1.172-.939-2.122-2.097-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-6.728 12.055h-1.882c1.245-2.741.879-9.012 3.873-10.655-1.761 2.067-.95 7.504-1.991 10.655zm3.591-13c-.552 0-1-.448-1-1 0-.551.448-1 1-1s1 .449 1 1c0 .552-.448 1-1 1zm-3 18h6c0 1.598-1.393 3-2.971 3-1.579 0-3.029-1.402-3.029-3z"/></svg>
            <span class="link-text">Notifications</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-2 5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-2 2c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm-11 2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2zm5 10c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm6 0c-1.104 0-2-.895-2-2s.896-2 2-2 2 .895 2 2-.896 2-2 2zm2-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm2-2c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z"/></svg>
            <span class="link-text">Games</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z"/></svg>
            <span class="link-text">Forum</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M8 10.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zm16 6.216c0 1.587-.56 2.591-1.749 3.179-.143.071-.296.105-.449.105-.242 0-.482-.087-.672-.255l-3.109-2.745c-.558-.494-1.044-1.004-2.404-1.004h-7.233c-1.36 0-1.847.51-2.404 1.004l-3.11 2.745c-.188.168-.429.255-.672.255-.152 0-.307-.034-.449-.105-1.189-.588-1.749-1.592-1.749-3.178 0-2.062.945-5.461 2.681-9.857.822-2.083 2.292-2.86 3.695-2.86.656 0 1.298.17 1.853.456 2.424 1.249 5.17 1.223 7.544 0 .553-.286 1.195-.456 1.851-.456 1.403 0 2.874.777 3.696 2.86 1.735 4.395 2.68 7.794 2.68 9.856zm-15-6.216c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5zm4-2.5c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm3.5 2.5c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm1.75 1.75c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75zm0-3.531c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.336.75-.75zm1.734 1.781c0-.415-.336-.75-.75-.75s-.75.335-.75.75.336.75.75.75.75-.335.75-.75z"/></svg>
            <span class="link-text">Electronics</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M10.382 15.188c-.347.26-.769.401-1.202.401-.803 0-1.207-.981-.641-1.547.307-.307.702-.505 1.133-.566.811-.117 1.167-1.122.57-1.718-.596-.597-1.601-.24-1.718.571-.062.429-.261.827-.566 1.133-.569.568-1.548.164-1.548-.642 0-.435.141-.854.4-1.202.493-.656.032-1.618-.81-1.618s-1.303.961-.811 1.618c.259.347.4.769.4 1.202 0 .805-.979 1.21-1.548.641-.308-.307-.505-.702-.566-1.133-.117-.811-1.122-1.167-1.718-.571-.597.596-.24 1.601.57 1.718.428.062.826.26 1.133.566.569.569.165 1.547-.641 1.547-.435 0-.854-.14-1.202-.401-.655-.49-1.617-.029-1.617.813 0 .841.962 1.303 1.618.812.347-.26.769-.401 1.202-.401.805 0 1.21.978.641 1.547-.307.307-.702.505-1.133.566-.811.117-1.167 1.122-.57 1.718.596.597 1.601.24 1.718-.571.062-.429.261-.827.566-1.133.569-.568 1.548-.164 1.548.642 0 .435-.141.854-.4 1.202-.492.655-.034 1.618.81 1.618.839 0 1.306-.96.811-1.62-.26-.344-.4-.764-.4-1.195 0-.807.979-1.216 1.548-.647.308.308.505.703.566 1.134.117.811 1.122 1.167 1.718.571.596-.595.242-1.603-.572-1.718-.426-.061-.822-.258-1.127-.562-.572-.571-.169-1.551.637-1.551.435 0 .854.14 1.202.401.654.489 1.617.031 1.617-.813 0-.843-.963-1.303-1.618-.812zm-5.364 2.148c-.273 0-.495-.221-.495-.495 0-.273.222-.495.495-.495s.495.222.495.495c0 .274-.222.495-.495.495zm.63-1.571c-.429 0-.775-.348-.775-.776 0-.429.347-.777.775-.777s.777.348.777.777c.001.428-.348.776-.777.776zm1.464 1.484c-.363 0-.657-.294-.657-.657s.294-.658.657-.658.657.295.657.658-.293.657-.657.657zm16.888-14.249v11.535c0 4.603-3.203 5.804-9 9.465-1.318-.833-2.496-1.535-3.539-2.183.575-.481.894-1.055 1.021-1.726.731.456 1.564.962 2.519 1.551 5.313-3.281 7-4.065 7-7.107v-9.575c-2.446-.124-4.5-.611-7-2.416-2.5 1.805-4.554 2.292-7 2.416v3.806c-.541-.484-1.244-.766-2.001-.766v-5c3.516 0 5.629-.134 9-3 3.371 2.866 5.484 3 9 3zm-4 11.535c0 1.606-.415 1.935-5 4.76v-14.353c1.827 1.105 3.474 1.6 5 1.833v7.76z"/></svg>
            <span class="link-text">Software</span>
          </a>
        </li>
  
        <li class="nav-item">
          <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <span class="link-text">Help</span>
          </a>
        </li>

        <li class="nav-item">
          <p id="logOutButton" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fa-secondary" fill="currentColor" d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"/></svg>
            <span class="link-text">Log out</span>
          </p>
        </li>
      </ul>
    </nav>
    <main>
  <div class="welcome">
        <h1>WELCOME TO SNAKEION</h1>
      </div>
      <div class="introduction">
        <h3>What is Snakeon?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Snakeon’s mission is to bring the world together through gaming. This website has the best deals for gamers and geeks. </p>
        <h3>How popular?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Snakeon is ranked as one of the top online shopping platforms for audiences of all age based on average monthly visits and time spent (Comscore). Our popularity is driven purely by the community with millions of people signing up through word of mouth every month.</p>
        <h3>Reliable tech for gamers</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">Snakeon is considered to be the most reliable marketting place for gamers. Snakeon is the ultimate destination for playing, discussing, and creating games.</p>
      </div>
      

      <div class="about">
        <div class="about_text">
          <h1>Join the Community</h1>
          <h3>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stop.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/forum.html">Visit the Forum</a>
        </div>
        <div class="about_image">
          <img src="../img/forum_image.png" width="600px" height="350px" alt="">
        </div>
      </div>


      <div class="about">
        <div class="about_image">
          <img src="../img/electronics_image.png" width="600px" height="350px" alt="">
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
          <img src="../img/software_image.png" width="600px" height="350px" alt="">
        </div>
      </div>

      <div class="introduction login">
        <h3>Join us in bringing the world together with the best gaming experience</h3>
        <a class="special" href="#">Create an account</a>
      </div>
      </main>
  `