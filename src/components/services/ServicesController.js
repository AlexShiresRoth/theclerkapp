import React, { useEffect, useRef, useState } from "react";
import { services } from "./servicesArray";
import { MdClear } from "react-icons/md";
import servicesStyles from "./servicesstyles/ServicesController.module.scss";
import ServicesIndexMarker from "./ServiceIndexMarker";
import ServicesMap from "./ServicesMap";

const ServicesController = () => {
  const [containerStyle, setContainerStyle] = useState({
    position: "",
    top: "0px"
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceRef = useRef();
  const animationRef = useRef();

  const scrollServicesUp = () => {
    if (serviceRef.current) {
      setCurrentIndex(prevIndex => (prevIndex -= 1));
      serviceRef.current.scrollTop = serviceRef.current.scrollTop -= serviceRef.current.getBoundingClientRect().height;
      animationRef.current = requestAnimationFrame(scrollServicesUp);
    }
  };
  const scrollServicesDown = () => {
    if (serviceRef.current) {
      setCurrentIndex(prevIndex => (prevIndex += 1));
      serviceRef.current.scrollTop = serviceRef.current.scrollTop += serviceRef.current.getBoundingClientRect().height;
      animationRef.current = requestAnimationFrame(scrollServicesDown);
    }
  };

  const breakFromFixedPosition = e => {
    setContainerStyle({
      position: "",
      top: "0"
    });
    //restart index on exit
    setCurrentIndex(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (serviceRef.current) {
      serviceRef.current.scrollTop = 0;
    }
    animationRef.current = requestAnimationFrame(breakFromFixedPosition);
    cancelAnimationFrame(animationRef.current);
  };

  //On resize move to top of window and 0 index so the slides do not break
  const handleResize = () => breakFromFixedPosition();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentIndex(0);
          setContainerStyle({
            position: "fixed",
            top: "0rem"
          });
        } else {
          setContainerStyle({
            position: "",
            top: ""
          });
        }
      },
      { rootMargin: "0px", threshold: 0.9 }
    );

    if (serviceRef.current) observer.observe(serviceRef.current);
    else observer.unobserve(serviceRef.current);

    cancelAnimationFrame(animationRef.current);

    //resize breaks current scroll position of slides
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={servicesStyles.services__container}
      ref={serviceRef}
      style={{ ...containerStyle }}
    >
      {containerStyle.position === "fixed" ? (
        <div
          className={servicesStyles.close__button}
          onTouchStart={e => breakFromFixedPosition(e)}
          onClick={e => breakFromFixedPosition(e)}
        >
          <MdClear />
        </div>
      ) : (
        <div className={servicesStyles.close__button__hidden}></div>
      )}
      <ServicesMap
        scrollServicesUp={scrollServicesUp}
        scrollServicesDown={scrollServicesDown}
        currentIndex={currentIndex}
      />
      {containerStyle.position === "fixed" ? (
        <ServicesIndexMarker index={currentIndex} services={services} />
      ) : null}
    </div>
  );
};

export default ServicesController;
