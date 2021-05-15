import React, { useState, FormEvent } from "react";
import { Container, Form, Error, MessageError } from "./styles";

import api from "../../services/api";
import { apiKey } from "../../ultis/KeyApi";
import { BsSearch } from "react-icons/bs";

interface IResponseImage {
  farm: string;
  server: string;
  id: string;
  secret: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [imgSearch, setImgSearch] = useState("");
  const [images, setImages] = useState([]);
  const [inputError, setInputError] = useState("");

  async function handleImageGallery(e: FormEvent) {
    e.preventDefault();
    try {
      if (!imgSearch) {
        return setInputError("Digite algo poxa :(");
      }

      const response = await api.get(
        `/?method=flickr.photos.search&api_key=${apiKey.key}&tags=${imgSearch}&per_page=38&format=json&nojsoncallback=1`
      );
      const imagesGallery = response.data.photos.photo;
      setImages(imagesGallery);
      setImgSearch("");
      setInputError("");
    } catch (error) {
      setInputError("Error ao buscar imagem");
    }
  }
  console.log(images);

  return (
    <>
      <Form hasError={!!inputError}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={imgSearch}
          onChange={(e) => setImgSearch(e.target.value)}
        />
        <button onClick={handleImageGallery}>
          <BsSearch size={20} />
        </button>
      </Form>
      {inputError && <Error>{inputError} </Error>}

      <Container>
        {images.length > 0 ? (
          <ul>
            <li>
              {images.map((img: IResponseImage) => {
                let farm = img.farm;
                let server = img.server;
                let id = img.id;
                let secret = img.secret;
                let title = img.title;
                let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                return <img src={url} alt={title} key={id} />;
              })}
            </li>
          </ul>
        ) : (
          <MessageError>Image not found </MessageError>
        )}
      </Container>
    </>
  );
};

export default Gallery;
