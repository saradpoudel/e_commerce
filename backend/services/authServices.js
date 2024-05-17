var client = require('@prisma/client');

const prisma = new client.PrismaClient();
async function register(data) {
    delete data.verifyPassword;
    await prisma.client.create({
        data
    });
}

async function login(data) {
    const { email, password } = data;
    const user = await prisma.client.findFirst({
        where: { email }
    });
    if (!user) {
        throw new Error('User not found');
    }

    // Compare the provided password with the hashed password in the database
    if (password !== user.password) {
        throw new Error('Incorrect password');
    }

    return user;
}

async function getUsers() {
    return await prisma.client.findMany();
}
async function contact(data) {
    await prisma.contact.create({
        data
    });
}
module.exports = { register, login, getUsers, contact }