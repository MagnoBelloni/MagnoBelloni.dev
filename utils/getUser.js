const getUser = async (username) => {
    const resUser = await fetch(`https://api.github.com/users/${username}`)
    const user = await resUser.json()

    const resRepos = await fetch(`https://api.github.com/users/${username}/repos`)
    const originalRepos = await resRepos.json()

    const isNotFork = repo => !repo.fork
    const isNotNullLanguage = repo => repo.language

    const extractData = repo => ({
        id: repo.id,
        name: repo.name,
        language: repo.language,
        html_url: repo.html_url
    })

    const repos = originalRepos
        .filter(isNotFork)
        .filter(isNotNullLanguage)
        .map(extractData)

    return {
        repos,
        user
    }
}
export default getUser