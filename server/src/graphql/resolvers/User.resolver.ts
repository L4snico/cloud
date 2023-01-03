import { UserController } from "src/Controller";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "src/graphql/types";

@Resolver()
export class UserResolver {
    private userController = new UserController()
    
    @Mutation(() => User)
    async userSignUp(
        @Arg("username", _type => String) username: string,
        @Arg("email", _type => String) email: string,
        @Arg("password", _type => String) password: string,
    ) {
        const user = await this.userController.createUser({
            username,
            email,
            password,
        })

        return user
    }
}
