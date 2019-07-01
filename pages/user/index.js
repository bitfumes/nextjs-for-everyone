import Layout from '../../components/layouts/layout'
import React, { Component } from 'react'

export default class User extends Component {
    static async getInitialProps({query}){
        console.log(query);
        return {}
    }
    render() {
        return (
            <Layout>
                <h1>I am user Page</h1>
            </Layout>
        )
    }
}
