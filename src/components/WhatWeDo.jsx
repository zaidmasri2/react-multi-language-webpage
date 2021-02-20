import React, { Fragment } from "react";
import ReactHtmlParser from "react-html-parser";

const WhatWeDo = (props) => {
  let content = {
    English: {
      title: "What We Do",
      whatWeDo: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>`
    },
    Arabic: {
      title: "الذي نفعله",
      whatWeDo: `<p>لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان  هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت عليه لصنع كتاب عينة من النوع.</p>
      <p>لقد نجت ليس فقط خمسة قرون ، ولكن أيضًا القفزة في التنضيد الإلكتروني ، وظلت دون تغيير جوهري.</p>
      `
    }
  };

  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.English);

  return (
    <Fragment>
      <h2>{content.title}</h2>
      <hr /> {ReactHtmlParser(content.whatWeDo)}
    </Fragment>
  );
}

export default WhatWeDo;