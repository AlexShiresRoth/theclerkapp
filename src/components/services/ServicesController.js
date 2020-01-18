import React, { useEffect, useRef, useState } from "react";
import { services } from "./servicesArray";
import { MdClear } from "react-icons/md";
import { _throttle } from "lodash";
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

  const scrollServicesUp = (e, i) => {
    e.stopPropagation();
    setCurrentIndex(i - 1);
    if (serviceRef.current) {
      serviceRef.current.scrollTop = serviceRef.current.scrollTop -= serviceRef.current.getBoundingClientRect().height;
    }
  };
  const scrollServicesDown = (e, i) => {
    e.stopPropagation();
    setCurrentIndex(i + 1);
    if (serviceRef.current) {
      serviceRef.current.scrollTop = serviceRef.current.scrollTop += serviceRef.current.getBoundingClientRect().height;
    }
  };

  const breakFromFixedPosition = e => {
    if (e) e.stopPropagation();
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
    //set to top of services slides
    if (serviceRef.current) {
      serviceRef.current.scrollTop = 0;
    }
  };

  //On resize move to top of window and 0 index so the slides do not break
  const handleResize = () => breakFromFixedPosition();

  useEffect(() => {
    //resize breaks current scroll position of slides
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.7) {
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
      { rootMargin: "100px", threshold: 0.9 }
    );

    if (serviceRef.current) observer.observe(serviceRef.current);
    else observer.unobserve(serviceRef.current);

    return () => {
      observer.unobserve(serviceRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={servicesStyles.services__container}
      ref={serviceRef}
      style={{ ...containerStyle }}
    >
      {containerStyle.position === "fixed" ? (
        <button
          className={servicesStyles.close__button}
          onClick={e => breakFromFixedPosition(e)}
        >
          <MdClear />
        </button>
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
