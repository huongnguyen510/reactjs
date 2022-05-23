import React, { Component } from 'react';

class items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      objUpdate: {
        id: 0,
        name: ""
      },
      textSearch: "",
      currentPage: 1,
      itemsOnPage: 3
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    this.props.addDispatch({name :this.state.value })
    this.setState({value: ""});
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.handleSubmit();
    }
  }

  handleUpdate(data) {
    this.setState({objUpdate: data});
    this.setState({value: ""});
  }

  handleDelete(id) {
    this.props.deleteDispatch(id);
  }

  handleSearch(event) {
    this.setState({textSearch: event.target.value});
    // this.setState({value: ""});
  }


  choosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  
  select = (event) => {
    this.setState({
      itemsOnPage: event.target.value
    })
  }

  state = { name: "" }
  render() {
    // console.log(this.state);
    const currentPage = this.state.currentPage;
    const itemsOnPage = this.state.itemsOnPage;
    const indexOfLastItem = currentPage * itemsOnPage;
    const indexOfFirstItem = indexOfLastItem - itemsOnPage;
    const currentTodos = ItemList.slice(indexOfFirstItem, indexOfLastItem);
    const listData = currentTodos.map((todo, index) => {
      return <TableItem stt={index + 1 + (currentPage - 1)*itemsOnPage} key={index} data={todo} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(ItemList.length / itemsOnPage); i++) {
      pageNumbers.push(i);
    }


    let listData = []
    if (this.props.items) {
      listData = this.props.items.map((item, key) => {
        return (
          <tr key={key}>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th><button onClick={() => this.handleUpdate(item)}>Sua</button></th>
            <th><button onClick={() => this.handleDelete(item.id)}>Xoa</button></th>
          </tr>
        )
      })
    }
    return (
      <div>

        <div>
          <p>Tìm kiếm:  
            <input type="text" onChange={(event) => this.handleSearch(event)} />
            <button onClick={() => this.props.searchDispatch(this.state.textSearch)}>Submit</button>
          </p>

          <p>Thêm mới:  
            <input type="text" onChange={(event) => this.handleChange(event)}  onKeyDown={(e) => this.handleKeyDown(e)}/>
            <button onClick={() => this.props.addDispatch(this.state.value)}>Submit</button>
          </p>

          <p>Sua SV có id la: {this.state.objUpdate.id}</p>
          
          <p>Sửa thành:
            <input type="text" value={this.state.objUpdate.name} onChange={(event) => this.setState({objUpdate: {...this.state.objUpdate, name: event.target.value}})}  onKeyDown={this.handleKeyDown}/>
            <button onClick={() => this.props.updateDispatch({dataUpdate:this.state.objUpdate, textSearch: this.props.textSearch})}>Submit</button>
          </p>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Ma SV</th>
              <th>Ho ten SV</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listData}
          </tbody>
        </table>

        <div className="items-on-page">
          <select defaultValue="0" onChange={this.select} >
            <option value="0" disabled>Get by</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </select>
        </div>

        <div className="pagination">
          <ul id="page-numbers">
            {
              pageNumbers.map(number => {
                if (this.state.currentPage === number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  )
                }
                else {
                  return (
                    <li key={number} id={number} onClick={this.choosePage} >
                      {number}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default items;

