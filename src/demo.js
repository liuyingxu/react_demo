import React, {Component} from 'react'

class Demo extends Component {
  constructor() {
    super()
    this.state = {
      list: ['1', '2', '3', '4']
    }
  }
  render() {
    return (
      <div className="demo">
        <ul>
          {
            this.state.list.map((val, index) => (
              <li key={index}>{val}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Demo