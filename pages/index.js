import React from 'react'
import getUser from '../utils/getUser'

const Index = ({ repos, user }) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl">Olá eu sou o Magno Belloni</h1>
            <h3 className="font-bold">{user.bio} - {user.location}</h3>
            <h2 className="font-bold text-3xl">Meus repositórios do Github</h2>
            <p>Github status: public repos:{user.public_repos} / followers: {user.followers}</p>
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