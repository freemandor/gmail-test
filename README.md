# Gmail Test


## Prerequisites

- Install node: https://nodejs.org/en/
- Install globally :
    ```
    npm install ts-node -g
    npm install typescript -g
    npm install protractor -g
    webdriver-manager update
- Add login info
    
    in ./specs/user.helper.ts, add username and password
    to user object.

## Run
- start
    ``` 
    webdriver-manager start
    ```

- on a second terminal - run tests: 
    ```
    npm test
    ```
