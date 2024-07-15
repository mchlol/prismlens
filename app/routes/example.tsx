import * as React from 'react';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { ActionFunction, json, LoaderFunction } from '@remix-run/node';

type LoaderData = {
    message: string
};

type ActionData = {
    message: string
};

export const loader: LoaderFunction = async () => {
    return json({ message: 'Hello Remix'});
};

export const action: ActionFunction = async ({
    request,
}: {
    request: Request;
}) => {
    const fd = await request.formData();
    const message = fd.get('message') ?? 'No message provided';
    console.log({ message });

    return json( {message} );
};

export default function Example() {
    const data = useLoaderData<LoaderData>();
    const actionData = useActionData<ActionData>();

    return (
        <div>
            <h1>{data.message}</h1>
            <h3>{actionData?.message}</h3>
            <Form method="post">
                <input type="text" name="message" placeholder="Type a message..." />
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}