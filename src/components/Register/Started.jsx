

import React, { useState, useEffect } from 'react';
import './css/Register.css';

import logos from "./Img/logos.png";
import Can from "./Img/Can.png";

const Started = () => {
  const [inputs, setInputs] = useState([]);
  const [toggleBtns, setToggleBtns] = useState([]);
  const [main, setMain] = useState(null);
  const [bullets, setBullets] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const inputElements = document.querySelectorAll('.input-field');
    const toggleButtons = document.querySelectorAll('.toggle');
    const mainElement = document.querySelector('main');
    const bulletSpans = document.querySelectorAll('.bullets span');
    const imageElements = document.querySelectorAll('.image');

    setInputs(inputElements);
    setToggleBtns(toggleButtons);
    setMain(mainElement);
    setBullets(bulletSpans);
    setImages(imageElements);

    
    return () => {
      setInputs([]);
      setToggleBtns([]);
      setMain(null);
      setBullets([]);
      setImages([]);
    };
  }, []); 

  useEffect(() => {
    const handleInputFocus = (event) => {
      event.target.classList.add('active');
    };

    const handleInputBlur = (event) => {
      if (event.target.value !== '') return;
      event.target.classList.remove('active');
    };

    const handleToggleBtnClick = () => {
      main.classList.toggle('sign-up-mode');
    };

    const moveSlider = function () {
      const index = this.dataset.value;

      const currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove('show'));
      currentImage.classList.add('show');

      const textSlider = document.querySelector('.text-group');
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove('active'));
      this.classList.add('active');
    };

    inputs.forEach((inp) => {
      inp.addEventListener('focus', handleInputFocus);
      inp.addEventListener('blur', handleInputBlur);
    });

    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', handleToggleBtnClick);
    });

    bullets.forEach((bullet) => {
      bullet.addEventListener('click', moveSlider);
    });

  
    return () => {
      inputs.forEach((inp) => {
        inp.removeEventListener('focus', handleInputFocus);
        inp.removeEventListener('blur', handleInputBlur);
      });

      toggleBtns.forEach((btn) => {
        btn.removeEventListener('click', handleToggleBtnClick);
      });

      bullets.forEach((bullet) => {
        bullet.removeEventListener('click', moveSlider);
      });
    };
  }, [inputs, toggleBtns, main, bullets, images]);

  return (
    <div>
 <main>
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src={logos} alt="easyclass" />
              
              </div>

              <div class="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" class="toggle">Sign up</a>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div class="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form action="index.html" autocomplete="off" className="sign-up-form">
              <div className="logo">
                <img src={logos} alt="easyclass" />
                <h4>Can Technology</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle">Sign in</a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="/#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel-wrp">
            <div className="images-wrapper">
              <img src={Can} className="image img-1 show" alt="free" />
        
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your account</h2>
    
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Started;
