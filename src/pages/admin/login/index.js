import React, {
  Component
} from 'react'
import styles from './index.module.scss'
import axios from 'axios'
import md5 from 'md5'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(type, e) {
    this.setState({
      [type]: e.target.value
    })
  }
  componentWillMount(){
    if(!!localStorage.getItem('token')){
        this.props.history.push("/admin/home")
    }
  }
  handleLogin() {
    axios.post(
        '/tokens', {
          username: this.state.username,
          password: md5(this.state.password)
        })
      .then(res => {
        const data = res.data
        localStorage.setItem('token', data)
        this.props.history.push("/admin/home")
      })
      .catch(err => {
        const errorMsg = err.response.data.error
        alert(errorMsg)
      })

  }
  render() {
    return (
      <div className={styles['login-container']} >
          <section className={styles.form}>
                <span className={styles.slogan}>
                    <span> 博客系统后台 </span>
                </span>
              <input type="text" id="username" value={this.state.username}  onChange={(v)=>this.handleChange("username",v)} placeholder="用户名" />
              <input type="password" id="password" value={this.state.password}  onChange={(v)=>this.handleChange("password",v)} placeholder="密码" />
              <button id="login" onClick={this.handleLogin}>登录</button>
          </section>
      </div>
    )
  }
}
export default Login
