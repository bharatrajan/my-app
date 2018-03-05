A simple react app to display ISP ranking. This project uses

- Yarn 
- Jest
- node js
- Bootstrap
- react 16.2
- create-react-app


## To run
- Clone the project
- cd `my-app`
- `npm i`
- `yarn start`
This will start the app at port 3000.

## To build
- Clone the project
- cd `my-app`
- `npm i`
- `yarn build`
- `node mockserver.js`

Final step rendered the app in port 3030. Please any port other than 3000 for the app to make AJAX Call to get the mock json.
Once the app is build any other simple http server (eg. python) can be used to render the project. 

Note : Build distination is set to `./build` so static files rendering should be rendered from `./build` directory after the app is build

## Error Handling
API call error handling is done for error sceanarios. 6 API calls will be made in non-dev mode and every call is provided with an error handling logic

## Styling
For simplicity a customised Bootstrap v3.3 is used for styling. Customization is done to kick in media queries at 800px than the default 768px Main utilities include page layout, table design and percentage-bar. There are room for improvements in this side. As we are not using the complete Bootstrap v3.3 we can use react-bootstrap and use only the components needed for our requirement 

## App Structure
````

<MainContainer>
              <CustomerTable>
                <SingleRecord/>
                ...
                <SingleRecord/>
              </CustomerTable>
              <RetailTable>
                <SingleRecord/>
                ...
                <SingleRecord/>              
              </RetailTable>
              <BackboneTable>
                <SingleRecord/>
                ...
                <SingleRecord/>              
              </BackboneTable>
              <GrowthTable>      
                <SingleRecord/>
                ...
                <SingleRecord/>              
              </GrowthTable>      
              <WholesaleTable>   
                <SingleRecord/>
                ...
                <SingleRecord/>              
              </WholesaleTable>   
              <PeeringTable>
                <SingleRecord/>
                ...
                <SingleRecord/>              
              </PeeringTable>              
</MainContainer>

````

## Assumptions & Room for improvements
It is assumed that 
- API will send be at least 1 rank record for AJAX calls.  
- API will send be at most 10 rank record for AJAX calls. If this is not the case we need to sort the response based on the rank and splice the array to carry only top 10 records
- Two ISP can have the same rank.  
- If the API response is taking more than 300ms then we can utilise a spinner.
- Bootstrap css is not fully utilized. 


