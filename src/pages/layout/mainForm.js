import React from "react";

class MainForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      db: [
        {
          id: 1,
          name: 'abc',
          password: 'abc',
          gender: 'Male',
          job: 'FE Developer',
          equipment: ['1'],
          ide: ['1'],
          note: 'abc'
        },
        {
          id: 2,
          name: 'cde',
          password: 'cde',
          gender: 'Male',
          job: 'BE Developer',
          equipment: ['2'],
          ide: ['2'],
          note: 'cde'
        },
        {
          id: 3,
          name: 'def',
          password: 'def',
          gender: 'Female',
          job: 'Mobile Developer',
          equipment: ['1', '3', '4'],
          ide: ['3', '4'],
          note: 'def'
        }
      ],

      forms: {
        name: '',
        password: '',
        gender: 'Male',
        job: 'FE Developer',
        equipment: [],
        ide: [],
        note: ''
      },

      equipment: [
        {
          id: '1',
          attrID: 'macbook',
          name: 'Macbook'
        },
        {
          id: '2',
          attrID: 'winlap',
          name: 'Windows Laptop'
        },
        {
          id: '3',
          attrID: 'iphone',
          name: 'iPhone'
        },
        {
          id: '4',
          attrID: 'aphone',
          name: 'Android Phone'
        }
      ],

      ide: [
        {
          id: '1',
          attrID: 'vscode',
          name: 'Visual Studio Code'
        },
        {
          id: '2',
          attrID: 'sublime',
          name: 'Sublime Text'
        },
        {
          id: '3',
          attrID: 'vim',
          name: 'Vim'
        },
        {
          id: '4',
          attrID: 'xcode',
          name: 'Xcode'
        }
      ],

      defaultForms: {
        name: '',
        password: '',
        gender: 'Male',
        job: 'FE Developer',
        equipment: [],
        ide: [],
        note: ''
      },

      errors: {
        name: '',
        password: '',
        equipment: '',
        ide: ''
      }
    }
  }

  rndID = () => {
    return Math.floor(Math.random() * 9999999);
  }

  datas = () => {
    let data = this.state.db;
    return (
      data.map((e) => {
        return (
          <tr key={e.id} className='tr'>
            <td className='td'>{e.name}</td>
            <td className='td'>{e.gender}</td>
            <td className='td'>{e.job}</td>
            <td className='td'>
              <ul>
                {e.equipment.map((item, index) => {
                  let a = this.state.equipment.find(e => e.id === item)
                  return <li key={index}>{a.name}</li>
                })}
              </ul>
            </td>
            <td className='td'>
              <ul>
                {e.ide.map((item, index) => {
                  let a = this.state.ide.find(e => e.id === item)
                  return <li key={index}>{a.name}</li>
                })}
              </ul>
            </td>
            <td className='td'>
              <button className='btn btn-del' onClick={() => this.delItem(e.id)}>Delete</button>
            </td>
          </tr>
        )
      })
    )
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;
    switch (type) {
      case 'checkbox':
        if (this.state.forms[name].findIndex(e => e === value) === -1) {
          this.setState((prev) => ({
            ...prev,
            forms: {
              ...prev.forms,
              [name]: [...this.state.forms[name], value]
            }
          }))
        } else {
          this.setState((prev) => ({
            ...prev,
            forms: {
              ...prev.forms,
              [name]: this.state.forms[name].filter(e => e !== value)
            }
          }))
        }
        break;
      default:
        this.setState((prev) => ({
          ...prev,
          forms: {
            ...prev.forms,
            [name]: value
          }
        }))
        break;
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState(prev => ({
      ...prev,
      forms: {
        ...prev.defaultForms
      },
      errors: {}
    }))
    document.querySelectorAll('input[type=checkbox]').forEach(e => e.checked = false)
  }

  handlePrepend = (e) => {
    e.preventDefault();
    console.log(this.handleValidation())
    if (this.handleValidation()) {
      const id = this.rndID();
      const newItem = { id: id, ...this.state.forms };
      this.setState(prev => ({
        ...prev,
        db: [newItem, ...prev.db],
      }))
      this.resetForm(e);
    }
  }

  handleValidation = () => {
    const { name, password, equipment, ide } = this.state.forms;
    let errors = {
      name: '',
      password: '',
      equipment: '',
      ide: ''
    };

    if (!name) {
      errors.name = 'This input can not be empty';
    } else {
      delete errors.name;
    }

    if (!password) {
      errors.password = 'This input can not be empty';
    } else {
      delete errors.password;
    }

    if (!equipment.length) {
      errors.equipment = 'Please choose at least one option';
    } else {
      delete errors.equipment;
    }

    if (!ide.length) {
      errors.ide = 'Please choose at least one option';
    } else {
      delete errors.ide;
    }

    this.setState(prev => ({
      ...prev,
      errors: { ...errors }
    }));

    return Object.keys(errors).length === 0? true: false;
  }

  delItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.setState(prev => ({
        ...prev,
        db: prev.db.filter(e => e.id !== id)
      }))
    }
  }

  render() {
    return (
      <main className='page-main'>
        <div className='container-full'>
          <section className='section-form flex-column flex-center'>
            <h2>Survey Form</h2>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='form-control row '>
                <label className='form-label col-large-3' htmlFor='name'>Name</label>
                <div className='form-input col-large-9'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Please input name'
                    onChange={this.handleChange}
                    value={this.state.forms.name} />
                  {this.state.errors.name && <span className='span-error'>{this.state.errors.name}</span>}
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3' htmlFor='password'>Password</label>
                <div className='form-input col-large-9'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Please input password'
                    onChange={this.handleChange}
                    value={this.state.forms.password} />
                  {this.state.errors.password && <span className='span-error'>{this.state.errors.password}</span>}                    
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3'>Gender</label>
                <div className='form-input col-large-9'>
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    onChange={this.handleChange}
                    checked={this.state.forms.gender === 'Male'}
                    value='Male' />
                  <label htmlFor='male'>Male</label>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    onChange={this.handleChange}
                    checked={this.state.forms.gender === 'Female'}
                    value='Female' />
                  <label htmlFor='female'>Female</label>
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3' htmlFor='job'>Job Position</label>
                <div className='form-input col-large-9'>
                  <select
                    id='job'
                    name='job'
                    onChange={this.handleChange}
                    value={this.state.forms.job} >
                    <option>FE Developer</option>
                    <option>BE Developer</option>
                    <option>Mobile Developer</option>
                    <option>Tester</option>
                  </select>
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3'>Equipment</label>
                <div className='form-input col-large-9 form-checkbox'>
                  {this.state.equipment.map((item) => {
                    return (
                      <div key={item.id} className='checkbox-combo col-large-12'>
                        <input
                          type='checkbox'
                          id={item.attrID}
                          name='equipment'
                          onChange={this.handleChange}
                          value={item.id} />
                        <label htmlFor={item.attrID}>{item.name}</label>
                      </div>
                    )
                  })}
                  {this.state.errors.equipment && <span className='span-error'>{this.state.errors.equipment}</span>}                    
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3'>IDE</label>
                <div className='form-input col-large-9 form-checkbox'>
                  {this.state.ide.map((item) => {
                    return (
                      <div key={item.id} className='checkbox-combo col-large-12'>
                        <input
                          type='checkbox'
                          id={item.attrID}
                          name='ide'
                          onChange={this.handleChange}
                          value={item.id} />
                        <label htmlFor={item.attrID}>{item.name}</label>
                      </div>
                    )
                  })}
                  {this.state.errors.ide && <span className='span-error'>{this.state.errors.ide}</span>}                    
                </div>
              </div>
              <div className='form-control row'>
                <label className='form-label col-large-3' htmlFor='note'>Other Information</label>
                <div className='form-input col-large-9'>
                  <textarea
                    type='textarea'
                    id='note'
                    name='note'
                    row='3'
                    col='50'
                    placeholder='Input other information'
                    onChange={this.handleChange}
                    value={this.state.forms.note} />
                </div>
              </div>
              <div className='row'>
                <label className='form-label col-large-3'></label>
                <div className='form-input col-large-9'>
                  <button className='btn btn-submit' onClick={this.handlePrepend}>Add to list</button>
                  <button className='btn btn-reset' onClick={this.resetForm}>Reset Form</button>
                </div>
              </div>
            </form>
          </section>
          <section className='section-table'>
            <div className='container-full'>
              <table className='table txt-center'>
                <thead className='thead'>
                  <tr className='tr'>
                    <th className='th' scope="col">Name</th>
                    <th className='th' scope="col">Gender</th>
                    <th className='th' scope="col">Job</th>
                    <th className='th' scope="col">Equipment</th>
                    <th className='th' scope="col">IDE</th>
                    <th className='th' scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="survey-list">
                  {this.state.db.length !== 0 ?
                    this.datas()
                    :
                    <tr className='tr'>
                      <td className='td txt-center' colSpan='6'>
                        There is no item in database!
                      </td>
                    </tr>}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default MainForm;
