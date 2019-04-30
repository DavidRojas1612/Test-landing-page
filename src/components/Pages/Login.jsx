import React, { Component } from 'react'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button';
import { connect } from 'react-redux'
import { logIn } from '../../actions'
import './Login.scss'
import logo  from './../../assets/logo_full_color.svg'
class Login extends Component {
    state = {
        user: {
          nombre: '',
          apellido: '',
          email: '',
        },
        valid: false
      }
  
      handleInputForm = (e, field) => {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        let user = {
          [field]:  field === 'email'
          ? emailRegex.test(e.target.value.toLowerCase())
            ? e.target.value
            : ''
          :e.target.value.toLowerCase()
        }
        this.setState(
          state => {
            return {
                user: { ...state.user, ...user }
            }
          },
          () => {
            const { user } = this.state
            let valid = Object.keys(user)
              .map(field => user[field])
              .every(field => field.length > 0)

            this.setState({
              valid: valid ? true : false
            })
           
          }
        )
      }

      executeLogin = () => {
        const { logIn } = this.props
        const { user } = this.state
        logIn(user)
      }

      render(){
        return (
            <section className='login'>
                <div className="login__container">
                  <img  className="login__img" src={logo} alt=""/>
                </div>
              <div className='login__container l-container'>
                <Input
                  name='Nombre'
                  placeholder='Nombre'
                  theme='login__input'
                  onChange={e =>(this.handleInputForm(e, 'nombre'))}
                />
                <Input
                  name='Apellido'
                  placeholder='Apellido'
                  theme='login__input'
                  onChange={e => this.handleInputForm(e, 'apellido')}
                />
                <Input
                  name='Email'
                  placeholder='Email'
                  theme='login__input'
                  type="email"
                  onChange={e => this.handleInputForm(e, 'email')}
                />
                <div className="input input__button">
                  <Button 
                      theme="button--primary"
                      disabled={!this.state.valid}
                      onClick={this.executeLogin}
                  >
                      Iniciar Sesion
                  </Button>
                </div>
                </div>
            </section>
          )
      }
}

const mapDispatchToProps = dispatch => ({
    logIn: (data) => dispatch(logIn(data))
})

export default connect(
    null,
    mapDispatchToProps
)(Login)
  

