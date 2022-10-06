import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/commonComponent";
import { RenderInputText } from "../common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { useDispatch } from "react-redux";
import Axios from "axios";
import "./contact.css";

export default function Contact() {
  let amount = 1;
  const url = "https://aktechs.herokuapp.com/api/student";

  const dispacth = useDispatch();

  const [data, setdata] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
    console.log(newdata);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    dispacth({ type: "loadingTrue" });
    const {
      data: { key },
    } = await axios.get("https://aktechs.herokuapp.com/api/getkey");
    const {
      data: { order },
    } = await axios.post("https://aktechs.herokuapp.com/api/pay", { amount });
   
    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://aktechs.herokuapp.com/api/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    dispacth({ type: "loadingFalse" });
    razor.open();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      number: data.number,
      address: data.address,
    });
  
    //api call to psot data
  };

  return (
    <div className="formin">
      <h1 className="hek">Submit-Form</h1>
      <h3 className="hteen">
        *fill the form(read carefully and fill the form)*
      </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          placeholder="name"
          type="text"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          placeholder="email"
          type="email"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="number"
          value={data.number}
          placeholder="number"
          type="number"
        ></input>
        <input
          onChange={(e) => handle(e)}
          id="address"
          value={data.address}
          placeholder="address"
          type="text"
        ></input>
        <button className="btt" type="submit" >
          submit{" "}
        </button>
      </form>
    </div>
  );
}
