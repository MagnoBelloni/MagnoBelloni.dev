import getUser from '../../utils/getUser'

const apiGetUser = async (req, res) => {
    const data = await getUser('magnobelloni')
    res.send(data)
}

export default apiGetUser