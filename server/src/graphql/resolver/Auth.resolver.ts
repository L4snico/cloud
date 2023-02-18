import AuthView from "src/View/Auth.view";
import { Arg, Mutation, Resolver } from "type-graphql";
import AuthSchema from "src/graphql/schema/Auth/Auth.schema";

@Resolver()
class AuthResolver {
    protected _auth_view = new AuthView()

    @Mutation(() => AuthSchema.SignUpUser)
    async signUpUser(
        @Arg("username", _type => String) username: string,
        @Arg("email", _type => String) email: string,
        @Arg("password", _type => String) password: string,
    ) {
        return this._auth_view.signUpUser({ username, email, password })
    }
}

export default AuthResolver
