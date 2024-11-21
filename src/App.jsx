import React from "react";
import "./App.css";

const artImages = [
  {
    id: 1,
    src: "/images/art1.jpeg",
    title: "Art 1",
    artist: "Ashlesham",
    design: "Abstract Design",
  },
  {
    id: 2,
    src: "/images/art2.jpeg",
    title: "Art 2",
    artist: "Ashlesham",
    design: "Minimalist Theme",
  },
  {
    id: 3,
    src: "/images/art3.jpeg",
    title: "Art 3",
    artist: "Ashlesham",
    design: "Modern Art",
  },
  {
    id: 4,
    src: "/images/art4.jpeg",
    title: "Art 4",
    artist: "Ashlesham",
    design: "Surrealism",
  },
];

const App = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Ashlesham's Art Gallery</h1>
      <div className="gallery-grid">
        {artImages.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-info">
              <p className="image-title">{image.title}</p>
              <p className="image-artist">Artist: {image.artist}</p>
              <p className="image-design">Design: {image.design}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
