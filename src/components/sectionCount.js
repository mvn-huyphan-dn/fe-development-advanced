import React from "react";
import CountClock from "./countClock";

class SectionCount extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      clock1: {
        width: 100,
        height: 100,
        timer: 50,
        status: 0
      },
      clock2: {
        width: 100,
        height: 100,
        timer: 40,
        status: 0
      },
      clock3: {
        width: 100,
        height: 100,
        timer: 30,
        status: 0
      }
    }
  }

  render() {
    return (
      <section className='section-count flex-center'>
        <CountClock {...this.state.clock1} />
        <CountClock {...this.state.clock2} />
        <CountClock {...this.state.clock3} />
      </section>
    )
  }
}

export default SectionCount;
