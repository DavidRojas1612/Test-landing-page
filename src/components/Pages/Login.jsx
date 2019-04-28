import React, { Component } from 'react'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button';
import axios from 'axios'
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
        let user = {
          [field]: e.target.value.toLowerCase()
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

      executeLogin = async() => {
          const { user } = this.state
          try {
              
            const  dara = await axios.post(' http://localhost:3005/sign_in', user)
            console.log('dara',dara)
              
          } catch (error) {
              console.log('error', error)
          }
      }

      render(){
        return (
            <div className='form__customer'>
              <div className='form__customer__content l-container'>
                <Input
                  name='Nombre'
                  placeholder='Nombre'
                  theme='form__customer__input'
                  onKeyDown={e => this.handleInputForm(e, 'nombre')}
                />
                <Input
                  name='Apellido'
                  placeholder='Apellido'
                  theme='form__customer__input'
                  onKeyDown={e => this.handleInputForm(e, 'apellido')}
                />
                <Input
                  name='Email'
                  placeholder='Email'
                  theme='form__customer__input'
                  type="email"
                  onKeyDown={e => this.handleInputForm(e, 'email')}
                />
                </div>
                <Button 
                    theme="button--primary"
                    disabled={!this.state.valid}
                    onClick={this.executeLogin}
                >
                    Iniciar Sesion
                </Button>
            </div>
          )
      }
}

export default Login


