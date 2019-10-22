import React, { useState } from 'react'
import './input.css'

const InputElement = () => {

  const [inputText, setInputText] = useState('')
  const [historyList, setHistoryList] = useState([])

  return (
    <div>
      <div className="input-container">
        <input
          onChange={(e) => {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
          }}
          placeholder="Enter some text..." />
      </div>
      <div>{inputText}</div>
      <div>
        <ul>
          {historyList.map((rec) => {
            return <div>{rec}</div>
          })}
        </ul>
      </div>
    </div>
  )
}

export default InputElement
