import prisma from "src/prisma";

class Model {
    protected _user_repository = prisma.user
}

export default Model
