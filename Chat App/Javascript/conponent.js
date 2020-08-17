const component = {}
component.welcomePage = `
    <h1>Welcome To My Chat App</h1>
`
component.registerPage = `
<div class="register-container">
<form id="register-form">
  <div id="register-header">MindX Chat</div>
  <div class="name-wrapper">
    <div class="input-wrapper">
      <input type="text" placeholder="First Name" name="firtsName" />
      <div class="error" id="first-name-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Last Name" name="lastName" />
      <div class="error" id="last-name-error"></div>
    </div>
  </div>
  <div class="input-wrapper">
    <input type="email" placeholder="Email" name="email" />
    <div class="error" id="email-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Password" name="password" />
    <div class="error" id="password-error"></div>
  </div>
  <div class="input-wrapper">
    <input
      type="password"
      placeholder="Comfirm Password"
      name="comfirmPassword"
    />
    <div class="error" id="comfirm-password-error"></div>
  </div>
  <div class="form-action">
    <div>Already have an account ? <span class="cursor-pointer">Login</span></div>
    <button class="btn cursor-pointer" type="submit">Register</button>
  </div>
</form>
</div>
`