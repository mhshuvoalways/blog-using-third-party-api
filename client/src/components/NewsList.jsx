import React from "react";

function getDateString(dateTimeStr) {
  return new Date(dateTimeStr).toDateString();
}

const NewsItem = React.forwardRef(({ item }, ref) => (
  <div ref={(el) => ref.push(el)} className="card mb-4">
    {item.urlToImage && (
      <img
        className="card-img-top"
        src={item.urlToImage}
        alt={item.urlToImage}
      />
    )}
    <div className="card-body">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#424242" }}
      >
        <h5 className="card-title">{item.title}</h5>
      </a>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#424242" }}
      >
        {item.content}
      </a>
      <div className="mt-2 d-flex align-item-center">
        <small>
          <strong>Published at {getDateString(item.publishedAt)}</strong>
        </small>
        <div
          style={{
            padding: "0.25rem 0.5rem",
            background: "#ededed",
            color: "#424242",
            borderRadius: "0.25rem",
            display: "inline-block",
          }}
          className="ml-auto"
        >
          <small>{item.source.name}</small>
        </div>
      </div>
    </div>
  </div>
));

const NewsList = React.forwardRef(({ news }, ref) => {
  return (
    <div>
      {news && news.length === 0 && <h4>There is no News</h4>}
      {news &&
        news.map((item, index) => (
          <div key={index}>
            <NewsItem ref={ref} item={item} />
          </div>
        ))}
    </div>
  );
});

export default NewsList;
