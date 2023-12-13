import "./styles.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import NavBar from "./components/NavBar";
import "./fonts/JosefinSans-VariableFont_wght.ttf"
import PdfViewer from "./components/PdfViewer";
import Loading from './components/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate data fetching
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setLoading(false);
    };

    fetchData();
  }, []);

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
        <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div id="about">
            <h2 id="first">
                Hi ! I am Palli.
                <br />
                <br />
                I am a versatile professional with a double interest
                in computer science and digital art. 
                <br />
                <br />
                Throughout my journey as a Computer Scientist,
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
                    <img src="greenorange.jpg" alt="greenorange" onClick={() => openModal("greenorange.jpg")}/>
                    <img src="reddoor.jpg" alt="reddoor" onClick={() => openModal("reddoor.jpg")}/>
                    <img src="roofmen.jpg" alt="roofmen" onClick={() => openModal("roofmen.jpg")}/>
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false} // Fix for accessibility
                    style={{ 
                        overlay: {
                            position: 'fixed',
                            margin: 'auto',
                            backgroundColor:'rgba(54, 175, 215, 0.3)',
                            padding: '0'

                        },
                        content: {
                            position: 'absolute',
                            margin: 'auto',
                            backgroundColor:'rgba(245, 40, 145, 0)',
                            display: 'flex',
                            border: '1px none',
                            borderRadius: '60px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 'fit-content'
                        }
                     }}
                    > 
                    <img
                    src={selectedImage}
                    alt="enlarged"
                    style={{ width: '400px' }}
                    />
                    </Modal>
                </div>
            </h2>
          </div>
          <div id="contact">
            <h2 id="third">
            Thank you for visiting, and I look forward to engaging with fellow enthusiasts, 
            professionals, and potential collaborators in both computer science and digital art.
            <br />
            <br />
            You can contact me on 
            <motion.div 
            whileHover={{ rotate: 0.2 }}
            >
                <h3>palliasgeir(at)gmail.com</h3>
            </motion.div> 
            or give me a call:
            <motion.h3 
            whileHover={{ rotate: 0.2 }}
            >
                <h3 id="phone">+354 824 8916</h3>
            </motion.h3>
            </h2>
            <div id="pdfviewer">
                <PdfViewer/>
            </div>
            
          </div>
      </>
      )}
      </div>
    );
  }