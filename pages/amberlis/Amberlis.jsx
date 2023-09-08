import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import backgroundImage from "../../assets/avatar2.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../../store/index";
import Slider from "../../components/slider/Slider";
import Banner from "../../pages/amberlis/Banner"

function Amberlis() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (

<Container>
      <Banner/>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
.scrolled {
    background-color: #004B41;
  }
  .hero {
    position: relative;
    .background-image {
      filter: brightness(15%);
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
          }
        }
      }
    }
  }
`;
export default Amberlis;


