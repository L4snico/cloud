import ResponseSchema from "src/graphql/class/response-schema";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
class SignUpUserSchema extends ResponseSchema<SuccessDataSchema> {
    @Field(_type => SuccessDataSchema, { nullable: true })
    success_data!: SuccessDataSchema;
}

@ObjectType()
class SuccessDataSchema {
    @Field(_type => String)
    token!: string
}

export default SignUpUserSchema
