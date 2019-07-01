import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
export default class Repo extends Component {
    static async getInitialProps({query}){
        const res = await fetch(`https://api.github.com/repos/${query.user}/${query.repo}`)
        const data = await res.json()
        return {repo:data,user:query.user}
    }
    render() {
        return (
            <div>
                <Link href={`/github?user=${this.props.user}`} as={`/github/${this.props.user}`}>
                    <a>Back</a>
                </Link>
                <p>Name: {this.props.repo.name}</p>
                <p>Fork Count: {this.props.repo.forks_count}</p>
                <p>Language: {this.props.repo.language}</p>
            </div>
        )
    }
}
