import React, { useState, useEffect } from "react"
import queryString from 'query-string'
import { Loading, Pagination } from '../../../components'
import { useFormFields } from '../../../hooks'

const url = 'https://reqres.in/api/users'

function FormPage() {
  let [db, setDb] = useState([
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
  ])

  let [productDB, setProductDB] = useState([
    {
      id: 1,
      pName: 'abc',
      price: 100,
      size: ['1', '2', '3', '4'],
      description: 'abc'
    },
    {
      id: 2,
      pName: 'bcd',
      size: ['1', '3'],
      price: 200,
      description: 'bcd'
    },
    {
      id: 3,
      pName: 'cde',
      size: ['1', '2', '4'],
      price: 300,
      description: 'cde'
    }
  ])

  let [forms, setForms] = useState({
    name: '',
    password: '',
    gender: 'Male',
    job: 'FE Developer',
    equipment: [],
    ide: [],
    note: ''
  })

  let productForm = useFormFields({
    pName: '',
    price: 0,
    description: '',
    size: []
  })

  let [errors, setErrors] = useState({
    name: '',
    password: '',
    equipment: '',
    ide: ''
  })

  const equipment = [
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
  ]

  const ide = [
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
  ]

  const defaultForms = {
    name: '',
    password: '',
    gender: 'Male',
    job: 'FE Developer',
    equipment: [],
    ide: [],
    note: ''
  }

  const productSize = [{
    id: '1',
    attrID: 'S',
    name: 'S'
  },
  {
    id: '2',
    attrID: 'M',
    name: 'M'
  },
  {
    id: '3',
    attrID: 'L',
    name: 'L'
  },
  {
    id: '4',
    attrID: 'XL',
    name: 'XL'
  }]

  const [users, setUsers] = useState([])

  const [pagination, setPagination] = useState({
    page: 1,
    total: null,
    per_page: 6
  })

  const [filters, setFilters] = useState({
    page: 1,
    per_page: 6
  })

  useEffect(() => {
    const paramsString = queryString.stringify(filters)
    fetch(`${url}?${paramsString}`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data)
        setPagination({
          page: json.page,
          total: json.total,
          per_page: json.per_page
        })
      })
    return () => {
    }
  }, [filters])

  let usersList = users.map((e) => {
    return (
      <li key={e.id} className='users-list-item col-medium-4 flex'>
        <img className='col-medium-6' src={e.avatar} alt={`${e.first_name}-img`} />
        <div className='users-info col-medium-6 flex-column flex-center'>
          <div className='users-info__firstname'>{e.first_name}</div>
          <div className='users-info__lastname'>{e.last_name}</div>
          <div className='users-info__email'>{e.email}</div>
        </div>
      </li>
    )
  })

  let rndID = () => {
    return Math.floor(Math.random() * 9999999);
  }

  let datas = db.map((e) => {
    return (
      <tr key={e.id} className='tr'>
        <td className='td'>{e.name}</td>
        <td className='td'>{e.gender}</td>
        <td className='td'>{e.job}</td>
        <td className='td'>
          <ul>
            {e.equipment.map((item, index) => {
              let a = equipment.find(e => e.id === item)
              return <li key={index}>{a.name}</li>
            })}
          </ul>
        </td>
        <td className='td'>
          <ul>
            {e.ide.map((item, index) => {
              let a = ide.find(e => e.id === item)
              return <li key={index}>{a.name}</li>
            })}
          </ul>
        </td>
        <td className='td'>
          <button className='btn btn-del' onClick={() => delItem('survey', e.id)}>Delete</button>
        </td>
      </tr>
    )
  })

  let pDatas = productDB.map((e) => {
    return (
      <tr key={e.id} className='tr'>
        <td className='td'>{e.pName}</td>
        <td className='td'>{e.price}</td>
        <td className='td'>
          <ul>
            {e.size.map((item, index) => {
              let a = productSize.find(e => e.id === item)
              return <li key={index}>{a.name}</li>
            })}
          </ul>
        </td>
        <td className='td'>{e.description}</td>
        <td className='td'>
          <button className='btn btn-del' onClick={() => delItem('product', e.id)}>Delete</button>
        </td>
      </tr>
    )
  })

  let handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;
    switch (type) {
      case 'checkbox':
        if (forms[name].findIndex(e => e === value) === -1) {
          setForms({
            ...forms,
            [name]: [...forms[name], value]
          })
        } else {
          setForms({
            ...forms,
            [name]: forms[name].filter(e => e !== value)
          })
        }
        break;
      default:
        setForms({
          ...forms,
          [name]: value
        })
        break;
    }
  }

  let resetForm = (e) => {
    e.preventDefault();
    setForms({ ...defaultForms })
    setErrors({
      name: '',
      password: '',
      equipment: '',
      ide: ''
    })
    document.querySelectorAll('input[type=checkbox]').forEach(e => e.checked = false)
  }

  let handlePrepend = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const id = rndID();
      const newItem = { id: id, ...forms };
      setDb([newItem, ...db])
      resetForm(e);
    }
  }

  let handleProductPrepend = (e) => {
    e.preventDefault();
    // if (handleValidation()) {
    const id = rndID();
    const newItem = { id: id, ...productForm.fields };
    setProductDB([newItem, ...productDB])
    productForm.setFields({
      pName: '',
      price: 0,
      size: [],
      description: ''
    })
    // resetForm(e);
    // }
  }

  let handleValidation = () => {
    const { name, password, equipment, ide } = forms;
    let errors = {
      name: '',
      password: '',
      equipment: '',
      ide: '',
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

    setErrors({ ...errors })
    return Object.keys(errors).length === 0 ? true : false;
  }

  let delItem = (name, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      switch (name) {
        case 'survey':
          setDb(db.filter(e => e.id !== id))
          break;
        case 'product':
          setProductDB(productDB.filter(e => e.id !== id))
          break;
        default:
          break;
      }
    }
  }

  function handlePageChange(name, value) {
    setFilters({
      ...filters,
      [name]: [value]
    })
  }

  return (
    <main className='page-main'>

      <section className='section-form flex-column flex-center'>
        <h2>Survey Form</h2>
        <form className='form'>
          <div className='form-control row '>
            <label className='form-label col-large-3' htmlFor='name'>Name</label>
            <div className='form-input col-large-9'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Please input name'
                onChange={handleChange}
                value={forms.name} />
              {errors.name && <span className='span-error'>{errors.name}</span>}
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
                onChange={handleChange}
                value={forms.password} />
              {errors.password && <span className='span-error'>{errors.password}</span>}
            </div>
          </div>
          <div className='form-control row'>
            <label className='form-label col-large-3'>Gender</label>
            <div className='form-input col-large-9'>
              <input
                type='radio'
                id='male'
                name='gender'
                onChange={handleChange}
                checked={forms.gender === 'Male'}
                value='Male' />
              <label htmlFor='male'>Male</label>
              <input
                type='radio'
                id='female'
                name='gender'
                onChange={handleChange}
                checked={forms.gender === 'Female'}
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
                onChange={handleChange}
                value={forms.job} >
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
              {equipment.map((item) => {
                return (
                  <div key={item.id} className='checkbox-combo col-large-12'>
                    <input
                      type='checkbox'
                      id={item.attrID}
                      name='equipment'
                      onChange={handleChange}
                      value={item.id} />
                    <label htmlFor={item.attrID}>{item.name}</label>
                  </div>
                )
              })}
              {errors.equipment && <span className='span-error'>{errors.equipment}</span>}
            </div>
          </div>
          <div className='form-control row'>
            <label className='form-label col-large-3'>IDE</label>
            <div className='form-input col-large-9 form-checkbox'>
              {ide.map((item) => {
                return (
                  <div key={item.id} className='checkbox-combo col-large-12'>
                    <input
                      type='checkbox'
                      id={item.attrID}
                      name='ide'
                      onChange={handleChange}
                      value={item.id} />
                    <label htmlFor={item.attrID}>{item.name}</label>
                  </div>
                )
              })}
              {errors.ide && <span className='span-error'>{errors.ide}</span>}
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
                onChange={handleChange}
                value={forms.note} />
            </div>
          </div>
          <div className='row'>
            <label className='form-label col-large-3'></label>
            <div className='form-input col-large-9'>
              <button className='btn btn-submit' onClick={handlePrepend}>Add to list</button>
              <button className='btn btn-reset' onClick={resetForm}>Reset Form</button>
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
              {db.length !== 0 ?
                datas
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

      <section className='section-form flex-column flex-center'>
        <h2>Production Form</h2>
        <form className='form'>
          <div className='form-control row '>
            <label className='form-label col-large-3' htmlFor='pName'>Production Name</label>
            <div className='form-input col-large-9'>
              <input
                type='text'
                id='pName'
                name='pName'
                placeholder='Please input production name'
                onChange={productForm.handleChangeField}
                value={productForm.fields.pName} />
              {/* {errors.name && <span className='span-error'>{errors.name}</span>} */}
            </div>
          </div>
          <div className='form-control row'>
            <label className='form-label col-large-3' htmlFor='price'>Price</label>
            <div className='form-input col-large-9'>
              <input
                type='number'
                id='price'
                name='price'
                placeholder='Please input product price'
                onChange={productForm.handleChangeField}
                value={productForm.fields.price} />
              {/* {errors.password && <span className='span-error'>{errors.password}</span>} */}
            </div>
          </div>
          <div className='form-control row'>
            <label className='form-label col-large-3'>Product Size</label>
            <div className='form-input col-large-9 form-checkbox'>
              {productSize.map((item) => {
                return (
                  <div key={item.id} className='checkbox-combo col-large-12'>
                    <input
                      type='checkbox'
                      id={item.attrID}
                      name='size'
                      onChange={productForm.handleChangeField}
                      value={item.id} />
                    <label htmlFor={item.attrID}>{item.name}</label>
                  </div>
                )
              })}
              {/* {errors.equipment && <span className='span-error'>{errors.equipment}</span>} */}
            </div>
          </div>
          <div className='form-control row'>
            <label className='form-label col-large-3' htmlFor='description'>Other Information</label>
            <div className='form-input col-large-9'>
              <textarea
                type='textarea'
                id='description'
                name='description'
                row='3'
                col='50'
                placeholder='Input other product information'
                onChange={productForm.handleChangeField}
                value={productForm.fields.description} />
            </div>
          </div>
          <div className='row'>
            <label className='form-label col-large-3'></label>
            <div className='form-input col-large-9'>
              <button className='btn btn-submit' onClick={handleProductPrepend}>Add to list</button>
              {/* <button className='btn btn-reset' onClick={resetForm}>Reset Form</button> */}
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
                <th className='th' scope="col">Price</th>
                <th className='th' scope="col">Size</th>
                <th className='th' scope="col">Description</th>
                <th className='th' scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="survey-list">
              {productDB.length !== 0 ?
                pDatas
                :
                <tr className='tr'>
                  <td className='td txt-center' colSpan='5'>
                    There is no product in database!
                  </td>
                </tr>}
            </tbody>
          </table>
        </div>
      </section>

      <section className='section-users-list flex-column flex-center'>
        <h2>Users List</h2>
        {users.length === 0 ?
          <Loading />
          :
          <>
            <ul className='users-list row'>
              {usersList}
            </ul>
            <Pagination
              pagination={pagination}
              handlePageChange={handlePageChange}
            />
          </>
        }
      </section>
    </main>
  )
}

export default FormPage;
