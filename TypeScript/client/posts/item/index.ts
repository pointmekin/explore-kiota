/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPostFromDiscriminatorValue, serializePost, type Post } from '../../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /posts/{post-id}
 */
export interface PostItemRequestBuilder extends BaseRequestBuilder<PostItemRequestBuilder> {
    /**
     * Delete post
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get post by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Post
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Post | undefined>;
    /**
     * Update post
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Post
     */
     patch(body: Post, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Post | undefined>;
    /**
     * Delete post
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get post by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Update post
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Post, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const PostItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        // @ts-ignore
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        responseBodyContentType: "application/json",
        // @ts-ignore
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPostFromDiscriminatorValue,
    },
    patch: {
        responseBodyContentType: "application/json",
        // @ts-ignore
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPostFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePost,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PostItemRequestBuilderUriTemplate = "{+baseurl}/posts/{post%2Did}";
/* tslint:enable */
/* eslint-enable */