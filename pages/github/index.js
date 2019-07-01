import React, { Component } from 'react'
import Layout from '../../components/layouts/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

export default class Github extends Component {
    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/bitfumes/repos')
        const data = await res.json()
        return {repos:data}
    }
    render() {
        return (
            <Layout>
                <ul>
                {
                    this.props.repos.map(repo => (
                        <Link href={`/github/bitfumes/${repo.name}`}>
                            <a><li>{repo.name}</li></a>
                        </Link>
                    ))
                }
                </ul>
            </Layout>
        )
    }
}
