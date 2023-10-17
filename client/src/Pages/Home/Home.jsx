import React from 'react'
import './home.scss'





function Home() {
  return (
    <div>
      <header>
      <img src="./images/logo.svg" alt="" />
      <nav class="navbar">
        <ul>
          <li><a href="javascript:void()" class="nav_link">Home</a></li>
          <li><a href="javascript:void()" class="nav_link">About</a></li>
          <li><a href="javascript:void()" class="nav_link">Contact</a></li>
          <li><a href="javascript:void()" class="nav_link">Blog</a></li>
          <li><a href="javascript:void()" class="nav_link">Careers</a></li>
        </ul>
        <a href="javascript:void()"></a>
      </nav>
      <button id="btn_request">Request Invite</button>
      <div id="menu">

      </div>
    </header>

    <div class="navcard">
      <ul>
        <li><a href="javascript:void()" class="navcard_link">Home</a></li>
        <li><a href="javascript:void()" class="navcard_link">About</a></li>
        <li><a href="javascript:void()" class="navcard_link">Contact</a></li>
        <li><a href="javascript:void()" class="navcard_link">Blog</a></li>
        <li><a href="javascript:void()" class="navcard_link">Careers</a></li>
      </ul>
    </div>

    {/* <!--  Next generation Section --> */}
   <div class="next_generation">
    <div class="next_generation_content">
      <h1 class="animate__animated animate__bounceInDown animate__delay-1s">Next generation digital banking</h1>
      <p class="animate__animated animate__backInLeft animate__delay-1.2s">
        Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.
      </p>
      <button class="animate__animated animate__backInLeft animate__delay-1.5s">Request Invite</button>
    </div>
    <div class="next_generation_image">
       <img src="./images/image-mockups.png" alt=""/>
    </div>
   </div>

   {/* <!-- Why choose Easybank Section --> */}
   <div class="why_choose_easybank">
     <div class="why_choose_easybank_content" data-aos="fade-right">
       <h1>Why choose Easybank?</h1>
       <p>
        We leverage Open Banking to turn your bank account into your financial hub. Control
        your finances like never before.
       </p>
     </div>

     <div class="why_choose_easybank_flex">
       <div class="online_banking content" data-aos="zoom-in">
        <img src="./images/icon-online.svg" alt=""/>
        <h1> Online Banking</h1>
        <p>
          
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
        </p>
       </div>

       <div class="simple_budgeting content" data-aos="zoom-in">
        <img src="./images/icon-budgeting.svg" alt=""/>
        <h1>Simple Budgeting</h1>
        <p>
          See exactly where your money goes each month. Receive notifications when you’re 
          close to hitting your limits.
        </p>
       </div>

       <div class="fast_onboarding content" data-aos="zoom-in">
        <img src="./images/icon-onboarding.svg" alt=""/>
        <h1>Fast Onboarding</h1>
        <p>
          We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
        </p>
       </div>

       <div class="open_api content" data-aos="zoom-in">
        <img src="./images/icon-api.svg" alt=""/>
        <h1>Open API</h1>
        <p>
          Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
        </p>
       </div>
     </div>
   </div>
    


   {/* <!-- Latest Articles Section --> */}

   <div class="latest_articles">
      <div class="latest_articles_content">
        <h1>
          Latest Articles
        </h1>
      </div>

      <div class="latest_articles_lists">
        <figure  data-aos="fade-right">
          <img src="./images/image-currency.jpg" alt=""/>
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
          <img src="./images/image-restaurant.jpg" alt=""/>
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
          <img src="./images/image-plane.jpg" alt=""/>
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
          <img src="./images/image-confetti.jpg" alt=""/>
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
    <div class="footer_links">
      <div class="link_1">
        <ul>
          <li data-aos="flip-left">
            <img src="./images/footer_logo.svg" alt=""/>
          </li>
          <li>
            <ol data-aos="flip-left">
              <a href="javascript:void()">
                <li><img src="./images/icon-facebook.svg" alt=""/></li>
              </a>
              <li><a href="javascript:void()"><img src="./images/icon-youtube.svg" alt=""/></a></li>
              <li><a href="javascript:void()"><img src="./images/icon-twitter.svg" alt=""/></a></li>
              <li><a href="javascript:void()"><img src="./images/icon-pinterest.svg" alt=""/></a></li>
              <li><a href="javascript:void()"><img src="./images/icon-instagram.svg" alt=""/></a></li>
            </ol>
          </li>
        </ul>
      </div>

      <div class="link_2" data-aos="flip-left">
        <ul>
          <li><a href="javascript:void()">About Us</a></li>
          <li><a href="javascript:void()">Contact</a></li>
          <li><a href="javascript:void()">Blog</a></li>
        </ul>
      </div>

      <div class="link_3" data-aos="flip-left">
        <ul>
          <li><a href="javascript:void()">Careers</a></li>
          <li><a href="javascript:void()">Support</a></li>
          <li><a href="javascript:void()">Privacy Policy</a></li>
        </ul>
      </div>

    </div>

    <div class="link_4" data-aos="flip-right">
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