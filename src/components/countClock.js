import React from "react";

class CountClock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      timer: this.props.timer,
      status: this.props.status
    }
    this.countDown = this.countDown.bind(this);
    this.toggleCountDown = this.toggleCountDown.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
  }

  componentDidMount() {
    this.setTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  componentDidUpdate() {
    // console.log('component did update')
  }

  countDown() {
    if (this.state.timer === 1) {
      clearInterval(this.interval)
      this.setState(prevState => ({
        timer: prevState.timer - 1,
        status: 2
      }))
    } else {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
        status: 0
      }))
    }
  }

  setTimer = () => {
    this.interval = setInterval(() => {
      this.countDown()
    }, 1000)
  }

  clearTimer() {
    clearInterval(this.interval)
  }

  toggleCountDown() {
    switch (this.state.status) {
      case 1:
        this.setTimer()
        this.setState({ status: 0 })
        break;
      case 2:
        this.setState({
          status: this.props.status,
          timer: this.props.timer
        })
        this.setTimer()
        break;
      default:
        this.clearTimer()
        this.setState({ status: 1 })
        break;
    }
  }

  render() {
    return (
      <div className='count-clock flex flex-column flex-center'>
        <button
          className='btn clock-toggle__button'
          onClick={this.toggleCountDown}
          style={{
            backgroundColor:
              this.state.status ?
                this.state.status === 1 ?
                  '#c1f0c1'
                  : '#ffff80'
                : '#ffb3b3'
          }}>
          {this.state.status ?
            this.state.status === 1 ?
              'START'
              : 'RESET'
            : 'STOP'}
        </button>
        <div className='clock-timer flex-center'
          style={{
            width: this.props.width,
            height: this.props.height,
          }}>
          {this.state.timer}
        </div>
      </div>
    )
  }
}

export default CountClock;
