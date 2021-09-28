import React from 'react';
import PropTypes from 'prop-types';
import SearchBlockServicesList from './SearchBlockServicesList';
import SearchForm from './SearchForm';
import AdBlock from './AdBlock';

//блок поиска
const SearchBlock = (props) => {
  const services = [
    {title: 'Видео', link: '#'},
    {title: 'Картинки', link: '#'},
    {title: 'Новости', link: '#'},
    {title: 'Карты', link: '#'},
    {title: 'Маркет', link: '#'},
    {title: 'Переводчик', link: '#'},
    {title: 'Эфир', link: '#'},
    {title: 'еще', link: '#'},
  ];
  const logo = {
    link:'https://i0.wp.com/levencovka.ru/wp-content/uploads/2021/03/%D0%BB%D0%BE%D0%B3%D0%BE5.jpg?resize=1110%2C413&ssl=1'
  };
  const searchExample = {
    link: '#',
    example: 'фаза луны сегодня'
  };
  const adBanner = {
    link: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/study-abroad-online-free-webinar-ad-design-template-df137e6c9d02b1b8894fd6e70f4731fd_screen.jpg?ts=1599802207',
  }


  return (
    <>
      <SearchBlockServicesList services={services}/>
      <SearchForm logo={logo} searchExample={searchExample}/>
      <AdBlock adBanner={adBanner}/>
    </>
  );
};

SearchBlock.propTypes = {};

export default SearchBlock