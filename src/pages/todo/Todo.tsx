import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
  return {
    text: state.todo.text,
    router: state.router
  };
}

const mapDispatchToProps = {
  addTodo: (text: string) => (dispatch: any) => {
    setTimeout(()=>{
      dispatch({type:'ADD_TODO', payload: text})
    }, 1000)
  }
}

interface PropType {
  addTodo: any,
  text: [string, number]
}
class Todo extends Component<PropType> {
  constructor(props:any, ctx:any) {
    super(props, ctx)
    console.log(props,ctx,'sdfsdf');
    
  }
  render() {
    console.log(this.props,'props');
    
    const { addTodo , text } = this.props
    return (
      <div>
        <div>sdfsf</div>
        {
          text.map((item, index:number) => {
            return (
              <div key={'item_'+index}>{item}</div>
            )
          })
        }
        <button onClick={()=>addTodo(Date.now())}>新增</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);