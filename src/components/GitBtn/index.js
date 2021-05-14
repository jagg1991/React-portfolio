import React from "react";
import API from "../../utls/API";
import { NavDropdown } from "react-bootstrap"

class GitBtn extends React.Component {

    state = {

        results: [],

    };
    componentDidMount() {
        this.searchGit()
    }
    searchGit = () => {
        API.search()

            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.results)
    }

    handleClick = (e) => {
        e.preventDefault();
        // const btnResults = this.state.results.map((data) => {
        //     return data
        // })
        // this.setState({ results: btnResults })
        // console.log(btnResults)
    }


    render() {
        return (
            // <div >
            //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-expanded="false" aria-controls="navbarNavDropdown">
            //         <span className="navbar-toggler-icon">button</span>
            //     </button>
            // {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button> */}
            // <div className="collapse nav-collapse" id="navbarNavDarkDropdown">
            //     <ul className="navbar-nav">
            // <>
            //     <li className="nav-item dropdown"><a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink">GitHub Links</a>
            //         <ul className="navbar-nav" aria-labelledby="dropdownMenuButton1">

            //             {this.state.results.map((repo) => {
            //                 console.log(repo)
            //                 return <li className="nav-item"><a className="nav-link" href={repo.html_url}>{repo.name}</a></li>
            //             })}


            //         </ul>
            //     </li>

            // </>
            //     </div>
            // </div>

            <NavDropdown title="GitHub Repos" id="basic-nav-dropdown">
                {this.state.results.map((repo) => {
                    console.log(repo)
                    return <NavDropdown.Item style={{ background: "black", color: "white" }} className="nav-item" href={repo.html_url}>{repo.name} <NavDropdown.Divider /> </NavDropdown.Item>
                })}


            </NavDropdown>

        )
    }

}

export default GitBtn