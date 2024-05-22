import React from "react";

const CampusImages = () => {
  const campusData = [
    {
      imgSrc: "assets/images/campus-images/campus-image1.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image2.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image3.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image4.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image5.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image6.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image7.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image8.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image9.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image10.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image12.jpg",
    },
    {
      imgSrc: "assets/images/campus-images/campus-image13.jpg",
    },
  ];

  const classRooms = [
    {
      imgSrc: "assets/images/classrooms/classroom1.jpg",
    },
    {
      imgSrc: "assets/images/classrooms/classroom2.jpg",
    },
    {
      imgSrc: "assets/images/classrooms/classroom3.jpg",
    }
  ]

  const amphitheater = [
    {
      imgSrc: "assets/images/amphi-theater/amphitheater1.jpg",
    },
    {
      imgSrc: "assets/images/amphi-theater/amphitheater2.jpg",
    },
    {
      imgSrc: "assets/images/amphi-theater/amphitheater3.jpg",
    },
  ]

  const foodcourt = [
    {
      imgSrc: "assets/images/food-court/foodcourt1.jpg",
    },
    {
      imgSrc: "assets/images/food-court/foodcourt2.jpg",
    },
    {
      imgSrc: "assets/images/food-court/foodcourt3.jpg",
    },
  ]

  const auditorium = [
    {
      imgSrc: "assets/images/auditorium/Auditorium1.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium2.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium3.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium4.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium5.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium6.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium7.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium8.jpg",
    },
    {
      imgSrc: "assets/images/auditorium/Auditorium9.jpg",
    },
  ]

  const conferencehall = [
    {
      imgSrc: "assets/images/conference-hall/Conference1.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference2.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference3.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference4.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference5.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference6.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference7.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference8.jpg",
    },
    {
      imgSrc: "assets/images/conference-hall/Conference9.jpg",
    }
  ]

  return (
    <section className="tl-4-innovs tl-3-section-spacing">
      <div className="container">
        <div className="tl-4-innovs-heading">
          <h2 className="tl-4-section-title">SGU Campus</h2>
        </div>

        <p className="tl-4-innovs-heading-txt">Campus @ SGU</p>
        <div className="row tl-7-classes-row">
       
          {campusData.map((classItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={classItem.imgSrc} alt="Campus Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <p className="tl-4-innovs-heading-txt">Classrooms</p>
        <div className="row tl-7-classes-row">
       
          {classRooms.map((classItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={classItem.imgSrc} alt="Classrooms Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <p className="tl-4-innovs-heading-txt">Amphi Theater</p>
        <div className="row tl-7-classes-row">
       
          {amphitheater.map((amphiItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={amphiItem.imgSrc} alt="Amphi Theater" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <p className="tl-4-innovs-heading-txt">Food Court</p>
        <div className="row tl-7-classes-row">
       
          {foodcourt.map((foodcourtItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={foodcourtItem.imgSrc} alt="Food Court" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <p className="tl-4-innovs-heading-txt">Auditorium</p>
        <div className="row tl-7-classes-row">
       
          {auditorium.map((auditoriumItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={auditoriumItem.imgSrc} alt="Auditorium" />
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <p className="tl-4-innovs-heading-txt">Conference Hall</p>
        <div className="row tl-7-classes-row">
       
          {conferencehall.map((conferenceItem, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={conferenceItem.imgSrc} alt="Conference Hall" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusImages;
