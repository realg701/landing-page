import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const getFormattedInputValue = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  let res = "";
  if (digits.length > 0) {
    res = `${digits.slice(0, 3)}`;
  }
  if (digits.length >= 4) {
    res = `(${res}) ${digits.slice(3, 6)}`;
  }
  if (digits.length >= 7) {
    res += `-${digits.slice(6)}`;
  }
  return res;
};

const ContactUs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const { value, selectionStart, selectonEnd } = e.target;
    const formattedInputValue = getFormattedInputValue(value);
    setPhoneNumber(formattedInputValue);
    setTimeout(() => {
      if (inputRef.current) {
        const position =
          formattedInputValue.indexOf(
            value[selectionStart - 1],
            selectonEnd - 1
          ) + 1 || selectonEnd;
        inputRef.current.setSelectionRange(position, position);
      }
    }, 0);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "{ paste_here }");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      console.log("Message", res.message);

      navigate("/submission-sucessful");
    }
  };

  return (
    <MainContainer>
      <div className="hero-content">
        <h1>Contact Us</h1>
        <p>
          Please feel free to contact us if you have any questions or enquiries.
          Whether you require cleaning services or just want to ask us something
          about cleaning in general, we’d love to hear from you!
        </p>
        <p>
          You can send us a contact message via the form below, call us toll
          free on <a href="tel:0900 786 01">0900 786 01</a>, or contact our
          state offices directly (see right).
        </p>
        <div className="shop">
          <p>Also Available On</p>
          <div className="brand-icons">
            <button>
              <img src="/landing-page/images/metro.png" alt="metro-logo" />
            </button>
            <button href="#">
              <img src="/landing-page/images/daraz.png" alt="daraz-logo" />
            </button>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h4>Please complete each field below.</h4>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="subject" value={"MCC Client - " + name} />
          <p>Services:</p>
          <label htmlFor="1">
            <input
              id="1"
              type="radio"
              name="services"
              value="Cleaning Quotation"
            />
            Cleaning Quotation
          </label>
          <label htmlFor="2">
            <input
              id="2"
              type="radio"
              name="services"
              value="General Enquiry"
            />
            General Enquiry
          </label>
          <label htmlFor="3">
            <input
              id="3"
              type="radio"
              name="services"
              value="Job or Career Enquiry"
            />
            Job or Career Enquiry
          </label>
          <p>Name:</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
          />
          <p>Email:</p>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <p>Phone:</p>
          <input
            ref={inputRef}
            onChange={handleChange}
            value={phoneNumber}
            type="tel"
            name="phone"
            required
            placeholder="(xxx) xxx-xxxx"
          />
          <p>Comments:</p>
          <textarea
            name="Comments"
            placeholder="Enter your comments"
          ></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    </MainContainer>
  );
};

export default ContactUs;
const MainContainer = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 100px auto;
  padding: 0 1.5em;
  @media (width < 800px) {
    flex-direction: column;
    margin: 30px auto;
    padding: 0 1em;
  }
  a {
    color: #e4293e;
  }
  a:hover {
    filter: drop-shadow(0 0 1em aquamarine);
    color: aquamarine;
  }
  a:active {
    filter: drop-shadow(0 0 1em #646cff);
    color: #646cff;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      font-size: 3em;
      font-weight: 800;
      line-height: 1em;
      margin: 0;
    }
    p {
      max-width: 400px;
      font-weight: 600;
    }

    .shop {
      p {
        font-weight: unset;
        font-size: 14px;
      }

      .brand-icons {
        display: flex;
        gap: 1em;
        @media (0 < width < 600px) {
          margin-bottom: 6em;
        }
        @media (prefers-color-scheme: light) {
          button {
            border: 1px solid #1a1a1a;
          }
        }

        button {
          background: white;
          display: flex;
          align-items: center;
          padding: 0.5em;

          img {
            width: 60px;
            height: 30px;
            object-fit: contain;
          }
        }
      }
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    h4 {
      font-size: 2em;
      font-weight: 600;
      margin: 0;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 50%;
      @media (width < 900px) {
        width: auto;
      }
      label {
        display: flex;
        justify-content: baseline;
        align-items: baseline;
        margin: 2px 0;
        text-align: start;
        input {
          margin: 0 8px 0 0;
        }
      }
      p {
        margin: 8px 0 0;
      }
      input,
      textarea {
        font-size: 16px;
        margin: 0 0 10px;
        padding: 8px;
      }
    }
  }
`;
