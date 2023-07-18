export const handler = async (event) => { // this is how you define a lambda function
    const MyResponse = JSON.stringify(event); // event is an object i want to convert it to JSON type once the function is invoked
    console.log('reading option is working ', MyResponse)

    return {
        statusCode: 200,
        body: `All is working \n ${MyResponse}`
    };
};