import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'

function Item() {
  return (
    <div>
      <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMDdfMTE2/MDAxNDgzNzU1MDMyNTc0.hx5KAnplO4tzx7gyHo0OXzPvyCH5h7gfLjMf-S5qamAg.oUP8V58A0P0ZybvJw_-Dq57FbxOxV9o1MU4tRdnbORwg.JPEG.candle_yt/4.jpg?type=w800"></img>
    </div>
  )
}

function Pages(props) {
  const [pageHolder, setPageHolder] = useState([1, 2, 3, 4, 5])
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    let arr = []
    if (pageNum >= 0 && props.totalPage - pageNum * 5 >= 5) {
      for (let i = 1; i <= 5; i++) {
        arr.push(5 * pageNum + i)
      }
      setPageHolder(arr)
    } else if (props.totalPage - pageNum * 5 < 5) {
      for (let i = 1; i <= props.totalPage - pageNum * 5; i++) {
        arr.push(5 * pageNum + i)
      }
      setPageHolder(arr)
    }
  }, [pageNum])
  return (
    <PagesContainer>
      {pageNum === 0 ? null : (
        <Arrow onClick={() => setPageNum(pageNum - 1)}>prev</Arrow>
      )}

      {pageHolder.map((ele, key) => (
        <Number
          key={key}
          onClick={() => props.setPage(ele - 1)}
          current={ele - 1 === props.page}
        >
          {ele}
        </Number>
      ))}
      {Math.ceil(props.totalPage / 5) === pageNum + 1 ? null : (
        <Arrow onClick={() => setPageNum(pageNum + 1)}>next</Arrow>
      )}
    </PagesContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(Pages)

const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const Arrow = styled.div``

const Number = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  color: ${(props) => (props.current ? 'blue' : 'black')};
  cursor: pointer;

  font-weight: ${(props) => (props.current ? 'bolder' : 'normal')};
`
