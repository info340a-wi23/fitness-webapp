import React from 'react';
import RenderExcercisePage from './ExcercisePage';

export default function CardList(props) {

  let sortedData = props.data;

  const content = sortedData.map((exercise, index) => {
    return (
      <div key={index} className="col-md-4">
        <DataCard data={exercise} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
      </div>
      <div className="row">
        {content}
      </div>
    </div>
  );
}

function DataCard({ data }) {
  return (
    <div className="card">
      <img src={data.imgSrc} alt={data.imgAlt} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{data.exerciseName}</h5>
        <p className="card-text">
          Image Source:{" "}
          <a href={data.imgSrcLink}>{data.imgSrcSite}</a>
        </p>
        <button className="btn btn-primary" onClick={RenderExcercisePage(data.exerciseNamereplace(/\s+/g, ''))}>
          Read more
        </button>
      </div>
    </div>
  );
}