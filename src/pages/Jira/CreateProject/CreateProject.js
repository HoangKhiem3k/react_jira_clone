import React,{useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {  withFormik } from 'formik';
import * as Yup  from 'yup'
import {connect,useSelector,useDispatch} from 'react-redux'
import { CREATE_PROJECT_SAGA, GET_ALL_PROJECT_CATEGORY_SAGA } from '../../../util/constants/settingSystem';

function CreateProject(props) {

    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory);  
    const dispatch = useDispatch();

    const {
        handleSubmit,
        handleChange,
        setFieldValue
    } = props
    useEffect(()=>{
        dispatch({type:GET_ALL_PROJECT_CATEGORY_SAGA})
    },[])


  const handleEditorChange = (content, editor) => {
    setFieldValue('description',content) 
    }
  return (
    <div className="container m-5">
            <h3>Create Project</h3>
            <form onSubmit={handleSubmit} className="container" onChange={handleChange}>
                <div className="form-group">
                    <p>Name</p>
                    <input className="form-control" name="projectName" />
                </div>
                <div className="form-group">
                    <p>Description</p>
                    <Editor
                        name="description"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                // eslint-disable-next-line no-multi-str
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <div className="form-group">
                    <select name="categoryId" className="form-control" onChange={handleChange}>
                        {arrProjectCategory.map((item,index) => {
                            return (
                                <option key={index} value={item.id}>{item.projectCategoryName}</option>
                            )
                        })}                        
                    </select>
                </div>
                <button onClick={handleSubmit} className="btn btn-outline-primary" type="submit">Create project</button>
            </form>
        </div>
  )
}
const createProjectForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return {
            projectName: '',
            description: '',
            categoryId: props.arrProjectCategory[0]?.id
        }
    },
    validationSchema: Yup.object().shape({
   

    }),
    handleSubmit: (values, { props, setSubmitting }) => {

        props.dispatch({
            type: CREATE_PROJECT_SAGA,
            newProject: values
        })

    },
    displayName: 'CreateProjectFormik',
})(CreateProject);

const mapStateToProps = (state) => ({
    arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory
})

export default connect(mapStateToProps)(createProjectForm);