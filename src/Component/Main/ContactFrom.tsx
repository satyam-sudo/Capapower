import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  username: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    website: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const ContactFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <div>
      <section
        className="page-title"
        style={{
          backgroundImage:
            "url(https://free4kwallpapers.com/uploads/originals/2019/09/22/a-sunset-full-of-energy-wallpaper.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <div className="title">
              <h1>Contact Us</h1>
            </div>
            <ul className="bread-crumb clearfix pull-right">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-info-two">
        <div className="auto-container">
          <div className="sec-title centred">
            <div className="title-top">
              <div className="shape-box">
                <span className="shape shape-1">\\</span>
                <span className="shape shape-2">\\</span>
              </div>
              <h6>Want quick help?</h6>
            </div>
            <h2>Good Time to Connect With Us</h2>
            <div className="title-text">
              <p>
                Desire that they cannot foresee the pain and trouble that are
                bound <br />
                equal blame belongs to their duty.
              </p>
            </div>
          </div>
          <div className="row clearfix align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="inner-box left-column">
                <div
                  className="shape"
                  style={{
                    backgroundImage:
                      "url(assets/images/icons/icons-shape-1.png);",
                  }}
                ></div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="far fa-map"></i>
                  </div>
                  <h6>Address</h6>
                  <span>515 Silver St, ln E1 6AN, uk</span>
                </div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="fas fa-headphones"></i>
                  </div>
                  <h6>Sales Team</h6>
                  <span>
                    <a href="tel:08880055665577">(088) 800-5566 & 5577</a>
                  </span>
                </div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="far fa-clock"></i>
                  </div>
                  <h6>Off. Hrs</h6>
                  <span>Mon - Sat: 09.00 to 06.30</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image clearfix">
                  <img
                    src="assets/images/capapower-v.png"
                    style={{ width: "50%", margin: "0 auto", display: "block" }}
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="inner-box text-right right-column">
                <div
                  className="shape"
                  style={{
                    backgroundImage:
                      "url(assets/images/icons/icons-shape-2.png)",
                  }}
                ></div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="far fa-envelope-open"></i>
                  </div>
                  <h6>Email</h6>
                  <span>
                    <a href="mailto:supportteam@info.com">
                      supportteam@info.com
                    </a>
                  </span>
                </div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="fas fa-headphones"></i>
                  </div>
                  <h6>Marketing</h6>
                  <span>
                    <a href="tel:08880044554466">(088) 800-4455 & 4466</a>
                  </span>
                </div>
                <div className="single-info-box">
                  <div className="icon-box">
                    <i className="fas fa-question"></i>
                  </div>
                  <h6>Our Faq</h6>
                  <span>Checkout your answers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="auto-container">
          <div className="form-inner">
            <div className="text">
              <h3>Send Your Message</h3>
              <p>
                Please feel free to get in touch using the form below. We'd love
                to hear for you.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <div className="form-group">
                    <i className="far fa-user"></i>
                    <input {...register("username")} placeholder="name" />
                    <p>{errors.username?.message}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <div className="form-group">
                    <i className="far fa-envelope-open"></i>
                    <input {...register("email")} placeholder="email" />
                    <p>{errors.email?.message}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 column">
                  <div className="form-group">
                    <i className="far fa-phone"></i>
                    <input {...register("phone")} placeholder="phone" />
                    <p>{errors.phone?.message}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 column">
                  <div className="form-group">
                    <i className="far fa-desktop"></i>
                    <input {...register("website")} placeholder="website" />
                    <p>{errors.website?.message}</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 column">
                  <div className="form-group">
                    <i className="far fa-text-width"></i>
                    <input {...register("message")} placeholder="message" />
                    <p>{errors.message?.message}</p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 column">
                  <div className="message-btn">
                    <button className="theme-btn btn-one" type="submit">
                      <i className="flaticon-right-arrow"></i>Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFrom;
