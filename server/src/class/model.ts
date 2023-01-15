import prisma from "src/prisma";

export class Model {
    protected _userRepository = prisma.user
}
