import "./welcome.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Welcome() {
    const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
        .sendForm(
            'service_l7q1lvs', 
            'template_gcxr568', 
            formRef.current, 
            'user_yIgHHoYQdioaziicX5lHF'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
    });
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-link">
          <div className="left">
              <div className="intro-left">
              <a className="a-l" href="#intro">IVM</a>
              </div>
          </div>
          <div className="right">
          <div className="intro-right">
            <a className="a" href="#intro">Home</a>
            <a className="a" href="#about">About</a>
            {/* <a className="a" href="#plan">Price</a> */}
            <a className="a" href="#support">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      {/* home */}
      <section className="intro" id="intro">
        <div className="intro-bg">
          <div className="intro-left">
            <h1 className="intro-h2">Send professional</h1>
            <h1 className="intro-h2">invoices for free</h1>
            <div className="intro-p">
              <p>Truly free invoicing, unlimited invoices. Build and send a</p>
              <p>professional invoice today and get paid.</p>
            </div>
            <Link to={"/login"}>
              <button className="intro-btn">Create your free account</button>
            </Link>
          </div>
          <div className="intro-right">
            <div className="intro-r-img">
             <img className="intro-img" alt="" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/274008754_644156380180594_1719293460778430828_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=SfmvBFt9qf0AX84r59_&_nc_ht=scontent-lga3-1.xx&oh=03_AVKY4IfFdhw6xSNmgFipMc1d7p16FLfEYVXbTs7x8BLXRA&oe=62495053" />
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section className="about" id="about">
          <div className="intro-bg">
              <div className="intro-right">
                <img className="a-img" alt="" src="https://images.squarespace-cdn.com/content/v1/58c9da27197aeafaeb59ce29/1521117706179-RZ1AKGTTFNTWW7Q9ND25/Understanding-Buyer-and-Seller-Rights-Before-Closing_01_01.png"/>
              </div>
              <div className="intro-left">
                <h1 className="intro-h2">These are the values</h1>
                <h1 className="intro-h2">that guide us</h1>
                <div className="intro-p">
                <p>1. Believe in small business owners</p>
                <p>2. Reimagine the possible, together</p>
                <p>3. Do fewer things, simply and beautifully</p>
                <p>4. Care deeply and challenge directly</p>
                <p>5. Achieve extraordinary results</p>
            </div>
              </div>
          </div>
      </section>
      {/* price */}
      {/* <section className="plan" id="plan">
        <h1>price plan</h1>
      </section> */}
      {/* contact */}
      <section className="plan" id="support">
        <div className="c-divv">
          <h1 className="c-h1">Contact Us</h1>
            <div className="form-c">
              <form ref={formRef} onSubmit={handleSubmit} className="">
                <input
                  className="c-input"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
                <br />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                />
                <br />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
                <br />
                <textarea 
                  className="c-input"
                  type="text"
                  placeholder="Message"
                  name="message"
                />
                <br />
                <div className="c-btn-div">
                  <button className="c-btn">
                    Submit
                  </button>
                </div>
                <div className="c-msg">
                {done && "Thank you. We will get back to you asap."}
                </div>
              </form>
              </div>
            </div>
      </section>
    </div>
  );
}

export default Welcome;
