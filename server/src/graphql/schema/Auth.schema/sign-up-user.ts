import { ResponseSchema } from "src/graphql/class";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SignUpUserSchema extends ResponseSchema<SuccessData> {
    @Field(_type => SuccessData, { nullable: true })
    successData!: SuccessData;
}

@ObjectType()
class SuccessData {
    @Field(_type => String)
    token!: string
}
