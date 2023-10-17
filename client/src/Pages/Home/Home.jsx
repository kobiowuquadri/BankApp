import React from 'react'
import './home.scss'
import logo from '../../assets/images/logo.svg'
import mockUp from '../../assets/images/image-mockups.png'
import online from '../../assets/images/icon-online.svg'
import budgeting from '../../assets/images/icon-budgeting.svg'
import boarding from '../../assets/images/icon-onboarding.svg'
import apiIcon from '../../assets/images/icon-api.svg'
import currency from '../../assets/images/image-currency.jpg'
import restaurant from '../../assets/images/image-restaurant.jpg'
import plane from '../../assets/images/image-plane.jpg'
import confettti from '../../assets/images/image-confetti.jpg'
import footerLogo from '../../assets/images/footer_logo.svg'
import youtubeIcon from '../../assets/images/icon-youtube.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'
import instagramIcon from '../../assets/images/icon-instagram.svg'


function Home() {
  return (
    <div>
      <header>
      <img src={logo} alt="" />
      <nav className="navbar">
        <ul>
          <li><a href="#" className="nav_link">Home</a></li>
          <li><a href="#about" className="nav_link">About</a></li>
          <li><a href="#" className="nav_link">Login</a></li>
        </ul>
        <a href="#"></a>
      </nav>
      <button id="btn_request">Register</button>
      <div id="menu">

      </div>
    </header>

    <div className="navcard">
      <ul>
        <li><a href="#" className="navcard_link">Home</a></li>
        <li><a href="#about" className="navcard_link">About</a></li>
        <li><a href="#" className="navcard_link">Login</a></li>
      </ul>
    </div>

    {/* <!--  Next generation Section --> */}
   <div className="next_generation">
    <div className="next_generation_content">
      <h1 className="animate__animated animate__bounceInDown animate__delay-1s">Next generation digital banking</h1>
      <p className="animate__animated animate__backInLeft animate__delay-1.2s">
        Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.
      </p>
      <button className="animate__animated animate__backInLeft animate__delay-1.5s">Request Invite</button>
    </div>
    <div className="next_generation_image">
       <img src={mockUp} alt=""/>
    </div>
   </div>

   {/* <!-- Why choose Easybank Section --> */}
   <div className="why_choose_easybank">
     <div className="why_choose_easybank_content" data-aos="fade-right" id='about'>
       <h1>Why choose Easybank?</h1>
       <p>
        We leverage Open Banking to turn your bank account into your financial hub. Control
        your finances like never before.
       </p>
     </div>

     <div className="why_choose_easybank_flex">
       <div className="online_banking content" data-aos="zoom-in">
        <img src={online} alt=""/>
        <h1> Online Banking</h1>
        <p>
          
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
        </p>
       </div>

       <div className="simple_budgeting content" data-aos="zoom-in">
        <img src={budgeting} alt=""/>
        <h1>Simple Budgeting</h1>
        <p>
          See exactly where your money goes each month. Receive notifications when you’re 
          close to hitting your limits.
        </p>
       </div>

       <div className="fast_onboarding content" data-aos="zoom-in">
        <img src={boarding} alt=""/>
        <h1>Fast Onboarding</h1>
        <p>
          We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
        </p>
       </div>

       <div className="open_api content" data-aos="zoom-in">
        <img src={apiIcon} alt=""/>
        <h1>Open API</h1>
        <p>
          Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
        </p>
       </div>
     </div>
   </div>
    


   {/* <!-- Latest Articles Section --> */}

   <div className="latest_articles">
      <div className="latest_articles_content">
        <h1>
          Latest Articles
        </h1>
      </div>

      <div className="latest_articles_lists">
        <figure  data-aos="fade-right">
          <img src={currency} alt=""/>
          <figcaption>
            <pre>By Claire Robinson</pre>
            <h1>Receive money in any currency with no fees</h1>
            <p>
              The world is getting smaller and we’re becoming more mobile. So why should you be 
              forced to only receive money in a single …
            </p>
          </figcaption>
        </figure>

        <figure  data-aos="fade-right">
          <img src={restaurant} alt=""/>
          <figcaption>
            <pre>By Wilson Hutton</pre>
            <h1>Treat yourself without worrying about money</h1>
            <p>
              Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …
            </p>
          </figcaption>
        </figure>

        <figure  data-aos="fade-right">
          <img src={plane} alt=""/>
          <figcaption>
            <pre>By Wilson Hutton</pre>
            <h1>Take your Easybank card wherever you go</h1>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …
            </p>
          </figcaption>
        </figure>

        <figure  data-aos="fade-right">
          <img src={confettti} alt=""/>
          <figcaption>
            <pre>By Claire Robinson</pre>
            <h1>Our invite-only Beta accounts are now live!</h1>
            <p>
              After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...
            </p>
          </figcaption>
        </figure>

      </div>
   </div>


   {/* <!-- Footer Section --> */}

   <footer>
    <div className="footer_links">
      <div className="link_1">
        <ul>
          <li data-aos="flip-left">
            <img src={footerLogo} alt=""/>
          </li>
          <li>
            <ol data-aos="flip-left">
              <a href="javascript:void()">
                <li><img src="./images/icon-facebook.svg" alt=""/></li>
              </a>
              <li><a href="javascript:void()"><img src={youtubeIcon} alt=""/></a></li>
              <li><a href="javascript:void()"><img src={twitterIcon} alt=""/></a></li>
              <li><a href="javascript:void()"><img src={pinterestIcon} alt=""/></a></li>
              <li><a href="javascript:void()"><img src={instagramIcon} alt=""/></a></li>
            </ol>
          </li>
        </ul>
      </div>

      <div className="link_2" data-aos="flip-left">
        <ul>
          <li><a href="javascript:void()">About Us</a></li>
          <li><a href="javascript:void()">Contact</a></li>
          <li><a href="javascript:void()">Blog</a></li>
        </ul>
      </div>

      <div className="link_3" data-aos="flip-left">
        <ul>
          <li><a href="javascript:void()">Careers</a></li>
          <li><a href="javascript:void()">Support</a></li>
          <li><a href="javascript:void()">Privacy Policy</a></li>
        </ul>
      </div>

    </div>

    <div className="link_4" data-aos="flip-right">
      <button id="btn_footer">Request Invite</button>
      <p>
        © Easybank. All Rights Reserved
      </p>
    </div>
   </footer>

    </div>
  )
}

export default Home