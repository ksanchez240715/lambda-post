import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Documentación de API",
            version: "1.0.0",
            description: "API lambda POST"
        },
        servers: [
            {
                url: "http://localhost:3000/dev"
            }
        ]
    },
    apis: ["./src/Handlers/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const apiDocs = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(swaggerDocs),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    callback(null, response);
};

export const swaggerUiHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const response = {
        statusCode: 200,
        body: swaggerUi.generateHTML(swaggerDocs),
        headers: {
            'Content-Type': 'text/html',
        },
    };
    callback(null, response);
};
