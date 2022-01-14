import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './SignIn/SignIn';
import Register from './components/Register/Register';
import Clarifai from 'clarifai'

// const app = new Clarifai.App({
//   apiKey: ''
// })

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignenIn: false
    }
  }

  calculateFaceLocation = (boundingBox) => {

  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    console.log('Click!');
    // app.models.predict('aaa03c23b3724a16a56b629203edc62c', `${this.state.imageUrl}`)
    //   .then(
    //     response => {
    //       this.calculateFaceLocation(response)
    //     }
    //   )
    //   .catch(err=>console.log(err))
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignenIn: false })
    } else if (route === 'home') {
      this.setState({ isSignenIn: true })
    }
    this.setState({ route: route })
    return route
  }

  render() {
    return (
      <div className='App'>
        <Navigation onRouteChange={this.onRouteChange} isSignenIn={this.state.isSignenIn} theRoute={this.state.route} />
        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
            <FaceRecognition />
          </div>
          : (this.state.route === 'signin' ?
            <SignIn onRouteChange={this.onRouteChange} />
            : (this.state.route === 'signout' ?
              <SignIn onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
            )
          )}

      </div>
    );
  }
}

export default App;
