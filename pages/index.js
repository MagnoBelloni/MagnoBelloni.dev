import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 pt-16 leading-none">
                <div>
                    <h1 className="text-4xl uppercase">Hi, i'm Magno Belloni</h1>
                    <h2 className="font-bold text-5xl uppercase">Software Engineer</h2>
                    <h3 className="font-bold">{user.bio} - {user.location}</h3>
                    <h3>Contact</h3>
                    <ul>
                        <li>Linkedln:</li>
                        <li>Github:</li>
                    </ul>
                    <p>Github status: public repos:{user.public_repos} / followers: {user.followers}</p>
                </div>
                <div><img src="/images/eu.png" alt="Eu" /></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg py-12 px-16">
                <h3 className="text-4xl text-center">What I do</h3>
                <p className="text-2xl">Software Engineer</p>
            </div>


            {repos.map(repo =>
                (
                    <a href={repo.html_url} key={repo.name} target="_blank">
                        <div className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md">
                            <h3 className="font-bold">{repo.name}</h3>
                            <p>Language: {repo.language}</p>
                        </div>
                    </a>
                )
            )}
        </div >
    )
}

export async function getServerSideProps(context) {
    const { repos, user } = await getUser('magnobelloni')

    return {
        props: {
            repos,
            user
        }
    }
}

export default Index