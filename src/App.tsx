import "./styles.css";
import React, { useState } from "react";
import Modal from "react-modal";
import NavBar from "./components/NavBar";
import "./fonts/JosefinSans-VariableFont_wght.ttf"

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
        <>
          <NavBar />
          <div id="about">
            <h2 id="first">
                Hi ! I am Palli.
                <br />
                I am a versatile professional with a double interest
                in computer science and digital art. Throughout my journey as a Computer Scientist,
                I have had the great oppertunity to work on challenging projects which have
                shaped me into the developer I am today. I remain committed to keep up with 
                industry trends and adopting best practices to that I can effectively navitage
                through ever changing and challenging environments.
                <br />
                <br />
                What distinguishes me from other professionals is not only my expertise in coding 
                intricacies and problem solving but also the fact that I know digital art too. 
                With an aesthetic eye and an understanding of design principles, 
                my approach to work is distinct.
                
                
            </h2>
            <h2 id="second">
                In my freetime I help out my friends with their startup Aska Studios,
                a video game company. There I write game code and implement animations. 
                <br />
                <br />
                I am an aspiring painter. Which all started as a joke present for a friend but I 
                bought way too much paint so I've been painting on the side to try and finish
                all the paint I bought. 
                <br />
                <br />
                <div id="imgdiv">
                    <img src="ballon.jpg" alt="ballon" onClick={() => openModal("ballon.jpg")}/>
                    <img src="greenorange.jpg" alt="ballon" onClick={() => openModal("greenorange.jpg")}/>
                    <img src="reddoor.jpg" alt="ballon" onClick={() => openModal("reddoor.jpg")}/>
                    <img src="roofmen.jpg" alt="ballon" onClick={() => openModal("roofmen.jpg")}/>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false} // Fix for accessibility
                    > 
                    <img
                    src={selectedImage}
                    alt="enlarged"
                    style={{ width: "50%" }}
                    />
                    <button onClick={closeModal}>Close</button>
                    </Modal>
                </div>
            </h2>
          </div>
          <div id="contact">
          
          </div>
      </>
    );
  }