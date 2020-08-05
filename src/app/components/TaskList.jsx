import React from 'react';
import { connect } from 'react-redux';

<<<<<<< HEAD
export const TaskList = ({tasks})=>{
    <div>
        {tasks.map(task=>(<div>{task.name}</div>))}
    </div>
}
=======
export const TaskList = ({tasks, name})=>(
    <div>
        <h3>
            {name}
        </h3>
        <div>
            {tasks.map(task=>(<div>{task.name}</div>))}
        </div>
    </div>
)
>>>>>>> check_6_22_1

const mapStateToProps = (state, ownProps)=>{
    let groupID = ownProps.id;
    return {
        name:ownProps.name,
        id:groupID,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);