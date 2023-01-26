import prisma from "src/prisma";

class Model {
    protected _userRepository = prisma.user
}

export default Model
