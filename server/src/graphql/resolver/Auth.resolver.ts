import { AuthView } from "src/View";
import { Arg, Mutation, Resolver } from "type-graphql";
import { AuthSchema } from "src/graphql/schema";

@Resolver()
export class AuthResolver {
    private authView = new AuthView()

    @Mutation(() => AuthSchema.SignUpUser)
    async signUpUser(
        @Arg("username", _type => String) username: string,
        @Arg("email", _type => String) email: string,
        @Arg("password", _type => String) password: string,
    ) {
        return this.authView.signUpUser({ username, email, password })
    }
}
