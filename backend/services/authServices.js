var client = require('@prisma/client');

const prisma = new client.PrismaClient();
async function register(data) {
    delete data.verifyPassword;
    await prisma.client.create({
        data
    });
}

async function login() {
    const users = await prisma.client.findMany();
    return users;
}
module.exports = { register, login }