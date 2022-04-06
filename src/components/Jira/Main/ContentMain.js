import React from 'react'
import {useDispatch} from 'react-redux'
import { GET_TASK_DETAIL_SAGA } from '../../../util/constants/settingSystem';
export default function ContentMain(props) {

    const {projectDetail} = props;
    const dispatch = useDispatch()
    const renderCardTaskList = () => {
        return projectDetail.lstTask?.map((taskListDetail,index) => {
            return <div key={index} className="card pb-2" style={{ width: '17rem', height: 'auto' }}>
            <div className="card-header">
                {taskListDetail.statusName}
            </div>
            <ul className="list-group list-group-flush">
                {taskListDetail.lstTaskDeTail.map((task,index)=> {
                    return <li onClick={()=>{
                        dispatch({type: GET_TASK_DETAIL_SAGA, taskId: task.taskId})
                    }}
                     key={index} className="list-group-item"  data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
                    <p className="font-weight-300">
                       {task.taskName}
                    </p>
                    <div className="block" style={{ display: 'flex' }}>
                        <div className="block-left">
                            <p className="text-danger">{task.priorityTask.priority}</p>
                            {/* <i className="fa fa-bookmark" />
                            <i className="fa fa-arrow-up" /> */}
                        </div>
                        <div className="block-right">
                            <div className="avatar-group" style={{ display: 'flex' }}>
                                {task.assigness.map((mem,index) => {
                                    return <div className="avatar" key={index}>
                                    <img src={mem.avatar} alt={mem.avatar} />
                                </div>
                                })}

                                
                               
                            </div>
                        </div>
                    </div>
                </li>
                })}

                
              
            </ul>
        </div>
        })
    }


    return (
        <div className="content" style={{ display: 'flex' }}>
            
                {renderCardTaskList()}
        </div>


    )
}



