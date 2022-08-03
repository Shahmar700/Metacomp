import React from "react";
import "./Modal.css";
function LoginModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="LoginModal">
        <div className="closeBtnDiv">
        <button className="closeBTN" onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="LogTitle">
          <h2>Hesab</h2>
        </div>
        <div className="LogInput">
          <form>
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Parol" />
          </form>
        </div>
        <div className="forgot">
          <a href="#">Şifrəni unutdun?</a>
        </div>
        <div className="LogButton">
          <button onClick={() => closeModal(false)}>Daxil ol</button>
        </div>
        <div className="fb_google">
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQBOmpWgIgE8S87PPHuQofUelFfF%252BdO3t18UFIIX2mqNW0xTz8fXD5Wxm28NDL3gnPYVyCJDoYgkWPE0Fwwk9%252Fw819XVVRTyw9fowNIpwc1OsOEJWez2UF0K6yzLjmCjbhb%252FAMt1l3t%252FA7tdMjkCk4F4rAP0O8god5KS4CIl7Dja384nFO44ebeQpwYkhf8qulEJzM%252BGnuRd%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D2e277ee4-a7ce-459e-8613-09b9f1035860%26tp%3Dunspecified&cancel_url=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DAQBOmpWgIgE8S87PPHuQofUelFfF%252BdO3t18UFIIX2mqNW0xTz8fXD5Wxm28NDL3gnPYVyCJDoYgkWPE0Fwwk9%252Fw819XVVRTyw9fowNIpwc1OsOEJWez2UF0K6yzLjmCjbhb%252FAMt1l3t%252FA7tdMjkCk4F4rAP0O8god5KS4CIl7Dja384nFO44ebeQpwYkhf8qulEJzM%252BGnuRd%23_%3D_&display=page&locale=en_US&pl_dbl=0" className="fb">Facebook hesabı ilə daxil ol</a>
            <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQDhzbcH6Bs%2Fta9sNhAQqZs9D3vb41zKG6y4mA%2FH5uytTCy15ydo9XcFKLS%2FNKnB7htNx96zvcjYkd87mC4ISq33Ie%2BlhVVaol3VAIQu6Zs4moPTnPbieHvarp%2FURxsRf0Lf%2BZtGNT%2Bp3EtzVRKW3CPd57j7kC4Ha%2B8e5Acg0ybCwKnrS9qAQy3hPA7RTxC0gAm5hCrKjEuvstFPgFFJz%2B5pRIyO5fk%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect%2Fsignup&flowName=GeneralOAuthFlow" className="google">Google hesabı ilə daxil ol</a>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
