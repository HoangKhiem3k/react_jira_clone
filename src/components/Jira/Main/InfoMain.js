import React from 'react'
import HTMLReactParser from 'html-react-parser';
export default function InfoMain(props) {
    const {projectDetail} = props;

    const renderAvatar = () => {
        
        
        return projectDetail.members?.map((user,index) => {
            return   <div key={index} className="avatar">
            <img src={user.avatar} alt={user.avatar} />
        </div>
        })
    }


    return (
        <>
            <h3>{projectDetail.projectName}</h3>

            <section>

                {HTMLReactParser(String(projectDetail.description))}
            </section>
            
            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    {renderAvatar()}
                </div>
                <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
                <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
            </div>
        </>

    )
}
