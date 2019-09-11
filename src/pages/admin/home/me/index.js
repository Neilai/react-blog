import React, {
  Component
} from 'react'
import styles from './index.module.scss'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'

class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
    this.changeContent = this.changeContent.bind(this)
    this.changeMe = this.changeMe.bind(this)
  }
  changeContent(v) {
    this.setState({
      content: v
    })
  }
  changeMe() {
    axios.put(
        `/briefs/${this.id}`, {
          content: this.state.content
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
      .then(() => alert('修改成功'))
      .catch(err => alert(err))
  }
  componentDidMount() {
    axios.get(`/briefs`)
      .then(res => {
        this.setState({
          content: res.data[0].content
        })
        this.id = res.data[0].id
      })
      .catch(err => alert(err))

  }
  render() {
    return (
      <div className={`about-container ${styles.main}`}>
        <h4>关于我 /
            <span>ABOUT ME</span>
        </h4>
        <hr/>
        <main>
          <SimpleMDE  value={this.state.content} onChange={this.changeContent} />
            <section className='btn-container'>
                <button className="not-del" onClick={this.changeMe}>提交修改</button>
            </section>
        </main>
    </div>
    )
  }
}
export default Me
