import React from "react";
import AboutCount from "../../components/aboutCount";
import SectionCount from "../../components/sectionCount";

export default class MainTimer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(e) {
    let pageActive = e.currentTarget.attributes['data-tag'].value
    this.setState(
      {
        page: pageActive
      }
    )
  }

  render() {
    return (
      <main className="page-main">
        <div className='div-switch flex-center'>
          <button className={`btn btn-switch ${this.state.page === 'home'? 'btn-active': ''}`}
            data-tag='home'
            onClick={(e) => this.togglePage(e)}
          >
            Home</button>
            <button className={`btn btn-switch ${this.state.page === 'about'? 'btn-active': ''}`}
            data-tag='about'
            onClick={(e) => this.togglePage(e)}
          >
            About</button>
        </div>
        {
          this.state.page === 'home' ?
            <SectionCount />
            : <AboutCount />
        }

      </main>
    )
  }
}

