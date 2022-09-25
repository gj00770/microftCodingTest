import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'



function Pages(props) {
  const navigate = useNavigate()
  const [pageHolder, setPageHolder] = useState([1, 2, 3, 4, 5])
  const [pageNum, setPageNum] = useState(0)
 
  useEffect(() => {
      console.log(props.totalPage)
    console.log(props.totalPage - pageNum * 5)
    let arr = []
    if (pageNum >= 0 && props.totalPage - pageNum * 5 >= 5) {
      console.log('1')
      for (let i = 1; i <= 5; i++) {
        arr.push(5 * pageNum + i)
      }
      setPageHolder(arr)
    } else if (props.totalPage - pageNum * 5 < 5) {
      console.log('2')
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

      {pageHolder.map((ele,key) => (
        <div key={key} onClick={()=>props.setPage(ele-1)}>{ele},</div>
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
