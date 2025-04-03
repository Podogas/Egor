import React from "react";
import "./Presentation.css";
import photo1 from '../media/onlyEgor/egorAndMe.jpg'


const PhotoGallery = () => {
  return (
        <div className="photo-section">
          <img src={photo1} alt="Егор и я" className="photo" />
          <p className="caption">Егор, поздравляю тебя с 29-летием! Очень жаль, что мы не можем встретиться, но осталось не так уж долго, и мы увидимся вживую. Я безумно рад, что у меня есть такой друг, как ты, и каждый раз, когда думаю о том, чем хороша моя жизнь, мне приходит в голову мысль о том, что у меня есть ты!
          </p><p className="caption">Но я уверен, что ты и так всё это знаешь. Я очень хочу, чтобы у тебя всё было хорошо, чтобы во всех сферах жизни ты развивался, узнавал новое и проживал каждый день, чувствуя все грани и оттенки этой жизни!
          </p>
          <p className="caption">С днём рождения, мой брат по выбору!</p>
        </div>
  );
};

export default PhotoGallery;
