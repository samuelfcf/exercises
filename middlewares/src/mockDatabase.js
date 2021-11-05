const mockUser = {
    id: 1,
    name: 'dev driven',
    email: 'dev@driven.com.br',
    password: '123456',
    hashPassword: '$2b$10$T/qXdqWwxQnp471jnhpz7uZbb9zL06Zez5V0C1uNHn2h70k048iBy',
    sessionToken: 'b04c81bc-9701-4794-87fd-eafcd88650a5'
}

const mockFinances = [
    {
        id: 1,
        userId: 1,
        description: 'boletin',
        value: 999,
        type: 'expense'
    },
    {
        id: 2,
        userId: 1,
        description: 'freela',
        value: 99999,
        type: 'revenue'
    },
    {
        id: 3,
        userId: 1,
        description: 'lolzin-gold',
        value: 999,
        type: 'expense'
    },

]

export {
    mockUser,
    mockFinances,
}