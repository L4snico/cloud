import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ResponseSchema<TSuccessData = null> {
    @Field(_type => Boolean)
    error!: boolean

    @Field(_type => String)
    declare reason: string

    success_data!: TSuccessData

    @Field(_type => ErrorData, { nullable: true })
    error_data!: ErrorData | null
}

@ObjectType()
class ErrorData {
    @Field(_type => [String], { nullable: true })
    messages!: string[] | null

    @Field(_type => DisplayMessages)
    display_messages!: DisplayMessages
}

@ObjectType()
class DisplayMessages {
    @Field(_type => [String], { nullable: true })
    pt_br?: string[] | null

    @Field(_type => [String], { nullable: true })
    en_us?: string[] | null
}

export default ResponseSchema
export { ErrorData, DisplayMessages }
