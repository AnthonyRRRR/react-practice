import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import ProjectsList from '../ProjectsList/ProjectsList';
import './Portfolio.css'

const Portfolio = (props) => {
  const categories = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const projects = [
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
      category: 'Business Cards'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
      category: 'Business Cards'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
      category: 'Flayers'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
      category: 'Business Cards'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
      category: 'Websites'
    }, {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
      category: 'Flayers'
    }]

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);


  useEffect(() => {
    setFilteredProjects(projects.filter((project) => project.category === selectedFilter || selectedFilter === 'All'))
  }, [selectedFilter])


  return (
    <div className="Portfolio">
      <Toolbar filters={ categories } onSelectFilter={ setSelectedFilter } selectedFilter={ selectedFilter }/>
      <ProjectsList projects={ filteredProjects }/>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio