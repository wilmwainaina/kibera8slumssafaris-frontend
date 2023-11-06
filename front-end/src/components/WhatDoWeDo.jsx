

import React from "react";
import OurCoreValues from "./OurCoreValues";

function WhatDoWeDo() {
  return (
    <div>
    <div className=" relative mt-20 w-4/5 ml-52 ">

      <section className="light">
        <div className="container py-2">
        <div className="h1 text-center text-dark" id="pageHeaderTitle">WHAT DO WE DO?</div>


          <article className="postcard light blue">
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue"><a href="#">What do we do</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos</div>
              <a className="postcard__img_link" href="#">
            </a>

            </div>
            <img className="postcard__img" src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg" alt="Image Title" />

          </article>
        </div>
      </section>
      <section className="light">
        <div className="container py-2">

          <article className="postcard light blue">
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue"><a href="#">What do we do</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos</div>
              <a className="postcard__img_link" href="#">
            </a>

            </div>
            <img className="postcard__img" src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg" alt="Image Title" />

          </article>
          
        </div>
      </section>


    </div>
    <OurCoreValues/>

    </div>
  );
}

export default WhatDoWeDo;
