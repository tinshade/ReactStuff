import React from'react';
import './styles.css'
class Sidebar extends React.Component {
    constructor(props) {
      super(props)
    }
    
    handleMenuClicked = (event) => {
      event.preventDefault()
      this.props.onMenuClicked()
    }
    
    render() {
      const {isMenuOpened} = this.props
      return(
        <>
            <nav className={isMenuOpened ? 'menu' :'hideMenu'}>
              <a href="#4">Jump to About</a>
              <a href="#3">Jump to FAQ</a>
              <a href="#2">Jump to Footer</a>
            </nav>
           
          <div onClick={this.handleMenuClicked} className='contextMenu'>
          </div>
        </>
      )
    }
  }
  
  class SidebarExamples extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isMenuOpened: false
      }
    }
    
    onMenuClicked = () => {
      this.setState({
        isMenuOpened: !this.state.isMenuOpened
      })
    }
    
    render() {
      const {isMenuOpened} = this.state
      return (
        <div className='scrollingContainer'>
          <div className='section' id='1'>HOME</div>
          <div className='section' id='2'>ABOUT</div>
          <div className='section' id='3'>FAQ</div>
          <div className='section' id='4'>FOOTER</div>
          <div className='floating'>
            <Sidebar isMenuOpened={isMenuOpened} onMenuClicked={this.onMenuClicked}/>
          </div>
        </div>
      )
    }
  }
  

export default SidebarExamples;