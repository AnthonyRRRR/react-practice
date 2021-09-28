import React from 'react';
import PropTypes from 'prop-types';
import HeaderNewsNav from './HeaderNewsNav';
import HeaderNewsList from './HeaderNewsList';
import HeaderCurrencyList from './HeaderCurrencyList';
import HeaderWidget from './HeaderWidget'

//Компонент отвечающий за новости и курс валют
const Header = (props) => {
  const newsNavigationItems = [
    {title:  'Сейчас в СМИ', link: '#', id: 1},
    {title:  'Сейчас в Германии', link: '#', id: 2},
    {title:  'Рекомендуем', link: '#', id: 3}
  ];
  const news = [
    {title: 'Роскомнадзор не стал блокировать Twitter',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
      link: '#',
      id: 1
    },
    {title: 'Губернатор Петербурга не исключил усиления ограничений из-за COVID-19',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
      link: '#',
      id: 2
    },
    {title: 'Newsweek: США создали секретную армию численностью порядка 60 тысяч человек',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
      link: '#',
      id: 3
    },
    {title: 'Прекращено дело экс-губернатора Ивановской области Михаила Меня',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
      link: '#',
      id: 4
    },
    {title: 'Задержанный за нападение на людей в Екатеринбурге находится на операции',
      icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
      link: '#',
      id: 5
    },

  ];
  const date = '31 июля, среда 02:32';
  const rate = [
    {currency: 'USD', value: 73.89, stocks: '−0.12'},
    {currency: 'EUR', value: 89.84, stocks: '-0,03'},
    {currency: 'НЕФТЬ', value: 69.54, stocks: '+1,05%'},
  ];
  const widget = {
    img: 'https://img.icons8.com/ios/452/widgetsmith.png',
    link: '#'
  }

  return (
    <div>
      <HeaderNewsNav newsNavigationItems={newsNavigationItems} date={date}/>
      <HeaderNewsList news={news}/>
      <HeaderCurrencyList rate={rate}/>
      <HeaderWidget widget={widget}/>
    </div>
  );
};

Header.propTypes = {};

export default Header