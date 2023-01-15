import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ResponseSchema<TSuccessData = null> {
    @Field(_type => Boolean)
    error!: boolean

    @Field(_type => String)
    reason!: string

    successData!: TSuccessData

    @Field(_type => ErrorData, { nullable: true })
    errorData!: ErrorData | null
}

@ObjectType()
export class ErrorData {
    @Field(_type => String, { nullable: true })
    message!: string | null
    
    @Field(_type => [String], { nullable: true })
    messages!: string[] | null

    @Field(_type => SuggestedMessage)
    suggestedMessage!: SuggestedMessage
}

@ObjectType()
export class SuggestedMessage {
    @Field(_type => String)
    ptBr!: string
}
