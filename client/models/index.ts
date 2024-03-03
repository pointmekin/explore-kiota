/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a post
 */
export function createPostFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPost;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoPost(post: Partial<Post> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "body": n => { post.body = n.getStringValue(); },
        "id": n => { post.id = n.getNumberValue(); },
        "title": n => { post.title = n.getStringValue(); },
        "userId": n => { post.userId = n.getNumberValue(); },
    }
}
export interface Post extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The body property
     */
    body?: string;
    /**
     * The id property
     */
    id?: number;
    /**
     * The title property
     */
    title?: string;
    /**
     * The userId property
     */
    userId?: number;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePost(writer: SerializationWriter, post: Partial<Post> | undefined = {}) : void {
    writer.writeStringValue("body", post.body);
    writer.writeNumberValue("id", post.id);
    writer.writeStringValue("title", post.title);
    writer.writeNumberValue("userId", post.userId);
    writer.writeAdditionalData(post.additionalData);
}
/* tslint:enable */
/* eslint-enable */
