import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchMovies, getGenres } from '../../store/index'
import { firebaseAuth } from '../../utils/firebase-config'
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import Navbar from '../../components/navbar/Navbar'
import Slider from "../../components/slider/Slider";
import NotAvailable from "../../components/notAvailable/NotAvailable";
import SelectGenre from "../../components/selectGenre/SelectGenre";
import CardSlider from '../../components/cardSlider/CardSlider';



const MoviePage = () => {

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
      dispatch(fetchMovies({ genres, type: "movie" }));
    }
  }, [genresLoaded]);

  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };



  return (

    <Container>
<div className='navbar'>
  <Navbar isScrolled={isScrolled}/>
</div>

<div className='data'>
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>

</Container>
);
}


const Container = styled.div`
 .data {
  margin-top: 8rem;
  .not-available{
    text-align: center;
    color: #ffffff;
    margin-top: 4rem;
  }
 }

`;

export default MoviePage
