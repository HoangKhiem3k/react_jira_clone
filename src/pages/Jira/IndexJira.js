import React, { useEffect } from "react";
import HeaderMain from "../../components/Jira/Main/HeaderMain";
import InfoMain from "../../components/Jira/Main/InfoMain";
import ContentMain from "../../components/Jira/Main/ContentMain";
import { useSelector, useDispatch } from "react-redux";
import { GET_PROJECT_DETAIL } from "../../util/constants/settingSystem";

export default function IndexJira(props) {
  const {projectDetail} = useSelector(state => state.ProjectReducer)
    const dispatch = useDispatch();

    console.log('projectDetail',projectDetail)

    useEffect(()=>{
        //Khi người dùng link qua trang này bằng thẻ navlink hoặc người dùng tự gõ url thì ta sẽ lấy tham số từ url => gọi saga
        const {projectId} = props.match.params;
        dispatch({
            type:GET_PROJECT_DETAIL,
            projectId
        })
        
    },[])
  return (
    <div className="main">
      <HeaderMain projectDetail={projectDetail} />

      <InfoMain projectDetail={projectDetail}/>

      <ContentMain projectDetail={projectDetail}/>
    </div>
  );
}
