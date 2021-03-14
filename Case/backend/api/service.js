module.exports = app => {
    const getInfo = (req, res) => {
        app.db('users')
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err))
    }

    const getInfoById = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err))
    }

    const remove = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .del()
            .then(rowDeleted => {
                if (rowDeleted > 0){
                    res.status(204).send()
                } else {
                    const msg = `Usuário de id ${req.params.id} não encontrado`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const update = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .update({ email: req.body.email, password: req.body.password })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const switchStatus = (req, res, state) => {
        app.db('users')
            .where({ id: req.params.id })
            .update({ toggle: state })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const toggleStatus = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .first()
            .then(user => {
                if (!user) {
                    const msg = `Usuário de id ${req.params.id} não encontrado`
                    res.status(400).send(msg)
                }
                const state = user.toggle ? false : true
                switchStatus(req, res, state)
            })
            .catch(err => res.status(400).json(err))
    }

    return { getInfo, getInfoById, remove, update, toggleStatus }
}