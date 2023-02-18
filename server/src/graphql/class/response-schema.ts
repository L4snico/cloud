import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ResponseSchema<TSuccessData = null> {
    @Field(_type => Boolean)
    error!: boolean

    @Field(_type => String)
    reason!: string

    success_data!: TSuccessData

    @Field(_type => ErrorData, { nullable: true })
    error_data!: ErrorData | null
}

@ObjectType()
class ErrorData {
    @Field(_type => String, { nullable: true })
    message!: string | null
    
    @Field(_type => [String], { nullable: true })
    messages!: string[] | null

    @Field(_type => SuggestedMessage)
    suggested_message!: SuggestedMessage
}

@ObjectType()
class SuggestedMessage {
    @Field(_type => String)
    pt_br!: string
}

export default ResponseSchema
export { ErrorData, SuggestedMessage }
