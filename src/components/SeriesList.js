import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Link } from 'gatsby';
import qs from 'qs';

const SeriesList = ({
  products = [],
  items,
  count,
  series,
  setSeries,
  onseriesClick,
  aggregatedSeries,
  seriesKeys,
}) => {
  console.log(seriesKeys);
  console.log(aggregatedSeries);
  return (
    <Wrapper>
      {series.length > 0 && <button onClick={() => setSeries([])}>削除</button>}
      {/* {NewSeries.map((NewTag, index) => { */}
      {console.log(series)}
      {seriesKeys.map(c => (
        <button
          key={c}
          className={series.includes(c) ? `selected` : ``}
          onClick={() => {
            if (series.includes(c)) {
              setSeries(series.filter(f => f !== c));
            } else {
              setSeries([...series, c]);
            }
          }}
        >
          <div>
            {series.includes(c) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
          <div /*sx={{ mr: `auto` }}*/>{c}</div>
          <div>{aggregatedSeries[c]}</div>
        </button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 10%;
  display: flex;
  flex-direction: column;
  line-height: 1.67;
  button {
    display: flex;
    align-items: center;
    height: 2.5rem;
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
`;

export default SeriesList;