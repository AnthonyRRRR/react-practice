import React from 'react';
import PropTypes from 'prop-types';
import WeatherWidget from './WeatherWidget';
import GermanyWidget from './GermanyWidget';
import VisitedWidget from './VisitedWidget';
import TvProgramWidget from './TvProgramWidget';
import LiveWidget from './LiveWidget';

const InformationBlock = (props) => {
  const weather = {
    img: 'https://yandex-pogoda.clstorage.net/e158g6n64/73561c1W0/uh-tp63gcmIkeOedSM8XlEhuEi2DF7mKkWIUedQeuuZBDhWx6KgXLXdP6lz-ZvK90q31ePn_EwHmQU5QUGIMjOYL9ZaR-AKT4UDL2GgLR5xcAqrU9xI5jo1W_PRgulJy5TuViRgc99SrB2KM6iNy2Vq5JSRNO5PRTiV24CSKjDg--9UvkXx6y0zc04goN7ckEOYqpLMG5RqhFnyA3FYOmn1_9WXYkINcg-OWzKpzauXSdcnYcbNL-XqlgqyQyoA0zvN1a2nQMofMFFPofF-vlJyaJrD75mXuTQ7IXAiquvapU3WtePD_eKvXJrAup6KR6gGBwFnHy6WOEU70cPLsYD4nQdM1ELJPmOi_cPhbzxykiu5oa_6Zzq3-yID0UiryvfPtOQy416hrK87UlpeCGaIlVag9k1NtPh0CKLy-JJzypzn_vSD23yRYa2SUrxtAUCoC1KsGlRap_giUTNL2-lkLidl40AdkB2ciiIajDlFWbQGwQde_0ZbtpnhATsgUWl8lx_3wkrtc2LsY1JdXCPgunmwz_qXKKbYAJADSanbRU2EVlPC78F8XAjA2SyJZTvlVJLWj_7F2AdoE0IrcME6DMe-l7GJjuETPRMij06Cs9s5cHxZReo3ypKBAjqq2pQOFwSwQvyDPiy5YDmtWPUKtVSD579sZ7hECCEw-4LzKo01bpQRGz5RYL3BkywcoOO4C7OOmbfK5ChikIELq0i07ZSHYvJu0K9-GsBbr3uUGgV2kzeMXsf6R5hwc6riAZrMBl7UMTuckyJdUnPe3gPAeFjSfesm6ET5M3LTesu5BO5mVLCQjtNeHrsxezwJFStXd3LHPz2VyxULIOH5wSJbPVb_xBIbPRPBPDMSXt0AkAppEq4pdNqEC9HDUgi5OOYOh2XSsU-gLZy7ELtuGRT41kczNH3P5SulmkMSG2DTWk4X7BayWB3ycf6xMH0esfEKOSNeSVRJFZngkxJ7-mlkrEUnoIJPk1w_inJpnTtGa8dXQoVd_UWphLuCgnvAgQkux1zH48rNQeJOAfCdPWHCK5rQHarXKiQJEEHS6Boph14GFxKyPIK9jLpgiS4LZKu3t0FV__2VKGdJYtJZcIHqzRW9NIOIr2AS_WESjV6yMWqYAk-aRIsFyADB85iZ-UX-RmfR0dyxft-qA0vMGmZYVLbypZw_xOsVW5CSS1AC-o923-ZyaL4TYW3joj2fcAKYmaHMuWSJVkpCcgJKuco37ccF4AHfs55ea8MpfUrnulU08Zbu3aWIx3py0TnzoUqfVq_kElsfQBDdUNEOHvNDq2gSzfq2y2ZqMlORewmr5i_WZHBC7qIfLatQmky51mu2hkLFDQ6k-HdYMyHZQ4Oq7Qcv5lLJjMMiTyCQjh8xE0ubII3KR7i3uZOSwvjJWMQ9pTWgA5-wbowLsIiP2-aqtLcBJS9d5QumyVNTWDCB6EzHPAajOB6zkO3DYD4sswGqOBHei4fINavTw1Cb67g1_YVlAjOcozweKCGLXwmlOJTUItUuPRX4tqkiUdiysViN1L_EoxmPU8P8o7HvnuLD2luALiuXGTdKMaPzWVg59L30hYBCvqC-f6rQi8wbBtpXJuE13fynmpWIE3N7gtHaP_Z99eOZ_TEznnHCbmyzAlmb4Z2bZpgkCHJg0PnqOLa81VeR4D7yPw15ArreWKQ4tpbxJ_3_pEoUK-Ox-MBzSRyFL5ZS--0DsY4iwp6v4vMZKVJuaXRaVQoRsRL7GngmjYTkcDPMsd8-e7M5zAiUSeTUgaTu37fIdioj4gowgBiNlX-lYXguYAK_EeCubFACepqD_cu160RowOKju9grJi-ElkPwPrBPLdgwO5x7FSmElPNV3W3XmVYrEpNIs2LbHUcex-AKnRFgTHNSbt6Q05rr463LN6kWOeIjITl5isd8xoXicj7ivy3IEYp9GPeLVDQx5x0O1EoWuYKSSdDzuA8U3FRBi55gQqwzQ-xsgfAo2tCPuRYKBVpgI1CZSylU_5UkkEIv4x5OGTJIr8s2urcVkVVtzUUKhVmg8YiQwmls9r6WMvmeAZOOEoHsXIPjyivgLarkyQcJIOEheur49XwVRnJgDzM9fVpTCO6qtjqnJUEXj_z16WabopP58zBZbTSd9AIbrBOj7-FBXM5w4RhroO6ohpgHmIJR8JjraWUf5lchgGxRPr0r8pp9ePbKJMWS1z5PJnoE-_FjOtETaR3HHCdSWD6CIw0jM15-8PCo6xFuW3W4tbrjwwBo6vlU3PV0oZOu0W4teeKZL8qEmoYW4UU8rbfZVJshcTqCADodpR5EMbjNYhGd0qINjTACmtjTvWtESRcqweIwa5orRM2XVqKiPcBefzvwmaxKVgmVRWKVLT_WKwfIE5AJcENLDodtl-HIrOESv0JCzz8RYclog1wIxhq0WEHCk0ubWfXNh3ViI3yxTl-qQaqNqOWqtSZjRR7815oUqfNBeNGjGN61TAZRSM1QgN6RQD2M4iMJK9Ce2lfrFfqAYfG5SHklnYbX81If4HwsOHGrzBimqGT1M-Vvf9ca1ipDc7kAknj898-2kMtcYhP8AZCuTVKBSWmgr9uGmvbaMjLiO1hYxdyFldIAbSMPPAkgqO8aZlvFFnJXj-9UK7YKQzH5clBI7RZfhcGK_SPyziPj7Izxwai7IsxLZktFCAKigzj7axfMdtVR0AyDT2x5sWhMeYUoFYVzRv4c9ehFy3GjCAEBqy1WrddBS0zz0e9zAB08o_P5KfIdqLcrFGqR4_KL28rXzcQnsuBs8Wz_-zOof9qXqpaWQ4fNblT7VyticwgxAbivNv_nsgt_caCMkrM-bBCSqWkyTZgmiXc4YmLwOPlr9i3mxeNyjaIcXLhziV3LI#DSD',
    day: '+20',
    morning: '+17',
    now: '+20',
    link: '#'
  }
  const germanyMap = {
    link: '#', title: 'Карта Германии'
  };
  const schedule = {
    link: '#', title: 'Расписание'
  };
  const visitedTitle = { title: 'Посещаемое', link: '#' };
  const visited = [
    { title: 'Недвижимость', subtitle: 'о сталинках', link: '#' },
    { title: 'Маркет', subtitle: 'люстры и светильники', link: '#' },
    { title: 'Авто.ру', subtitle: 'привод 4х4 до 500 000', link: '#' }
  ];
  const tvProgramTitle = { title: 'Программа', link: '#' };
  const tvProgram = [
    { time: '02:00', programName: 'ТнТ.Best', tvChannel: 'ТнТ', link: '#' },
    { time: '02:15', programName: 'Джинглики', tvChannel: 'Карусель', link: '#' },
    { time: '02:25', programName: 'Наеденине', tvChannel: 'Первый', link: '#' }
  ];
  const liveTitle = {title: 'Эфир', link: '#'};
  const live = [
    {img: 'https://img.icons8.com/windows/452/youtube-live.png', title: 'Управление как искусство', channel: 'Успех', link: '#'},
    {img: 'https://img.icons8.com/windows/452/youtube-live.png', title: 'Ночной эфир', channel: 'earthTV', link: '#'},
    {img: 'https://img.icons8.com/windows/452/youtube-live.png', title: 'искусство', channel: 'TV', link: '#'},
  ]

  return (
    <div>
      <WeatherWidget weather={ weather }/>
      <GermanyWidget germanyMap={ germanyMap } schedule={ schedule }/>
      <VisitedWidget visitedTitle={ visitedTitle } visited={ visited }/>
      <TvProgramWidget tvProgramTitle={ tvProgramTitle } tvProgram={ tvProgram }/>
      <LiveWidget liveTitle={liveTitle} live={live}/>
    </div>
  );
};

InformationBlock.propTypes = {};

export default InformationBlock