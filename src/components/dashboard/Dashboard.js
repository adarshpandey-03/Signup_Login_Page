/*import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render() {
       // console.log(this.props)
       const { projects, auth } = this.props;
       if(!auth.uid) return <Redirect to ='/signIn'/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
            </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createProject } from '../../store/actions/projectActions'
import {  Redirect } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        //title: '',
        //content: '',
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        //this.props.createProject(this.state)
    }
    
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to ='/signIn'/>
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3 center">Welcome!</h5>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       // createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
